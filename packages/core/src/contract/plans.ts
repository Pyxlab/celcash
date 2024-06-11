import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    createPlanBodySchema,
    createPlanResponseSchema,
    listPlansParamsSchema,
    listPlansResponseSchema,
    updatePlanBodySchema,
} from '../schemas/plans.js'

const c = initContract()

/**
 * Defines the plans router object.
 */
export const plans = c.router(
    {
        /**
         * Retrieves a list of plans.
         *
         * @method GET
         * @path /plans
         * @responses 200 - The list of plans.
         * @query - The query parameters for listing plans.
         */
        list: {
            method: 'GET',
            path: '/',
            responses: {
                200: listPlansResponseSchema,
            },
            query: listPlansParamsSchema,
        },
        /**
         * Creates a new plan.
         *
         * @method POST
         * @path /plans
         * @responses 200 - The created plan.
         * @body - The request body for creating a plan.
         */
        create: {
            method: 'POST',
            path: '/',
            responses: {
                200: createPlanResponseSchema,
            },
            body: createPlanBodySchema,
        },
        /**
         * Updates a plan.
         *
         * @method PUT
         * @path /plans/:planId/:typeId
         * @pathParams - The path parameters for updating a plan.
         * @responses 200 - The updated plan.
         * @body - The request body for updating a plan.
         */
        update: {
            method: 'PUT',
            path: '/:planId/:typeId',
            pathParams: z.object({
                planId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createPlanResponseSchema,
            },
            body: updatePlanBodySchema,
        },
        /**
         * Deletes a plan.
         *
         * @method DELETE
         * @path /plans/:planId/:typeId
         * @pathParams - The path parameters for deleting a plan.
         * @responses 200 - The deletion status.
         * @body - An empty object.
         */
        delete: {
            method: 'DELETE',
            path: '/:planId/:typeId',
            pathParams: z.object({
                planId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
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
    { pathPrefix: '/plans' },
)
