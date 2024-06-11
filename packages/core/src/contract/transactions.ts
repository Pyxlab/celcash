import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    addTransactionBodySchema,
    createOrUpdateTransactionResponseSchema,
    createTransactionBodySchema,
    listTransactionsParamsSchema,
    listTransactionsResponseSchema,
    retryOrReverseTransactionResponseSchema,
    updateTransactionBodySchema,
} from '../schemas/transactions.js'

const c = initContract()

export const transactions = c.router(
    {
        list: {
            method: 'GET',
            path: '/',
            query: listTransactionsParamsSchema,
            responses: {
                200: listTransactionsResponseSchema,
            },
        },
        add: {
            method: 'POST',
            path: '/:subscriptionId/:typeId/add',
            pathParams: z.object({
                subscriptionId: z.coerce.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createOrUpdateTransactionResponseSchema,
            },
            body: addTransactionBodySchema,
        },
        create: {
            method: 'POST',
            path: '/:subscriptionId/:typeId/add',
            pathParams: z.object({
                subscriptionId: z.coerce.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createOrUpdateTransactionResponseSchema,
            },
            body: createTransactionBodySchema,
        },
        update: {
            method: 'PUT',
            path: '/:subscriptionId/:typeId',
            pathParams: z.object({
                subscriptionId: z.coerce.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createOrUpdateTransactionResponseSchema,
            },
            body: updateTransactionBodySchema,
        },
        retry: {
            method: 'PUT',
            path: '/:transactionId/:typeId/retry',
            pathParams: z.object({
                transactionId: z.coerce.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: retryOrReverseTransactionResponseSchema,
            },
            body: z.object({}),
        },
        reverse: {
            method: 'PUT',
            path: '/:transactionId/:typeId/reverse',
            pathParams: z.object({
                transactionId: z.coerce.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: retryOrReverseTransactionResponseSchema,
            },
            body: z.object({
                valueToReverse: z.coerce.number().optional(),
            }),
        },
        capture: {
            method: 'PUT',
            path: '/:transactionId/:typeId/capture',
            pathParams: z.object({
                transactionId: z.coerce.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createOrUpdateTransactionResponseSchema,
            },
            body: z.object({}),
        },
        cancel: {
            method: 'DELETE',
            path: '/:transactionId/:typeId',
            pathParams: z.object({
                transactionId: z.coerce.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: z.object({
                    type: z.boolean(),
                }),
            },
            body: z.object({}),
        },
    },
    { pathPrefix: '/transactions' },
)
