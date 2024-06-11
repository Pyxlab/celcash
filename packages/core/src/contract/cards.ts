import { initContract } from '@ts-rest/core'
import { ZodError, z } from 'zod'
import {
    createCardBodySchema,
    createCardResponseSchema,
    listCardsParamsSchema,
    listCardsResponseSchema,
} from '../schemas/cards.js'

const c = initContract()

/**
 * Router for handling card-related operations.
 */
export const cards = c.router(
    {
        /**
         * Retrieves a list of cards.
         * @method GET
         * @path /cards
         * @query listCardsParamsSchema
         * @responses 200 - listCardsResponseSchema
         */
        list: {
            method: 'GET',
            path: '/',
            query: listCardsParamsSchema,
            responses: {
                200: listCardsResponseSchema,
            },
        },
        /**
         * Creates a new card.
         * @method POST
         * @path /cards/:customerId/:typeId
         * @pathParams customerId - The ID of the customer.
         * @pathParams typeId - The type of the card (galaxPayId or myId).
         * @responses 200 - createCardResponseSchema
         * @body createCardBodySchema
         */
        create: {
            method: 'POST',
            path: '/:customerId/:typeId',
            pathParams: z.object({
                customerId: z.union([
                    z.coerce.number().positive(),
                    z.coerce.string(),
                ]),
                typeId: z.enum(['galaxPayId', 'myId']),
            }),
            responses: {
                200: createCardResponseSchema,
            },
            body: createCardBodySchema,
        },
        /**
         * Deletes a card.
         * @method DELETE
         * @path /cards/:cardId/:typeId
         * @pathParams cardId - The ID of the card.
         * @pathParams typeId - The type of the card (galaxPayId or myId).
         * @responses 200 - { type: boolean }
         * @body {}
         */
        delete: {
            method: 'DELETE',
            path: '/:cardId/:typeId',
            pathParams: z.object({
                cardId: z.union([
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
    {
        pathPrefix: '/cards',
        commonResponses: {
            507: c.type<ZodError>(),
        },
    },
)
