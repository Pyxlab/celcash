import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    createPlanBodySchema,
    createPlanResponseSchema,
    listPlansParamsSchema,
    listPlansResponseSchema,
} from '../schemas/plans'

const c = initContract()

export const plans = c.router(
    {
        list: {
            method: 'GET',
            path: '/',
            responses: {
                200: listPlansResponseSchema,
            },
            query: listPlansParamsSchema,
        },
        create: {
            method: 'POST',
            path: '/',
            responses: {
                200: createPlanResponseSchema,
            },
            body: createPlanBodySchema,
        },
        update: {
            method: 'PUT',
            path: '/:planId/:typeId',
            pathParams: z.object({
                planId: z.union([z.number().positive(), z.string().uuid()]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createPlanResponseSchema,
            },
            body: createPlanBodySchema,
        },
        delete: {
            method: 'DELETE',
            path: '/:planId/:typeId',
            pathParams: z.object({
                planId: z.union([z.number().positive(), z.string().uuid()]),
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
