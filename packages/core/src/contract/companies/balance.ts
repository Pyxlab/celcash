import { initContract } from '@ts-rest/core'

const c = initContract()

export const balance = c.router(
    {
        // Todo: Consultar Extrato
        // Todo: Ver Saldo
    },
    { pathPrefix: '/balance' },
)
