"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.professionals_config = void 0;
exports.professionals_config = [
    {
        displayName: 'UUID',
        placeholder: 'UUID do profissional',
        name: 'professional_id',
        description: "UUID do profissional a ser buscado",
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                operation: ['get', 'notify'],
                resource: ['professional']
            },
        }
    }
];
//# sourceMappingURL=professionals.js.map