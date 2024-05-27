import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    createTransactionBodySchema,
    createTransactionResponseSchema,
    updateTransactionBodySchema,
} from '../schemas/transactions'

const c = initContract()

export const transactions = c.router(
    {
        createBySuscriptionMyId: {
            method: 'POST',
            path: '/:subscriptionId/myId/add',
            pathParams: z.object({
                subscriptionId: z.string().uuid(),
            }),
            responses: {
                201: createTransactionResponseSchema,
            },
            body: createTransactionBodySchema,
        },
        createBySuscriptionGalaxPayId: {
            method: 'POST',
            path: '/:subscriptionId/galaxPayId/add',
            pathParams: z.object({
                subscriptionId: z.number().positive(),
            }),
            responses: {
                201: createTransactionResponseSchema,
            },
            body: createTransactionBodySchema,
        },
        updateBySuscriptionMyId: {
            method: 'PUT',
            path: '/:subscriptionId/myId',
            pathParams: z.object({
                subscriptionId: z.string().uuid(),
            }),
            responses: {
                200: createTransactionResponseSchema,
            },
            body: updateTransactionBodySchema,
        },
        updateBySuscriptionGalaxPayId: {
            method: 'PUT',
            path: '/:subscriptionId/galaxPayId',
            pathParams: z.object({
                subscriptionId: z.number().positive(),
            }),
            responses: {
                200: createTransactionResponseSchema,
            },
            body: updateTransactionBodySchema,
        },
    },
    { pathPrefix: '/transactions' },
)
