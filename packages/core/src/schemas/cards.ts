import { z } from 'zod'
import { transformArrayToString } from '../utils/transform'

export const cardStatusSchema = z.enum(['active', 'inactive'])

export const listCardsParamsSchema = z.object({
    myIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    galaxPayIds: z
        .union([z.array(z.coerce.number()), z.coerce.number()])
        .optional()
        .transform(transformArrayToString),
    customerMyIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    customerGalaxPayIds: z
        .union([z.array(z.coerce.number()), z.coerce.number()])
        .optional()
        .transform(transformArrayToString),
    createdAtFrom: z.string().datetime().optional(),
    createdAtTo: z.string().datetime().optional(),
    status: z
        .union([z.array(cardStatusSchema), cardStatusSchema])
        .optional()
        .transform(transformArrayToString),
    startAt: z.number().int(),
    limit: z.coerce.number().min(0).max(100),
    order: z.enum(['createdAt.asc', 'createdAt.desc']).optional(),
})

export type ListCardsParams = z.input<typeof listCardsParamsSchema>

export const brandSchema = z.object({
    id: z.string(),
    name: z.string(),
    maxInstallment: z.number().int(),
    operatorIds: z.string(),
})

export const createCardBodySchema = z.object({
    myId: z.string().uuid(),
    number: z.string(),
    holder: z.string(),
    expiresAt: z.string().regex(/^\d{4}-\d{2}$/),
    cvv: z.string().min(3).max(4),
})

export type CreateCardBody = z.input<typeof createCardBodySchema>

export const cardSchema = createCardBodySchema.extend({
    galaxPayId: z.number().int(),
    customerMyId: z.string(),
    customerGalaxPayId: z.number().int(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    Brand: brandSchema,
})

export const createCardResponseSchema = z.object({
    type: z.boolean(),
    Card: cardSchema,
})

export type CreateCardResponse = z.input<typeof createCardResponseSchema>

export const listCardsResponseSchema = z.object({
    totalQtdFoundInPage: z.number().int(),
    Cards: z.array(cardSchema),
})

export type ListCardsResponse = z.input<typeof listCardsResponseSchema>
