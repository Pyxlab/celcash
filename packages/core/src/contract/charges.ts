import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import { listCardsParamsSchema } from '../schemas'
import {
    chargesSchema,
    createChargeBodySchema,
    createChargeResponseSchema,
    listChargesResponseSchema,
    updateChargeBodySchema,
} from '../schemas/charges'

const c = initContract()

export const charges = c.router(
    {
        list: {
            method: 'GET',
            path: '/',
            pathParams: listCardsParamsSchema,
            responses: {
                200: listChargesResponseSchema,
            },
        },
        create: {
            method: 'POST',
            path: '/',
            responses: {
                201: createChargeResponseSchema,
            },
            body: createChargeBodySchema,
        },
        updateByGalaxPayId: {
            method: 'PUT',
            path: '/:galaxPayId/galaxPayId',
            pathParams: z.object({
                galaxPayId: z.number().positive(),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: updateChargeBodySchema,
        },
        updateByMyId: {
            method: 'PUT',
            path: '/:myId/myId',
            pathParams: z.object({
                myId: z.string().uuid(),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: updateChargeBodySchema,
        },
        retryByGalaxPayId: {
            method: 'PUT',
            path: '/:galaxPayId/galaxPayId/retry',
            pathParams: z.object({
                galaxPayId: z.number().positive(),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: z.object({}),
        },
        retryByMyId: {
            method: 'PUT',
            path: '/:myId/myId/retry',
            pathParams: z.object({
                myId: z.string().uuid(),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: z.object({}),
        },
        reverseByGalaxPayId: {
            method: 'PUT',
            path: '/:galaxPayId/galaxPayId/reverse',
            pathParams: z.object({
                galaxPayId: z.number().positive(),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: z.object({
                valueToReverse: z.number().int(),
            }),
        },
        reverseByMyId: {
            method: 'PUT',
            path: '/:myId/myId/reverse',
            pathParams: z.object({
                myId: z.string().uuid(),
            }),
            responses: {
                200: createChargeResponseSchema,
            },
            body: z.object({
                valueToReverse: z.number().int(),
            }),
        },
        captureByGalaxPayId: {
            method: 'PUT',
            path: '/:galaxPayId/galaxPayId/capture',
            pathParams: z.object({
                galaxPayId: z.number().positive(),
            }),
            responses: {
                200: chargesSchema,
            },
            body: z.object({}),
        },
        captureByMyId: {
            method: 'PUT',
            path: '/:myId/myId/capture',
            pathParams: z.object({
                myId: z.string().uuid(),
            }),
            responses: {
                200: chargesSchema,
            },
            body: z.object({}),
        },
        cancelByGalaxPayId: {
            method: 'DELETE',
            path: '/:galaxPayId/galaxPayId',
            pathParams: z.object({
                galaxPayId: z.number().positive(),
            }),
            responses: {
                200: chargesSchema,
            },
            body: z.object({}),
        },
        cancelByMyId: {
            method: 'DELETE',
            path: '/:myId/myId',
            pathParams: z.object({
                myId: z.string().uuid(),
            }),
            responses: {
                200: chargesSchema,
            },
            body: z.object({}),
        },
    },
    { pathPrefix: '/charges' },
)
