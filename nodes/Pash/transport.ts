import type { IDataObject, IExecuteFunctions, IHttpRequestMethods, IHttpRequestOptions, } from 'n8n-workflow'

export async function pashApiRequest( this: IExecuteFunctions, method: IHttpRequestMethods, endpoint: string, body: object = {}, qs?: IDataObject, ) {
	const options: IHttpRequestOptions = {
		method,
        url: `http://127.0.0.1:8000/api/external/n8n${endpoint}`,
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