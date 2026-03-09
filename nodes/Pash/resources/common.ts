import { INodeProperties } from "n8n-workflow"

export const common_config: INodeProperties[] = [

    // Operações
    {
        displayName: 'Operação',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        options: [
            {
                name: 'Listar',
                value: 'list',
                action: 'Listar',
                description: 'Retorna lista de dados'
            },
            {
                name: 'Obter',
                value: 'get',
                action: 'Obter',
                description: 'Obtém dados de um modelo'
            },
            {
                name: 'Notificar',
                value: 'notify',
                action: 'Notificar',
                description: 'Notifica um modelo'
            }
        ],
        default: 'get'
    },

    // Resource
    {
        displayName: 'Modelo',
        name: 'resource',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                operation: ['list', 'get', 'notify']
            }
        },
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
            }
        ],
        default: 'user'
    },

    
]