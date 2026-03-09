import { INodeProperties } from "n8n-workflow"

export const users_config: INodeProperties[] = [

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