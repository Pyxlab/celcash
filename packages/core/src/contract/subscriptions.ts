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
} from '../schemas/subscriptions'

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
        create: {
            method: 'POST',
            path: '/',
            responses: {
                200: createSubscriptionResponseSchema,
            },
            body: z.union([
                createSubscriptionWithotPlanBodySchema,
                createSubscriptionWithPlanBodySchema,
            ]),
        },
        manual: {
            method: 'POST',
            path: '/manual',
            responses: {
                201: createSubscriptionResponseSchema,
            },
            body: createSubscriptionManualBodySchema,
        },
        update: {
            method: 'PUT',
            path: '/:subscriptionId/:typeId',
            pathParams: z.object({
                subscriptionId: z.string(),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createSubscriptionResponseSchema,
            },
            body: z.union([
                updateSubscriptionInfoBodySchema,
                updateSubscriptionPaymentBodySchema,
            ]),
        },
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
