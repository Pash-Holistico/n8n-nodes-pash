import type { IAuthenticateGeneric, Icon, ICredentialTestRequest, ICredentialType, INodeProperties, } from 'n8n-workflow'

export class PashApi implements ICredentialType {
	name = 'pashApi';

	displayName = 'Pash Global API'

	icon: Icon = {
		light: 'file:pash.svg',
		dark: 'file:pash.dark.svg',
	}

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-pash?tab=readme-ov-file#credentials'

	properties: INodeProperties[] = [
		{
			displayName: 'Endpoint',
			name: 'endpoint',
			type: 'string',
			required: true,
			default: 'https://endpoint.domain.com/path'
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: ''
		},
	]

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-N8N-Authorization': '={{$credentials.accessToken}}',
			},
		},
	}

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: '={{$credentials.endpoint}}'
		},
	}
}
