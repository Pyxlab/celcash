import { initContract } from '@ts-rest/core'
import { z } from 'zod'
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
            path: '/',
            responses: {
                201: createCardResponseSchema,
            },
            body: createCardBodySchema,
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
    },
    { pathPrefix: '/cards' },
)
