import { z } from 'zod'

export const createAntifraudSchema = z.object({
    ip: z.string().ip(),
    sessionId: z.string(),
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
    name: z.string().optional(),
    document: z.string().optional(),
})

export const boletoSchema = z.object({
    pdf: z.string(),
    bankLine: z.string(),
    bankNumber: z.number().int(),
    barCode: z.string(),
    bankEmissor: z.string(),
    bankAgency: z.string(),
    bankAccount: z.string(),
})

export const deadlineSchema = z.object({
    type: z.enum(['days']).optional(),
    value: z.number().int().optional(),
})

export const pixSchema = z.object({
    qrCode: z.string(),
    reference: z.string(),
    image: z.string(),
    page: z.string(),
})
