import { ILoadOptionsFunctions, INodePropertyOptions } from "n8n-workflow"

export const methods_config = {

    loadOptions: {

        async getServices(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
            const credentials = await this.getCredentials('pashApi')

            const response = await this.helpers.httpRequestWithAuthentication.call(this, 'pashApi', {
                method: 'GET',
                url: `${credentials.endpoint}/services`,
                json: true
            })

            return response.map((service: { id: string; name: string }) => ({
                name: service.name,
                value: service.id,
            }));

        }

    }

}