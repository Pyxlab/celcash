import { z } from 'zod'
import { transformArrayToString } from '../utils/transform.js'

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
    createdAtFrom: z.string().optional(),
    createdAtTo: z.string().optional(),
    status: z
        .union([z.array(cardStatusSchema), cardStatusSchema])
        .optional()
        .transform(transformArrayToString),
    startAt: z.coerce.number(),
    limit: z.coerce.number().min(0).max(100),
    order: z.enum(['createdAt.asc', 'createdAt.desc']).optional(),
})

export type ListCardsParams = z.input<typeof listCardsParamsSchema>

export const brandSchema = z.object({
    id: z.string(),
    name: z.string(),
    maxInstallment: z.coerce.number(),
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
    galaxPayId: z.coerce.number(),
    customerMyId: z.string(),
    customerGalaxPayId: z.coerce.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    Brand: brandSchema,
})

export const createCardResponseSchema = z.object({
    type: z.boolean(),
    Card: cardSchema,
})

export type CreateCardResponse = z.input<typeof createCardResponseSchema>

export const listCardsResponseSchema = z.object({
    totalQtdFoundInPage: z.coerce.number(),
    Cards: z.array(cardSchema),
})

export type ListCardsResponse = z.input<typeof listCardsResponseSchema>
