/* eslint-disable n8n-nodes-base/node-param-operation-option-action-miscased */
import type { IWebhookFunctions, INodeType, INodeTypeDescription, IWebhookResponseData, } from 'n8n-workflow'

export class PashWebhook implements INodeType {

	description: INodeTypeDescription = {
		displayName: 'Pash Webhooks',
		name: 'pashWebhook',
		icon: 'file:pash.svg',
		group: ['trigger'],
		version: 1,
        usableAsTool: true,
		description: 'Recebe eventos de Pash',
		defaults: {
			name: 'Pash Webhook',
		},

		inputs: [],
		outputs: ['main'],

        properties: [
            {
                displayName: 'Recurso',
                name: 'resource',
                type: 'options',
                default: 'users',
                noDataExpression: true,
                options: [
                    {
                        name: 'Usuário',
                        value: 'users'
                    },
                    {
                        name: 'Profissional',
                        value: 'professionals'
                    }
                ]
            },

            // Eventos de Usuários
            {
                displayName: 'Evento',
                name: 'operation',
                type: 'options',
				noDataExpression: true,
                default: 'users/registered',
                displayOptions: {
                    show: {
                        resource: ['users']
                    }
                },
                options: [
                    {
                        name: 'Registrado',
                        value: 'users/registered',
                        action: 'Usuário registrado',
                        description: 'Quando um usuário é registrado'
                    },
                    {
                        name: 'Atualizado',
                        value: 'users/updated',
                        action: 'Usuário atualizado',
                        description: 'Quando um usuário é atualizado'
                    }                  
                ]
            },

            // Eventos de Profissionais
            {
                displayName: 'Evento',
                name: 'operation',
                type: 'options',
				noDataExpression: true,
                default: 'professionals/registered',
                displayOptions: {
                    show: {
                        resource: ['professionals']
                    }
                },
                options: [
                    {
                        name: 'Registrado',
                        value: 'professionals/registered',
                        action: 'Profissional registrado',
                        description: 'Quando um profissional é registrado'
                    },
                    {
                        name: 'Atualizado',
                        value: 'professionals/updated',
                        action: 'Profissional atualizado',
                        description: 'Quando um profissional é atualizado'
                    },
                    {
                        name: 'Credenciamento Enviado',
                        value: 'professionals/submited',
                        action: 'Credenciamento enviado',
                        description: 'Quando um profissional submete o credenciamento'
                    },
                    {
                        name: 'Onboarding Finalizado',
                        value: 'professionals/started',
                        action: 'Onboarding finalizado',
                        description: 'Quando um profissional finaliza o onboarding'
                    },                    
                ]
            }
        ],

		webhooks: [
			{
				name: 'default',
				httpMethod: 'POST',
				responseMode: 'onReceived',
				path: '={{"platform/" + $parameter["operation"]}}',
                isFullPath: true
			},
		],

		
	}

    async webhook(this: IWebhookFunctions): Promise<IWebhookResponseData> {

		const body = this.getBodyData();
		const headers = this.getHeaderData();
		const query = this.getQueryData();

		return {
			workflowData: [
				[
					{
						json: {
							body,
							headers,
							query,
						},
					},
				],
			],
		};
	}
}