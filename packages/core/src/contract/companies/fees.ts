import { initContract } from '@ts-rest/core'

const c = initContract()

export const fees = c.router(
    {
        // Todo: Listar Taxas
    },
    {
        pathPrefix: '/fees',
    },
)
