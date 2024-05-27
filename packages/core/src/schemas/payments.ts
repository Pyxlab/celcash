import { z } from 'zod'
import { cardSchema } from './cards'

export const createAntifraudSchema = z.object({
    ip: z.string().ip(),
    sessionId: z.string(),
})

export type CreateAntifraud = z.infer<typeof createAntifraudSchema>

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

export const paymentMethodCreditCardSchema = z.object({
    Card: cardSchema
        .deepPartial()
        .refine(({ galaxPayId, myId, number, holder, expiresAt, cvv }) => {
            if (!galaxPayId) {
                return !!myId && !!number && !!holder && !!expiresAt && !!cvv
            }

            return true
        }, 'You must provide all fields if you are not providing the galaxPayId'),
    Antifraud: z
        .object({
            ip: z.string().ip(),
            sessionId: z.string(),
        })
        .optional(),
    cardOperatorId: cardOperatorIdSchema.optional(),
    preAuthorize: z.boolean().optional(),
})

export const agreementSchema = z.object({
    name: z.string().optional(),
    document: z.string().optional(),
})

export const paymentMethodBoletoSchema = z.object({
    fine: z.number().int().optional(),
    interest: z.number().int().optional(),
    instructions: z.string().optional(),
    deadlineDays: z.number().int().optional(),
    documentNumber: z.string().optional(),
    Aggrement: agreementSchema.optional(),
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

export const paymentMethodPixSchema = z.object({
    fine: z.number().int().optional(),
    interest: z.number().int().optional(),
    instructions: z.string().optional(),
    Deadline: deadlineSchema.optional(),
})

export const pixSchema = z.object({
    qrCode: z.string(),
    reference: z.string(),
    image: z.string(),
    page: z.string(),
})
