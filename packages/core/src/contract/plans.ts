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
        updateByGalaxPayId: {
            method: 'PUT',
            path: '/:galaxPayId/galaxPayId',
            pathParams: z.object({
                galaxPayId: z.number().positive(),
            }),
            responses: {
                200: createPlanResponseSchema,
            },
            body: createPlanBodySchema,
        },
        updateByMyId: {
            method: 'PUT',
            path: '/:myId/myId',
            pathParams: z.object({
                myId: z.string().uuid(),
            }),
            responses: {
                200: createPlanResponseSchema,
            },
            body: createPlanBodySchema,
        },
        deleteByGalaxPayId: {
            method: 'DELETE',
            path: '/:galaxPayId/galaxPayId',
            pathParams: z.object({
                galaxPayId: z.number().positive(),
            }),
            responses: {
                200: z.object({
                    type: z.boolean(),
                }),
            },
            body: z.object({}),
        },
        deleteByMyId: {
            method: 'DELETE',
            path: '/:myId/myId',
            pathParams: z.object({
                myId: z.string().uuid(),
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
