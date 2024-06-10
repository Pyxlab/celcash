import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    chargesSchema,
    createChargeBodySchema,
    createChargeResponseSchema,
    listChargesResponseSchema,
    updateChargeBodySchema,
} from '../schemas/charges.js'
import { listCardsParamsSchema } from '../schemas/cards.js'

const c = initContract()

export const charges = c.router(
    {
        list: {
            method: 'GET',
            path: '/',
            query: listCardsParamsSchema,
            responses: {
                200: listChargesResponseSchema,
            },
        },
        create: {
            method: 'POST',
            path: '/',
            responses: {
                200: createChargeResponseSchema,
            },
            body: createChargeBodySchema,
        },
        update: {
            method: 'PUT',
            path: '/:chargeId/:typeId',
            pathParams: z.object({
                chargeId: z.union([z.number().positive(), z.string().uuid()]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: updateChargeBodySchema,
        },
        retry: {
            method: 'PUT',
            path: '/:chargeId/:typeId/retry',
            pathParams: z.object({
                chargeId: z.union([z.number().positive(), z.string().uuid()]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: z.object({}),
        },
        reverse: {
            method: 'PUT',
            path: '/:chargeId/:typeId/reverse',
            pathParams: z.object({
                chargeId: z.union([z.number().positive(), z.string().uuid()]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: z.object({
                valueToReverse: z.number().int().optional(),
            }),
        },
        capture: {
            method: 'PUT',
            path: '/:chargeId/:typeId/capture',
            pathParams: z.object({
                chargeId: z.union([z.number().positive(), z.string().uuid()]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: chargesSchema,
            },
            body: z.object({}),
        },
        cancel: {
            method: 'DELETE',
            path: '/:chargeId/:typeId/',
            pathParams: z.object({
                chargeId: z.union([z.number().positive(), z.string().uuid()]),
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
