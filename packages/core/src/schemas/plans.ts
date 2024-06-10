import { z } from 'zod'
import { transformArrayToString } from '../utils/transform'
import { orderSchema, periodicitySchema } from './_/common'

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
    order: orderSchema.optional(),
})

export const planPricesSchema = z.object({
    payment: z.enum(['creditcard', 'boleto']),
    value: z.number().int(),
})

export type PlanPrices = z.infer<typeof planPricesSchema>

export type ListPlansParams = z.infer<typeof listPlansParamsSchema>

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

export type ListPlanResponse = z.infer<typeof listPlansResponseSchema>

export const createPlanResponseSchema = z.object({
    type: z.boolean(),
    Plan: planSchema,
})

export type CreatePlanBody = z.infer<typeof createPlanBodySchema>

export type CreatePlanResponse = z.infer<typeof createPlanResponseSchema>

export const updatePlanBodySchema = createPlanBodySchema.deepPartial()

export type UpdatePlanBody = z.infer<typeof updatePlanBodySchema>
