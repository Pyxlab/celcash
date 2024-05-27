import { initContract } from '@ts-rest/core'

const c = initContract()

export const chargebacks = c.router(
    {
        // Todo: Implementar Listar Chargebacks
        // Todo: Implementar Desistir Disputa
        // Todo: Implementar Enviar Documentação
    },
    {
        pathPrefix: '/chargebacks',
    },
)
