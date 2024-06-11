import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    createCustomerBodySchema,
    createCustomerResponseSchema,
    listCustomersParamsSchema,
    listCustomersResponseSchema,
} from '../schemas/customers.js'

const c = initContract()

/**
 * Represents the customers router.
 */
export const customers = c.router(
    {
        /**
         * Retrieves a list of customers.
         * @method GET
         * @path /customers
         * @responses 200 - The list of customers.
         * @query - The parameters for filtering the list of customers.
         */
        list: {
            method: 'GET',
            path: '/',
            responses: {
                200: listCustomersResponseSchema,
            },
            query: listCustomersParamsSchema,
        },
        /**
         * Creates a new customer.
         * @method POST
         * @path /customers
         * @responses 200 - The created customer.
         * @body - The data for creating the customer.
         */
        create: {
            method: 'POST',
            path: '/',
            responses: {
                200: createCustomerResponseSchema,
            },
            body: createCustomerBodySchema,
        },
        /**
         * Updates a customer.
         * @method PUT
         * @path /customers/:customerId/:typeId
         * @pathParams - The parameters for identifying the customer and the type.
         * @responses 200 - The updated customer.
         * @body - The data for updating the customer.
         */
        update: {
            method: 'PUT',
            path: '/:customerId/:typeId',
            pathParams: z.object({
                customerId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createCustomerResponseSchema,
            },
            body: createCustomerBodySchema.deepPartial(),
        },
        /**
         * Deletes a customer.
         * @method DELETE
         * @path /customers/:customerId/:typeId
         * @pathParams - The parameters for identifying the customer and the type.
         * @responses 200 - The deletion status.
         * @body - An empty object.
         */
        delete: {
            method: 'DELETE',
            path: '/:customerId/:typeId',
            pathParams: z.object({
                customerId: z.union([
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
    { pathPrefix: '/customers' },
)
