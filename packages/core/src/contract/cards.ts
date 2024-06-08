import { initContract } from '@ts-rest/core'
import { z, ZodError } from 'zod'
import {
    createCardBodySchema,
    createCardResponseSchema,
    listCardsParamsSchema,
    listCardsResponseSchema,
} from '../schemas/cards'

const c = initContract()

export const cards = c.router(
    {
        list: {
            method: 'GET',
            path: '/',
            query: listCardsParamsSchema,
            responses: {
                200: listCardsResponseSchema,
            },
        },
        create: {
            method: 'POST',
            path: '/:customerId/:typeId',
            pathParams: z.object({
                customerId: z.union([z.number().positive(), z.string().uuid()]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createCardResponseSchema,
            },
            body: createCardBodySchema,
        },
        delete: {
            method: 'DELETE',
            path: '/:cardId/:typeId',
            pathParams: z.object({
                cardId: z.union([z.number().positive(), z.string().uuid()]),
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
    {
        pathPrefix: '/cards',
        commonResponses: {
            507: c.type<ZodError>(),
        },
    },
)
