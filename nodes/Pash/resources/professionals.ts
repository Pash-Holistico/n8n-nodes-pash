import { INodeProperties } from "n8n-workflow"

export const professionals_config: INodeProperties[] = [

	// Operações de profissionais
	{
		displayName: 'Operação',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['professional']
			}
		},
		options: [
			{
				name: 'Listar Profissionais',
				value: 'list',
				action: 'Listar profissionais',
			},
			{
				name: 'Obter Profissional',
				value: 'get',
				action: 'Obter dados do profissional',
			},
			{
				name: 'Notificar Profissional',
				value: 'notify',
				action: 'Notificar profissional',
			},
		],
		default: 'get'
	},

    // Campo: UUID do Profissional
	{
		displayName: 'UUID',
        placeholder: 'UUID do profissional',
		name: 'professional_id',
        description: "UUID do profissional a ser buscado",
		type: 'string',
        default: '',
        required: true,
		displayOptions: {
			show: {
                resource: ['professional'],
				operation: ['get', 'notify'],
			},
		}
	}
]