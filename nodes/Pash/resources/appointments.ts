/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items, n8n-nodes-base/node-param-options-type-unsorted-items, n8n-nodes-base/node-param-collection-type-unsorted-items, n8n-nodes-base/node-param-operation-option-action-miscased */
import { INodeProperties } from "n8n-workflow"

export const appointments_config: INodeProperties[] = [

	// Operações de atendimentos
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['appointment']
			}
		},
		options: [
			{
				name: 'Listar Atendimentos',
				value: 'list',
				action: 'Listar atendimentos',
			},
			{
				name: 'Obter Atendimento',
				value: 'get',
				action: 'Obter dados do atendimento',
			},
			{
				name: 'Metadados Do Atendimento',
				value: 'metadata',
				action: 'Metadados do atendimento',
			}
		],
		default: 'get'
	},

	// Campo: UUID do Atendimento
	{
		displayName: 'UUID',
		placeholder: 'UUID do atendimento',
		description: "UUID do atendimento a ser buscado",
		name: 'appointment_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['appointment'],
				operation: ['get', 'metadata'],
			}
		}
	},

	// Campo: Filtros de Busca
	{
		displayName: 'Filtros De Busca',
		name: 'filters',
		description: 'Limite a busca por filtros',
		type: 'collection',
		placeholder: 'Adicionar filtro',
		default: {},
		displayOptions: {
			show: {
				resource: ['appointment'],
				operation: ['list']
			}
		},
		options: [

			// Campo: Status
			{
				displayName: 'Status',
				description: 'Filtra por status',
				name: 'status',
				default: '',
				type: 'options',
				options: [
					{
						name: 'Todos',
						value: '',
					},
					{
						name: 'Confirmado',
						value: 'confirmed',
					},
					{
						name: 'Cancelado',
						value: 'canceled',
					},
					{
						name: 'Rejeitado',
						value: 'rejected',
					},
					{
						name: 'Concluído',
						value: 'done',
					},
				]
			}
		]
	}
]