import { z } from 'zod'

export const statusCardsSchema = z.enum(['active', 'inactive'])

export type StatusCards = z.infer<typeof statusCardsSchema>

export const listCardsParamsSchema = z.object({
    myIds: z.union([z.array(z.string()), z.string()]).optional(),
    galaxPayIds: z.union([z.array(z.string()), z.string()]).optional(),
    customerMyIds: z.union([z.array(z.string()), z.string()]).optional(),
    customerGalaxPayIds: z.union([z.array(z.string()), z.string()]).optional(),
    createdAtFrom: z.string().datetime().optional(),
    createdAtTo: z.string().datetime().optional(),
    status: statusCardsSchema,
    startAt: z.number().int(),
    limit: z.number().int(),
    order: z.enum(['createdAt.asc', 'createdAt.desc']).optional(),
})

export type ListCardsParams = z.infer<typeof listCardsParamsSchema>

// {
//      "myId": "pay-65ef7b12a61601.48429129",
//      "galaxPayId": 1,
//      "number": "4716********4539",
//      "customerGalaxPayId": 1,
//      "customerMyId": "ASDASD11",
//      "createdAt": "2020-06-02 10:10:00",
//      "updatedAt": "2020-06-02 10:10:00",
//      "Brand": {
//          "id": "mastercard",
//          "name": "MasterCard",
//          "maxInstallment": 12,
//          "operatorIds": "getnet,bin"
//      },
//      "expiresAt": "2024-03"
// }

export const brandSchema = z.object({
    id: z.string(),
    name: z.string(),
    maxInstallment: z.number().int(),
    operatorIds: z.string(),
})

export type Brand = z.infer<typeof brandSchema>

export const createCardBodySchema = z.object({
    myId: z.string().uuid(),
    number: z.string(),
    holder: z.string(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}$/),
    cvv: z.string().min(3).max(4),
})

export const cardSchema = createCardBodySchema.extend({
    galaxPayId: z.number().int(),
    customerMyId: z.string(),
    customerGalaxPayId: z.number().int(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    Brand: brandSchema,
})

export type CreateCardBody = z.infer<typeof createCardBodySchema>

export type Card = z.infer<typeof cardSchema>

export const createCardResponseSchema = z.object({
    type: z.boolean(),
    Card: cardSchema,
})

export type CreateCardResponse = z.infer<typeof createCardResponseSchema>

export const listCardsResponseSchema = z.object({
    totalQtdFoundInPage: z.number().int(),
    Cards: z.array(cardSchema),
})

export type ListCardsResponse = z.infer<typeof listCardsResponseSchema>
