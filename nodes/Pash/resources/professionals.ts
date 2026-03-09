import { INodeProperties } from "n8n-workflow"

export const professionals_config: INodeProperties[] = [

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
				operation: ['get', 'notify'],
                resource: ['professional']
			},
		}
	}
]