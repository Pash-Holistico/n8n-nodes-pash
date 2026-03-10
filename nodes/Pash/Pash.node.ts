import { IExecuteFunctions, INodeExecutionData, NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow'

// App
import { users_config } from './resources/users'
import { professionals_config } from './resources/professionals'
import { common_config } from './resources/common'
import { notify_config } from './resources/notify'
import { pashApiRequest } from './transport'

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
			...notify_config
		],
	};

	async execute(this: IExecuteFunctions) {

		// Common
		const operation = this.getNodeParameter('operation', 0)
		const resource = this.getNodeParameter('resource', 0)

		const callback: INodeExecutionData[] = []

		// Get
		if (operation === 'get') {

			// Get User
			if (resource === 'user') {
				const user_id = this.getNodeParameter('user_id', 0)
				const response = await pashApiRequest.call(this, 'GET', `/users/${user_id}`)
				callback.push({ json: response })
			}

			// Get Professional
			if (resource === 'professional') {
				const professional_id = this.getNodeParameter('professional_id', 0)
				const response = await pashApiRequest.call(this, 'GET', `/professionals/${professional_id}`)
				callback.push({ json: response })
			}
		}

		// Notify
		if(operation === 'notify'){

			// Notify
			const id = resource === 'user' ? this.getNodeParameter('user_id', 0, '') : this.getNodeParameter('professional_id', 0, '')
			const channel = this.getNodeParameter('channel', 0, '')

			// Push
			if(channel === 'push'){

				console.log(this.getNodeParameter('push_notification.buttons.button', 0))

				const response = await pashApiRequest.call(this, 'POST', `/send_push`, {
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

		return [callback]
	}

	
}
