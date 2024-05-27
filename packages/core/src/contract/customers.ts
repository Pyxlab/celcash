import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    createCustomerBodySchema,
    createCustomerResponseSchema,
    listCustomersParamsSchema,
    listCustomersResponseSchema,
} from '../schemas/customers'

const c = initContract()

export const customers = c.router(
    {
        list: {
            method: 'GET',
            path: '/',
            responses: {
                200: listCustomersResponseSchema,
            },
            query: listCustomersParamsSchema,
        },
        create: {
            method: 'POST',
            path: '/',
            responses: {
                201: createCustomerResponseSchema,
            },
            body: createCustomerBodySchema,
        },
        updateByGalaxPayId: {
            method: 'PUT',
            path: '/:galaxPayId',
            pathParams: z.object({
                galaxPayId: z.number().positive(),
            }),
            responses: {
                200: createCustomerResponseSchema,
            },
            body: createCustomerBodySchema,
        },
        updateByMyId: {
            method: 'PUT',
            path: '/:myId',
            pathParams: z.object({
                myId: z.string().uuid(),
            }),
            responses: {
                200: createCustomerResponseSchema,
            },
            body: createCustomerBodySchema,
        },
        deleteByGalaxPayId: {
            method: 'DELETE',
            path: '/:galaxPayId',
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
            path: '/:myId',
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
    { pathPrefix: '/customers' },
)
