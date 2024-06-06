import { z } from 'zod'

export const planStatusSchema = z.enum(['active', 'inactive'])

export const listPlansParamsSchema = z.object({
    myIds: z.union([z.array(z.string()), z.string()]).optional(),
    galaxPayIds: z.union([z.array(z.string()), z.string()]).optional(),
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

export type PlanPrices = z.infer<typeof planPricesSchema>

export type ListPlansParams = z.infer<typeof listPlansParamsSchema>

export const periodicitySchema = z.enum([
    'weekly',
    'biweekly',
    'monthly',
    'bimonthly',
    'quarterly',
    'biannual',
    'yearly',
])

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
