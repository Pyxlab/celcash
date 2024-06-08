import { initContract } from '@ts-rest/core'
import { ZodError, z } from 'zod'
import {
    authorizationBodySchema,
    authorizationResponseSchema,
} from '../schemas/common'

const c = initContract()

export const auth = c.router(
    {
        token: {
            method: 'POST',
            path: '/token',
            responses: {
                200: authorizationResponseSchema,
            },
            body: authorizationBodySchema,
            headers: z.object({
                Authorization: z.string().regex(/^Basic .+$/),
            }),
        },
    },
    {
        commonResponses: {
            507: c.type<ZodError>(),
        },
    },
)
