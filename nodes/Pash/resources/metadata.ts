import { INodeProperties } from "n8n-workflow"

export const metadata_config: INodeProperties[] = [

	// Campo: Operação
	{
		displayName: 'Operação',
		description: "Tipo de operação nos metadados",
		name: 'metadata_operation',
		type: 'options',
		default: 'get',
		displayOptions: {
			show: {
				operation: ['metadata']
			}
		},
		options: [
			{
				name: 'Obter metadados',
				value: 'get'
			},
			{
				name: 'Atualizar metadados',
				value: 'set'
			}
		],
	},

	// Campo: Metadados
	{
		displayName: 'Metadados',
		description: "Adicionar metadados",
		name: 'metadata',
		type: 'fixedCollection',
		required: true,
		typeOptions: {
			multipleValues: true,
			multipleValueButtonText: 'Adicionar metadados...'
		},
		displayOptions: {
			show: {
				operation: ['metadata'],
				metadata_operation: ['set']
			}
		},
		default: {},
		options: [
			{
				name: 'metadata',
				displayName: 'Metadados',
				values: [
					{
						displayName: 'Campo',
						name: 'field',
						required: true,
						type: 'string',
						default: '',
					},
					{
						displayName: 'Valor',
						name: 'value',
						required: false,
						type: 'string',
						default: '',
					},
				],
			},
		]
	},


]