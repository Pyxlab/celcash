import { initContract } from '@ts-rest/core'
import {
    pixPaymentBodySchema,
    pixPaymentResponseSchema,
    transferInternalBodySchema,
    transferInternalResponseSchema,
} from '../schemas/common'

const c = initContract()

export const pix = c.router(
    {
        payment: {
            method: 'POST',
            path: '/payment',
            responses: {
                200: pixPaymentResponseSchema,
            },
            body: pixPaymentBodySchema,
        },
    },
    { pathPrefix: '/pix' },
)

export const transfer = c.router(
    {
        internal: {
            method: 'POST',
            path: '/internal',
            responses: {
                200: transferInternalResponseSchema,
            },
            body: transferInternalBodySchema,
        },
    },
    {
        pathPrefix: '/transfer',
    },
)
