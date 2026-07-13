import { INodeProperties } from "n8n-workflow"

export const list_config: INodeProperties[] = [

    // Campo: Página
    {
        displayName: 'Página',
        name: 'page',
        type: 'number',
        default: 1,
        required: true,
        displayOptions: {
            show: {
                operation: ['list']
            }
        }
    },

    // Campo: Resultados por página
    {
        displayName: 'Resultados Por Página',
        name: 'per_page',
        type: 'number',
        default: 10,
        required: true,
        displayOptions: {
            show: {
                operation: ['list']
            }
        }
    }

]