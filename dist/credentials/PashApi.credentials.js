"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PashApi = void 0;
class PashApi {
    constructor() {
        this.name = 'pashApi';
        this.displayName = 'Pash Global API';
        this.icon = {
            light: 'file:pash.svg',
            dark: 'file:pash.dark.svg',
        };
        this.documentationUrl = 'https://github.com/org/-pash?tab=readme-ov-file#credentials';
        this.properties = [
            {
                displayName: 'Access Token',
                name: 'accessToken',
                type: 'string',
                typeOptions: { password: true },
                required: true,
                default: ''
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'X-N8N-Authorization': '={{$credentials.accessToken}}',
                },
            },
        };
        this.test = {
            request: {
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/external/n8n'
            },
        };
    }
}
exports.PashApi = PashApi;
//# sourceMappingURL=PashApi.credentials.js.map