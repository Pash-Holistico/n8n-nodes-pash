/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items, n8n-nodes-base/node-param-options-type-unsorted-items */
import { INodeProperties } from "n8n-workflow"

export const notify_config: INodeProperties[] = [

	// Campo: Canal de Notificação
	{
		displayName: 'Canal',
		description: "O canal que a notificação será entregue",
		name: 'channel',
		type: 'options',
		default: 'push',
		displayOptions: {
			show: {
				operation: ['notify']
			}
		},
		options: [
			{
				name: 'Push',
				value: 'push',
				description: 'Notificação Push no aplicativo'
			},
			{
				name: 'SMS',
				value: 'sms',
				description: 'Notificação via SMS'
			},
			{
				name: 'Whatsapp',
				value: 'whatsapp',
				description: 'Notificação via Whatsapp'
			}
		],
	},

	// SMS
	{
		displayName: 'Texto da mensagem',
		name: 'text',
		description: 'O texto a ser enviado',
		type: 'string',
		placeholder: 'Inclua uma mensagem de até 140 caracteres...',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['notify'],
				channel: ['sms']
			}
		}
	},

	// Whatsapp
	{
		displayName: 'Corpo da mensagem',
		name: 'body',
		description: 'O texto a ser enviado',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				operation: ['notify'],
				channel: ['whatsapp']
			}
		}
	},

	// Push
	{
		displayName: 'Parâmetros Da Notificação',
		name: 'push_notification',
		description: 'Descrição dos parâmetros',
		type: 'collection',
		placeholder: 'Adicionar parâmetro',
		required: true,
		default: {
			channel: 'push',
			title: 'Título da notificação',
			body: 'Mensagem da notificação'
		},
		displayOptions: {
			show: {
				operation: ['notify'],
				channel: ['push']
			}
		},

		options: [

			// Campo: Título
			{
				displayName: 'Título',
				name: 'title',
				description: 'O título de notificação',
				type: 'string',
				default: ''
			},

			// Campo: Corpo
			{
				displayName: 'Corpo',
				name: 'body',
				description: 'O corpo de notificação',
				type: 'string',
				typeOptions: {
					rows: 2,
					maxValue: 140
				},
				default: ''
			},

			// Campo: Prioridade
			{
				displayName: 'Prioridade',
				description: "A prioridade da notificação no dispositivo",
				name: 'priority',
				type: 'options',
				default: 'high',
				options: [
					{
						name: 'Baixa',
						value: 'low'
					},
					{
						name: 'Alta',
						value: 'high'
					}
				],
			},

			// Campo: Canal (Android)
			{
				displayName: 'ID Do Canal (Android)',
				description: "O ID do canal de notificações (apenas android)",
				name: 'channel_id',
				type: 'string',
				default: '',
				options: [
					{
						name: 'Baixa',
						value: 'low'
					},
					{
						name: 'Alta',
						value: 'high'
					}
				],
			},

			// Campo: Botões
			{
				displayName: 'Botões Da Notificação',
				description: "Botões de ação da notificação",
				name: 'buttons',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
					maxValue: 3,
					multipleValueButtonText: 'Adicionar botão...'
				},
				default: {},
				options: [
					{
						name: 'button',
						displayName: 'Botão',
						values: [
							{
								displayName: 'Texto',
								name: 'text',
								required: true,
								type: 'string',
								default: '',
							},
							{
								displayName: 'Ação',
								name: 'action',
								required: true,
								type: 'string',
								default: '',
							},
							{
								displayName: 'ID',
								name: 'id',
								required: true,
								type: 'string',
								default: '',
							},
						],
					},
				]
			},

		]
	},


]