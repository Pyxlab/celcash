import { z } from 'zod'

export const contractSchema = z.object({
    name: z.string(),
    document: z.string(),
    ip: z.string(),
    acceptedAt: z.string(),
    pdf: z.string().url(),
})

export const splitSchema = z.object({
    galaxyPayId: z.coerce.number(),
    companyGalaxyPayId: z.coerce.number(),
    billGalaxyPayId: z.coerce.number(),
    type: z.enum(['percent', 'fixed']),
    paymentMethod: z.string(),
    value: z.coerce.number(),
    groupGalaxyPayId: z.coerce.number(),
})
