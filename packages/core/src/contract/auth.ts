import { initContract } from '@ts-rest/core'
import { ZodError, z } from 'zod'
import {
    authorizationBodySchema,
    authorizationResponseSchema,
} from '../schemas/common.js'

const c = initContract()

/**
 * Represents the authentication router.
 *
 * @example
 * ```ts
 * import { initClient } from '@ts-rest/core'
 * import { auth } from '@cel_cash/core/contract'
 *
 * const client = initClient(auth, {
 *  baseUrl: 'https://api.celcoin.com.br'
 * })
 *
 * const token = await client.token({ ... })
 * ```
 */
export const auth = c.router(
    {
        /**
         * Represents the token endpoint.
         * @method POST
         * @path /token
         * @responses 200 - Success response with the token
         * @body - Request body for authentication
         * @headers - Request headers for authentication
         * @summary Get token
         */
        token: {
            method: 'POST',
            path: '/token',
            responses: {
                200: authorizationResponseSchema,
            },
            body: authorizationBodySchema,
            headers: z.object({
                Authorization: z.coerce.string().regex(/^Basic .+$/),
            }),
        },
    },
    {
        commonResponses: {
            507: c.type<ZodError>(),
        },
    },
)
