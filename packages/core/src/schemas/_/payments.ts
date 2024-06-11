import { z } from 'zod'

export const createAntifraudSchema = z.object({
    ip: z.coerce.string().ip(),
    sessionId: z.coerce.string(),
})

export type CreateAntifraud = z.input<typeof createAntifraudSchema>

export const antifraudSchema = createAntifraudSchema.extend({
    sent: z.boolean(),
    approved: z.boolean(),
})

export const cardOperatorIdSchema = z.enum([
    'bin',
    'cielo',
    'getnet',
    'getnetNew',
    'globalpayments',
    'pagseguro',
    'rede',
    'zoop',
    'galaxpay',
    'adyen',
    'stone',
])

export const agreementSchema = z.object({
    name: z.coerce.string().optional(),
    document: z.coerce.string().optional(),
})

export const boletoSchema = z.object({
    pdf: z.coerce.string(),
    bankLine: z.coerce.string(),
    bankNumber: z.coerce.number(),
    barCode: z.coerce.string(),
    bankEmissor: z.coerce.string(),
    bankAgency: z.coerce.string(),
    bankAccount: z.coerce.string(),
})

export const deadlineSchema = z.object({
    type: z.enum(['days']).optional(),
    value: z.coerce.number().optional(),
})

export const pixSchema = z.object({
    qrCode: z.coerce.string(),
    reference: z.coerce.string(),
    image: z.coerce.string(),
    page: z.coerce.string(),
})
