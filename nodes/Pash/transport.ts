import type { IDataObject, IExecuteFunctions, IHttpRequestMethods, IHttpRequestOptions, } from 'n8n-workflow'

export async function pashApiRequest( this: IExecuteFunctions, method: IHttpRequestMethods, endpoint: string, body: object = {}, qs?: IDataObject, ) {

	const credentials = await this.getCredentials('pashApi');

	const options: IHttpRequestOptions = {
		method,
        url: `${credentials.endpoint}${endpoint}`,
		body,
		qs,
		json: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
	}

	return await this.helpers.httpRequestWithAuthentication.call( this, 'pashApi', options)
}