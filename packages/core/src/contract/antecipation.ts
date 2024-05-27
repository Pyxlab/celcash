import { initContract } from '@ts-rest/core'
import {
    anteciparBodySchema,
    anteciparResponseSchema,
    listarAntecipacoesParamsSchema,
    listarAntecipacoesResponseSchema,
    simulatarAntecipacaoBodySchema,
    simulatarAntecipacaoResponseSchema,
} from '../schemas/antecipation'

const c = initContract()

export const antecipation = c.router(
    {
        simulate: c.router(
            {
                getByFilters: {
                    method: 'GET',
                    path: '/get-by-filters',
                    responses: {
                        201: listarAntecipacoesResponseSchema,
                    },
                    query: listarAntecipacoesParamsSchema,
                    summary: 'Lista as simulações antecipação de transações',
                },
                create: {
                    method: 'POST',
                    path: '/',
                    responses: {
                        201: simulatarAntecipacaoResponseSchema,
                    },
                    body: simulatarAntecipacaoBodySchema,
                    summary: 'Simula antecipação',
                },
            },
            { pathPrefix: '/simulate' },
        ),
        create: {
            method: 'POST',
            path: '/',
            responses: {
                201: anteciparResponseSchema,
            },
            body: anteciparBodySchema,
            summary: 'Antecipar recebíveis',
        },
    },
    { pathPrefix: '/antecipation' },
)
