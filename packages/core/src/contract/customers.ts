import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    createCustomerBodySchema,
    createCustomerResponseSchema,
    listCustomersParamsSchema,
    listCustomersResponseSchema,
} from '../schemas/customers.js'

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
                200: createCustomerResponseSchema,
            },
            body: createCustomerBodySchema,
        },
        update: {
            method: 'PUT',
            path: '/:customerId/:typeId',
            pathParams: z.object({
                customerId: z.union([z.coerce.number().positive(), z.coerce.string()]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createCustomerResponseSchema,
            },
            body: createCustomerBodySchema,
        },
        delete: {
            method: 'DELETE',
            path: '/:customerId/:typeId',
            pathParams: z.object({
                customerId: z.union([z.coerce.number().positive(), z.coerce.string()]),
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
    { pathPrefix: '/customers' },
)
