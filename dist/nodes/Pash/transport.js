"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pashApiRequest = pashApiRequest;
async function pashApiRequest(method, endpoint, body = {}, qs) {
    const options = {
        method,
        url: `http://127.0.0.1:8000/api/external/n8n${endpoint}`,
        body,
        qs,
        json: true,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    };
    return await this.helpers.httpRequestWithAuthentication.call(this, 'pashApi', options);
}
//# sourceMappingURL=transport.js.map