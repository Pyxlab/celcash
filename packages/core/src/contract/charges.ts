import { initContract } from '@ts-rest/core'
import { ZodError, z } from 'zod'
import { listCardsParamsSchema } from '../schemas/cards.js'
import {
    chargesSchema,
    createChargeBodySchema,
    createChargeResponseSchema,
    listChargesResponseSchema,
    updateChargeBodySchema,
} from '../schemas/charges.js'

const c = initContract()

/**
 * Router for handling charge-related operations.
 *
 * @example
 * ```ts
 * import { initClient } from '@ts-rest/core'
 * import { charges } from '@cel_cash/core/contract'
 *
 * const client = initClient(charges, {
 *  baseUrl: 'https://api.celcoin.com.br'
 * })
 *
 * const chargesList = await client.list({ ... })
 * const createdCharge = await client.create({ ... })
 * const updatedCharge = await client.update({ ... })
 * const retriedCharge = await client.retry({ ... })
 * const reversedCharge = await client.reverse({ ... })
 * const capturedCharge = await client.capture({ ... })
 * const canceledCharge = await client.cancel({ ... })
 * ```
 */
export const charges = c.router(
    {
        /**
         * Retrieves a list of charges.
         * @method GET
         * @path /charges
         * @query listCardsParamsSchema
         * @responses 200 - listChargesResponseSchema
         */
        list: {
            method: 'GET',
            path: '/',
            query: listCardsParamsSchema,
            responses: {
                200: listChargesResponseSchema,
            },
        },
        /**
         * Creates a new charge.
         * @method POST
         * @path /charges
         * @responses 200 - createChargeResponseSchema
         * @body createChargeBodySchema
         */
        create: {
            method: 'POST',
            path: '/',
            responses: {
                200: createChargeResponseSchema,
            },
            body: createChargeBodySchema,
        },
        /**
         * Updates a charge.
         * @method PUT
         * @path /charges/:chargeId/:typeId
         * @pathParams chargeId - The ID of the charge.
         * @pathParams typeId - The type ID of the charge.
         * @responses 200 - createChargeResponseSchema
         * @body updateChargeBodySchema
         */
        update: {
            method: 'PUT',
            path: '/:chargeId/:typeId',
            pathParams: z.object({
                chargeId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: updateChargeBodySchema,
        },
        /**
         * Retries a charge.
         * @method PUT
         * @path /charges/:chargeId/:typeId/retry
         * @pathParams chargeId - The ID of the charge.
         * @pathParams typeId - The type ID of the charge.
         * @responses 200 - createChargeResponseSchema
         */
        retry: {
            method: 'PUT',
            path: '/:chargeId/:typeId/retry',
            pathParams: z.object({
                chargeId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: c.noBody(),
        },
        /**
         * Reverses a charge.
         * @method PUT
         * @path /charges/:chargeId/:typeId/reverse
         * @pathParams chargeId - The ID of the charge.
         * @pathParams typeId - The type ID of the charge.
         * @responses 200 - createChargeResponseSchema
         * @body valueToReverse - The value to reverse (optional).
         */
        reverse: {
            method: 'PUT',
            path: '/:chargeId/:typeId/reverse',
            pathParams: z.object({
                chargeId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: z.object({
                valueToReverse: z.coerce.number().optional(),
            }),
        },
        /**
         * Captures a charge.
         * @method PUT
         * @path /charges/:chargeId/:typeId/capture
         * @pathParams chargeId - The ID of the charge.
         * @pathParams typeId - The type ID of the charge.
         * @responses 200 - chargesSchema
         */
        capture: {
            method: 'PUT',
            path: '/:chargeId/:typeId/capture',
            pathParams: z.object({
                chargeId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: chargesSchema,
            },
            body: c.noBody(),
        },
        /**
         * Cancels a charge.
         * @method DELETE
         * @path /charges/:chargeId/:typeId/
         * @pathParams chargeId - The ID of the charge.
         * @pathParams typeId - The type ID of the charge.
         * @responses 200 - chargesSchema
         */
        cancel: {
            method: 'DELETE',
            path: '/:chargeId/:typeId/',
            pathParams: z.object({
                chargeId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: chargesSchema,
            },
            body: c.noBody(),
        },
    },
    {
        pathPrefix: '/charges',
        commonResponses: {
            507: c.type<ZodError>(),
        },
    },
)
