import { initContract } from '@ts-rest/core'
import { ZodError } from 'zod'
import {
    anteciparBodySchema,
    anteciparResponseSchema,
    listarAntecipacoesParamsSchema,
    listarAntecipacoesResponseSchema,
    simulatarAntecipacaoBodySchema,
    simulatarAntecipacaoResponseSchema,
} from '../schemas/antecipation.js'

const c = initContract()

/**
 * Router for antecipation operations.
 *
 * @example
 * ```ts
 * import { initClient } from '@ts-rest/core'
 * import { antecipation } from '@cel_cash/core/contract'
 *
 * const client = initClient(antecepation, {
 *   baseUrl: 'https://api.celcoin.com.br'
 * })
 *
 * const antecipations = await client.simulate.getByFilters({ ... })
 * const simulatedAntecipation = await client.simulate.create({ ... })
 * const antecipatedReceivables = await client.create({ ... })
 * ````
 */
export const antecipation = c.router(
    {
        /**
         * Operations for antecipation simulations.
         */
        simulate: c.router(
            {
                /**
                 * Get antecipations by filters.
                 * @method GET
                 * @path /antecipation/simulate/get-by-filters
                 * @responses 200 - Success response with the list of antecipations
                 * @query - Query parameters for filtering antecipations
                 * @summary List antecipations simulations
                 */
                getByFilters: {
                    method: 'GET',
                    path: '/get-by-filters',
                    responses: {
                        200: listarAntecipacoesResponseSchema,
                    },
                    query: listarAntecipacoesParamsSchema,
                    summary: 'Lista as simulações antecipação de transações',
                },
                /**
                 * Create antecipation simulation.
                 * @method POST
                 * @path /simulate
                 * @responses 200 - Success response with the simulated antecipation
                 * @body - Request body for simulating antecipation
                 * @summary Simulate antecipation
                 */
                create: {
                    method: 'POST',
                    path: '/',
                    responses: {
                        200: simulatarAntecipacaoResponseSchema,
                    },
                    body: simulatarAntecipacaoBodySchema,
                    summary: 'Simula antecipação',
                },
            },
            { pathPrefix: '/simulate' },
        ),
        /**
         * Create antecipation.
         * @method POST
         * @path /antecipation
         * @responses 200 - Success response with the antecipated receivables
         * @body - Request body for antecipating receivables
         * @summary Antecipate receivables
         */
        create: {
            method: 'POST',
            path: '/',
            responses: {
                200: anteciparResponseSchema,
            },
            body: anteciparBodySchema,
            summary: 'Antecipar recebíveis',
        },
    },
    {
        pathPrefix: '/antecipation',
        commonResponses: { 507: c.type<ZodError>() },
    },
)
