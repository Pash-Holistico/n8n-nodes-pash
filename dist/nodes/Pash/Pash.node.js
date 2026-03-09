"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pash = void 0;
const n8n_workflow_1 = require("n8n-workflow");
const users_1 = require("./resources/users");
const professionals_1 = require("./resources/professionals");
const common_1 = require("./resources/common");
const notify_1 = require("./resources/notify");
const transport_1 = require("./transport");
class Pash {
    constructor() {
        this.description = {
            displayName: 'Pash',
            name: 'pash',
            icon: { light: 'file:pash.svg', dark: 'file:pash.dark.svg' },
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Interação com a Plataforma Pash',
            defaults: {
                name: 'Pash',
            },
            usableAsTool: true,
            inputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            outputs: [n8n_workflow_1.NodeConnectionTypes.Main],
            credentials: [{ name: 'pashApi', required: true }],
            properties: [
                ...common_1.common_config,
                ...users_1.users_config,
                ...professionals_1.professionals_config,
                ...notify_1.notify_config
            ],
        };
    }
    async execute() {
        const operation = this.getNodeParameter('operation', 0);
        const resource = this.getNodeParameter('resource', 0);
        const callback = [];
        if (operation === 'get') {
            if (resource === 'user') {
                const user_id = this.getNodeParameter('user_id', 0);
                const response = await transport_1.pashApiRequest.call(this, 'GET', `/users/${user_id}`);
                callback.push({ json: response });
            }
            if (resource === 'professional') {
                const professional_id = this.getNodeParameter('professional_id', 0);
                const response = await transport_1.pashApiRequest.call(this, 'GET', `/professionals/${professional_id}`);
                callback.push({ json: response });
            }
        }
        return [callback];
    }
}
exports.Pash = Pash;
//# sourceMappingURL=Pash.node.js.map