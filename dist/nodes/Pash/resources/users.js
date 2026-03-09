"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users_config = void 0;
exports.users_config = [
    {
        displayName: 'UUID',
        placeholder: 'UUID do usuário',
        description: "UUID do usuário a ser buscado",
        name: 'user_id',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: {
                operation: ['get', 'notify'],
                resource: ['user']
            }
        }
    },
];
//# sourceMappingURL=users.js.map