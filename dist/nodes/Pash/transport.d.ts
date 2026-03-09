import type { IDataObject, IExecuteFunctions, IHttpRequestMethods } from 'n8n-workflow';
export declare function pashApiRequest(this: IExecuteFunctions, method: IHttpRequestMethods, endpoint: string, body?: object, qs?: IDataObject): Promise<any>;
