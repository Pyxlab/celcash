import { initContract } from '@ts-rest/core'
import { z } from 'zod'
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
         * @body {}
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
            body: z.object({}),
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
         * @body {}
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
            body: z.object({}),
        },
        /**
         * Cancels a charge.
         * @method DELETE
         * @path /charges/:chargeId/:typeId/
         * @pathParams chargeId - The ID of the charge.
         * @pathParams typeId - The type ID of the charge.
         * @responses 200 - chargesSchema
         * @body {}
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
            body: z.object({}),
        },
    },
    { pathPrefix: '/charges' },
)
