import { INodeProperties } from "n8n-workflow"

export const common_config: INodeProperties[] = [

    // Resource
    {
        displayName: 'Recurso',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        options: [
            {
                name: 'Usuário',
                value: 'user',
                action: 'user',
                description: 'Operações de usuários'
            },
            {
                name: 'Profissional',
                value: 'professional',
                action: 'professional',
                description: 'Operação de profissionais'
            },
            {
                name: 'Atendimento',
                value: 'appointment',
                action: 'appointment',
                description: 'Operação de atendimentos'
            },
            {
                name: 'API',
                value: 'api',
                action: 'API',
                description: 'Chamada na API'
            }
        ],
        default: 'user'
    },

]