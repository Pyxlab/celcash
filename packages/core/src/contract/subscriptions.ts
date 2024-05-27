import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    cancelSubscriptionResponseSchema,
    createSubscriptionResponseSchema,
    createSubscriptionWithPlanBodySchema,
    createSubscriptionWithotPlanBodySchema,
    emptySchema,
    listSubscriptionsParamsSchema,
    listSubscriptionsResponseSchema,
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
        createWithPlan: {
            method: 'POST',
            path: '/',
            responses: {
                201: createSubscriptionResponseSchema,
            },
            body: createSubscriptionWithPlanBodySchema,
        },
        createWithoutPlan: {
            method: 'POST',
            path: '/',
            responses: {
                201: createSubscriptionResponseSchema,
            },
            body: createSubscriptionWithotPlanBodySchema,
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
