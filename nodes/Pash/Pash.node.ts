import { IExecuteFunctions, INodeExecutionData, NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow'

// App
import { users_config } from './resources/users'
import { professionals_config } from './resources/professionals'
import { common_config } from './resources/common'
import { notify_config } from './resources/notify'
import { pashApiRequest } from './transport'
import { metadata_config } from './resources/metadata'
import { api_config } from './resources/api'
import { list_config } from './resources/list'
import { methods_config } from './resources/methods'

export class Pash implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Pash',
		name: 'pash',
		icon: { light: 'file:pash.svg', dark: 'file:pash.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interação com a Plataforma Pash',
		defaults: {
			name: 'Pash',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'pashApi', required: true }],
		properties: [
			...common_config,
			...users_config,
			...professionals_config,
			...metadata_config,
			...list_config,
			...notify_config,
			...api_config
		],
	};

	methods = methods_config;

	async execute(this: IExecuteFunctions) {

		// Common
		const operation = this.getNodeParameter('operation', 0, '')
		const resource = this.getNodeParameter('resource', 0, '')
		const id = resource === 'user' ? this.getNodeParameter('user_id', 0, '') : this.getNodeParameter('professional_id', 0, '')

		const callback: INodeExecutionData[] = []

		// Get
		if (operation === 'get') {
			const response = await pashApiRequest.call(this, 'GET', `/${resource}s/${id}`)
			callback.push({ json: response })
		}

		// List
		if (operation === 'list') {
			const page = this.getNodeParameter('page', 0, 1)
			const per_page = this.getNodeParameter('per_page', 0, 10)
			const status = this.getNodeParameter('filters.status', 0, null)
			const term = this.getNodeParameter('filters.term', 0, '')
			const services = this.getNodeParameter('filters.services', 0, null)

			const response = await pashApiRequest.call(this, 'GET', `/${resource}s`, {}, { page, per_page, status, term, services })
			callback.push({ json: response })
		}

		// Notify
		if (operation === 'notify') {

			// Notify
			const channel = this.getNodeParameter('channel', 0, '')

			// Push
			if (channel === 'push') {

				const response = await pashApiRequest.call(this, 'POST', `/notify/push`, {
					id,
					model: resource,
					title: this.getNodeParameter('push_notification.title', 0, ''),
					body: this.getNodeParameter('push_notification.body', 0, ''),
					priority: this.getNodeParameter('push_notification.priority', 0, 'low'),
					channel_id: this.getNodeParameter('push_notification.channel_id', 0, 'low'),
					buttons: this.getNodeParameter('push_notification.buttons.button', 0, [])
				})
				callback.push({ json: response })
			}

		}

		// Insights
		if (operation === 'insights') {
			const response = await pashApiRequest.call(this, 'GET', `/insights/${resource}/${id}`)
			callback.push({ json: response })
		}

		// Metadata
		if (operation === 'metadata') {

			const metadata_operation = this.getNodeParameter('metadata_operation', 0, '')

			// Get
			if (metadata_operation === 'get') {
				const response = await pashApiRequest.call(this, 'GET', `/metadata/${resource}/${id}`)
				callback.push({ json: response })
			}

			// Set
			if (metadata_operation === 'set') {
				const response = await pashApiRequest.call(this, 'PUT', `/metadata/${resource}/${id}`, {
					metadata: this.getNodeParameter('metadata.metadata', 0, [])
				})
				callback.push({ json: response })
			}

		}

		// API
		if (resource === 'api') {
			const path = this.getNodeParameter('path', 0, '')
			const body = this.getNodeParameter('body', 0, '')
			// @ts-expect-error Ignorando ESLint
			const response = await pashApiRequest.call(this, operation, path, body)
			callback.push({ json: response })
		}

		return [callback]
	}


}
