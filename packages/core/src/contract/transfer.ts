import { initContract } from '@ts-rest/core'
import {
    pixPaymentBodySchema,
    pixPaymentResponseSchema,
    transferInternalBodySchema,
    transferInternalResponseSchema,
} from '../schemas/common.js'

const c = initContract()

/**
 * Represents the Pix router for handling payment requests.
 */
export const pix = c.router(
    {
        /**
         * Initiates a new Pix payment.
         * @method POST
         * @path /pix/payment
         * @responses 200 - pixPaymentResponseSchema
         * @body pixPaymentBodySchema
         */
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

/**
 * Represents a transfer contract.
 * @remarks
 * This contract allows for transferring funds internally.
 */
export const transfer = c.router(
    {
        /**
         * Transfers funds internally.
         * @method POST
         * @path /transfer/internal
         * @responses 200 - transferInternalResponseSchema
         * @body transferInternalBodySchema
         */
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
