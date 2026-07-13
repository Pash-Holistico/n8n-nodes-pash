import { INodeProperties } from "n8n-workflow"

export const api_config: INodeProperties[] = [

	// Campo: Operação
	{
		displayName: 'Método',
		description: "Tipo de operação na API",
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		default: 'GET',
		displayOptions: {
			show: {
				resource: ['api']
			}
		},
		options: [
			{
				name: 'GET',
				value: 'GET',
				action: 'GET'
			},
			{
				name: 'POST',
				value: 'POST',
				action: 'POST'
			},
			{
				name: 'PUT',
				value: 'PUT',
				action: 'PUT'
			},
			{
				name: 'DELETE',
				value: 'DELETE',
				action: 'DELETE'
			}
		],
	},

	// Campo: Path
	{
		displayName: 'Path',
		name: 'path',
		default: '/users',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['api']
			}
		},
	},

	// Campo body
	{
		displayName: 'Corpo',
		name: 'body',
		default: '',
		type: 'json',
		displayOptions: {
			show: {
				resource: ['api'],
				operation: ['POST', 'PUT']
			}
		},
	}


]