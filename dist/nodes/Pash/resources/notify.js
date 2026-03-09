"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify_config = void 0;
exports.notify_config = [
    {
        displayName: 'Parâmetros da Notificação',
        name: 'push_notification',
        description: 'Descrição dos parâmetros',
        type: 'collection',
        placeholder: 'Adicionar parâmetro',
        required: true,
        default: {
            channel: 'push',
            title: 'Título da notificação',
            body: 'Mensagem da notificação'
        },
        displayOptions: {
            show: {
                operation: ['notify']
            }
        },
        options: [
            {
                displayName: 'Canal',
                description: "O canal que a notificação será entregue",
                name: 'channel',
                type: 'options',
                default: 'push',
                options: [
                    {
                        name: 'Push',
                        value: 'push',
                        description: 'Notificações Push no aplicativo'
                    }
                ],
            },
            {
                displayName: 'Título',
                name: 'title',
                description: 'O título de notificação',
                type: 'string',
                default: ''
            },
            {
                displayName: 'Corpo',
                name: 'body',
                description: 'O corpo de notificação',
                type: 'string',
                typeOptions: {
                    rows: 2,
                    maxValue: 140
                },
                default: ''
            },
            {
                displayName: 'Prioridade',
                description: "A prioridade da notificação no dispositivo",
                name: 'priority',
                type: 'options',
                default: 'high',
                options: [
                    {
                        name: 'Baixa',
                        value: 'low'
                    },
                    {
                        name: 'Alta',
                        value: 'high'
                    }
                ],
            },
        ]
    },
];
//# sourceMappingURL=notify.js.map