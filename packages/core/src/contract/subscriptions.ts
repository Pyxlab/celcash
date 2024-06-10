import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    cancelSubscriptionResponseSchema,
    createSubscriptionManualBodySchema,
    createSubscriptionResponseSchema,
    createSubscriptionWithPlanBodySchema,
    createSubscriptionWithotPlanBodySchema,
    emptySchema,
    listSubscriptionsParamsSchema,
    listSubscriptionsResponseSchema,
    updateSubscriptionInfoBodySchema,
    updateSubscriptionPaymentBodySchema,
} from '../schemas/subscriptions.js'

const c = initContract()

export const subscriptions = c.router(
    {
        list: {
            method: 'GET',
            path: '/',
            responses: {
                200: listSubscriptionsResponseSchema,
            },
            query: listSubscriptionsParamsSchema,
        },
        create: c.router({
            withPlan: {
                method: 'POST',
                path: '/',
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: createSubscriptionWithPlanBodySchema,
            },
            withoutPlan: {
                method: 'POST',
                path: '/',
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: createSubscriptionWithotPlanBodySchema,
            },
            manual: {
                method: 'POST',
                path: '/manual',
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: createSubscriptionManualBodySchema,
            },
        }),
        update: c.router({
            info: {
                method: 'PUT',
                path: '/:subscriptionId/:typeId',
                pathParams: z.object({
                    subscriptionId: z.string(),
                    typeId: z.enum(['galaxPayId', 'myId']),
                }),
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: updateSubscriptionInfoBodySchema,
            },
            payment: {
                method: 'PUT',
                path: '/:subscriptionId/:typeId',
                pathParams: z.object({
                    subscriptionId: z.string(),
                    typeId: z.enum(['galaxPayId', 'myId']),
                }),
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: updateSubscriptionPaymentBodySchema,
            },
        }),
        cancel: {
            method: 'DELETE',
            path: '/:subscriptionId/:typeId',
            pathParams: z.object({
                subscriptionId: z.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: cancelSubscriptionResponseSchema,
            },
            body: emptySchema,
        },
    },
    { pathPrefix: '/subscriptions' },
)
