import { z } from 'zod'
import { transformArrayToString } from '../utils/transform'
import { periodicitySchema } from './_/common'

export const planStatusSchema = z.enum(['active', 'inactive'])

export const listPlansParamsSchema = z.object({
    myIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .transform(transformArrayToString),
    galaxPayIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .transform(transformArrayToString),
    createdAtFrom: z.string().datetime().optional(),
    createdAtTo: z.string().datetime().optional(),
    createdAtOrUpdatedAtFrom: z.string().datetime().optional(),
    createdAtOrUpdatedAtTo: z.string().datetime().optional(),
    status: z.enum(['active', 'inactive']).optional(),
    startAt: z.number().int(),
    limit: z.number().int(),
    order: z
        .enum([
            'createdAt.asc',
            'createdAt.desc',
            'updatedAt.asc',
            'updatedAt.desc',
        ])
        .optional(),
})

export const planPricesSchema = z.object({
    payment: z.enum(['creditcard', 'boleto']),
    value: z.number().int(),
})

export type PlanPrices = z.input<typeof planPricesSchema>

export type ListPlansParams = z.input<typeof listPlansParamsSchema>

export const createPlanBodySchema = z.object({
    myId: z.string(),
    name: z.string(),
    periodicity: periodicitySchema,
    quantity: z.number().int(),
    additionalInfo: z.string().optional(),
    PlanPrices: z.array(planPricesSchema),
})

export const planSchema = createPlanBodySchema.extend({
    galaxPayId: z.number().int(),
})

export const listPlansResponseSchema = z.object({
    totalQtdFoundInPage: z.number().int(),
    Plans: z.array(planSchema),
})

export type ListPlanResponse = z.input<typeof listPlansResponseSchema>

export const createPlanResponseSchema = z.object({
    type: z.boolean(),
    Plan: planSchema,
})

export type CreatePlanBody = z.input<typeof createPlanBodySchema>

export type CreatePlanResponse = z.input<typeof createPlanResponseSchema>

export const updatePlanBodySchema = createPlanBodySchema.deepPartial()

export type UpdatePlanBody = z.input<typeof updatePlanBodySchema>
