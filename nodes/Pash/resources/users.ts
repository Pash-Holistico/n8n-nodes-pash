/* eslint-disable n8n-nodes-base/node-param-collection-type-unsorted-items, n8n-nodes-base/node-param-options-type-unsorted-items, n8n-nodes-base/node-param-collection-type-unsorted-items, n8n-nodes-base/node-param-operation-option-action-miscased */
import { INodeProperties } from "n8n-workflow"

export const users_config: INodeProperties[] = [

	// Operações de usuários
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['user']
			}
		},
		options: [
			{
				name: 'Listar Usuários',
				value: 'list',
				action: 'Listar usuários',
			},
			{
				name: 'Obter Usuário',
				value: 'get',
				action: 'Obter dados do usuário',
			},
			{
				name: 'Notificar Usuário',
				value: 'notify',
				action: 'Notificar usuário',
			},
			{
				name: 'Insights Do Usuário',
				value: 'insights',
				action: 'Insights do usuário',
			},
			{
				name: 'Metadados Do Usuário',
				value: 'metadata',
				action: 'Metadados do usuário',
			}
		],
		default: 'get'
	},

	// Campo: UUID do Usuário
	{
		displayName: 'UUID',
		placeholder: 'UUID do usuário',
		description: "UUID do usuário a ser buscado",
		name: 'user_id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['get', 'notify', 'insights', 'metadata'],
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
				resource: ['user'],
				operation: ['list']
			}
		},
		options: [

			// Campo: Termo
			{
				displayName: 'Termo',
				description: 'Termos de busca aceitos: nome, email',
				name: 'term',
				default: '',
				type: 'string'
			}
		]
	}
]