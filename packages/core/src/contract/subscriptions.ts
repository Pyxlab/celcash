import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    cancelSubscriptionResponseSchema,
    createSubscriptionManualBodySchema,
    createSubscriptionResponseSchema,
    createSubscriptionWithPlanBodySchemaBase,
    createSubscriptionWithotPlanBodySchema,
    emptySchema,
    listSubscriptionsParamsSchema,
    listSubscriptionsResponseSchema,
    updateSubscriptionInfoBodySchema,
    updateSubscriptionPaymentBodySchema,
} from '../schemas/subscriptions.js'

const c = initContract()

/**
 * Router for managing subscriptions.
 */
export const subscriptions = c.router(
    {
        /**
         * Get a list of subscriptions.
         * @method GET
         * @path /subscriptions
         * @responses 200 - Success response with a list of subscriptions
         * @query - Query parameters for filtering the list of subscriptions
         */
        list: {
            method: 'GET',
            path: '/',
            responses: {
                200: listSubscriptionsResponseSchema,
            },
            query: listSubscriptionsParamsSchema,
        },
        create: c.router({
            /**
             * Create a subscription with a plan.
             * @method POST
             * @path /subscriptions
             * @responses 200 - Success response with the created subscription
             * @body - Request body for creating a subscription with a plan
             */
            withPlan: {
                method: 'POST',
                path: '/',
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: createSubscriptionWithPlanBodySchemaBase,
            },
            /**
             * Create a subscription without a plan.
             * @method POST
             * @path /subscriptions
             * @responses 200 - Success response with the created subscription
             * @body - Request body for creating a subscription without a plan
             */
            withoutPlan: {
                method: 'POST',
                path: '/',
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: createSubscriptionWithotPlanBodySchema,
            },
            /**
             * Create a manual subscription.
             * @method POST
             * @path /subscriptions/manual
             * @responses 200 - Success response with the created subscription
             * @body - Request body for creating a manual subscription
             */
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
                /**
                 * Update subscription information.
                 * @method PUT
                 * @path /subscriptions/:subscriptionId/:typeId
                 * @pathParams - Path parameters for identifying the subscription and type
                 * @responses 200 - Success response with the updated subscription
                 * @body - Request body for updating subscription information
                 */
                method: 'PUT',
                path: '/:subscriptionId/:typeId',
                pathParams: z.object({
                    subscriptionId: z.coerce.string(),
                    typeId: z.enum(['galaxPayId', 'myId']),
                }),
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: updateSubscriptionInfoBodySchema,
            },
            payment: {
                /**
                 * Update subscription payment.
                 * @method PUT
                 * @path /subscriptions/:subscriptionId/:typeId
                 * @pathParams - Path parameters for identifying the subscription and type
                 * @responses 200 - Success response with the updated subscription
                 * @body - Request body for updating subscription payment
                 */
                method: 'PUT',
                path: '/:subscriptionId/:typeId',
                pathParams: z.object({
                    subscriptionId: z.coerce.string(),
                    typeId: z.enum(['galaxPayId', 'myId']),
                }),
                responses: {
                    200: createSubscriptionResponseSchema,
                },
                body: updateSubscriptionPaymentBodySchema,
            },
        }),
        cancel: {
            /**
             * Cancel a subscription.
             * @method DELETE
             * @path /subscriptions/:subscriptionId/:typeId
             * @pathParams - Path parameters for identifying the subscription and type
             * @responses 200 - Success response with the canceled subscription
             * @body - Empty request body
             */
            method: 'DELETE',
            path: '/:subscriptionId/:typeId',
            pathParams: z.object({
                subscriptionId: z.coerce.string(),
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
