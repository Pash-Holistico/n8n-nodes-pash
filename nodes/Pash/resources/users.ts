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
				operation: ['get', 'notify'],
				resource: ['user']
			}
		}
	},
]