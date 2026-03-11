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
			{
				name: 'Insights do Profissional',
				value: 'insights',
				action: 'Insights do Profissional',
			},
			{
				name: 'Metadados do Profissional',
				value: 'metadata',
				action: 'Metadados do Profissional',
			}
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
				operation: ['get', 'notify', 'insights', 'metadata'],
			},
		}
	},

	// Campo: Filtros de Busca
	{
		displayName: 'Filtros de busca',
		name: 'filters',
		description: 'Limite a busca por filtros',
		type: 'collection',
		placeholder: 'Adicionar filtro',
		default: {},
		displayOptions: {
			show: {
				resource: ['professional'],
				operation: ['list']
			}
		},
		options: [

			// Campo: Status
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				default: '',
				options: [
					{
						name: 'Todos',
						value: ''
					},
					{
						name: 'Ativo',
						value: 'active'
					},
					{
						name: 'Em Análise',
						value: 'analyzing'
					},
					{
						name: 'Aprovado',
						value: 'approved'
					},
					{
						name: 'Pagamento',
						value: 'payment'
					},
					{
						name: 'Incompleto',
						value: 'incomplete'
					}
				]
			},

			{
				displayName: 'Serviços',
				description: 'Serviços que o profissional atende',
				name: 'services',
				type: 'multiOptions',
				placeholder: 'Selecionar serviços',
				typeOptions: {
					loadOptionsMethod: 'getServices'
				},
				default: ''
			},

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