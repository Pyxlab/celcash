import { z } from 'zod'

export const contractSchema = z.object({
    name: z.string(),
    document: z.string(),
    ip: z.string(),
    acceptedAt: z.string().datetime(),
    pdf: z.string().url(),
})

export const splitSchema = z.object({
    galaxyPayId: z.number().int(),
    companyGalaxyPayId: z.number().int(),
    billGalaxyPayId: z.number().int(),
    type: z.enum(['percent', 'fixed']),
    paymentMethod: z.string(),
    value: z.number().int(),
    groupGalaxyPayId: z.number().int(),
})
