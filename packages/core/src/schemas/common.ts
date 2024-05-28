import { z } from 'zod'

export const headers = z.object({
    Authorization: z.string().regex(/^Basic .+$/),
})

export const scopeSchema = z.enum([
    'customers.read',
    'customers.write',
    'plans.read',
    'plans.write',
    'cards.read',
    'cards.write',
    'subscriptions.read',
    'subscriptions.write',
    'charges.read',
    'charges.write',
    'transactions.read',
    'transactions.write',
    'card-brands.read',
    'carnes.read',
    'boletos.read',
    'payment-methods.read',
    'webhooks.read',
    'pos.write',
    'releases.read',
])

export const authorizationBodySchema = z.object({
    grant_type: z.enum(['authorization_code', 'refresh_token']),
    scope: z.union([z.array(scopeSchema), z.string()]),
})

export type AuthorizationBody = z.infer<typeof authorizationBodySchema>

export const authorizationResponseSchema = z.object({
    access_token: z.string(),
    token_type: z.enum(['Bearer']),
    expires_in: z.number(),
    scope: z.string(),
})

export type AuthorizationResponse = z.infer<typeof authorizationResponseSchema>

export const pixPaymentBodySchema = z.object({
    key: z.string(),
    type: z.enum(['cpf', 'cnpj', 'email', 'mobilePhone', 'random']),
    value: z.number(),
    desc: z.string().optional(),
})

export type PixPaymentBody = z.infer<typeof pixPaymentBodySchema>

export const paymentSchema = z.object({
    galaxPayId: z.number().int(),
    key: z.string(),
    value: z.number(),
    taxValue: z.number(),
    desc: z.string().optional(),
    endToEnd: z.string(),
    status: z.enum(['efectivated', 'error', 'confirm']),
    createdAt: z.string().datetime(),
})

export const pixPaymentResponseSchema = z.object({
    type: z.boolean(),
    Payment: paymentSchema,
})

export type PixPaymentResponse = z.infer<typeof pixPaymentResponseSchema>

export const transferInternalBodySchema = z.object({
    companyAccount: z.number().int(),
    companyDocument: z.string(),
    value: z.number(),
})

export type TransferInternalBody = z.infer<typeof transferInternalBodySchema>

export const transferInternalResponseSchema = z.object({
    type: z.boolean(),
})

export type TransferInternalResponse = z.infer<
    typeof transferInternalResponseSchema
>

export const addressSchema = z.object({
    zipCode: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string().optional(),
    neighborhood: z.string(),
    city: z.string(),
    state: z.string(),
})

export const extraFieldSchema = z.object({
    tagName: z.string(),
    value: z.string(),
})

export const invoiceConfigTypeSchema = z.enum(['onePerTransaction', 'onlyOne'])

export const invoiceStatusSchema = z.enum([
    'pending',
    'emitted',
    'rejected',
    'error',
    'cancel',
    'cancelOutSystem',
])

export const invoiceSchema = z.object({
    description: z.string(),
    number: z.string(),
    status: invoiceStatusSchema,
    statusDescription: z.string(),
    pdf: z.string(),
    statusDate: z.string().datetime(),
    xml: z.string(),
})

export const invoiceConfigSchema = z
    .object({
        description: z.string(),
        type: invoiceConfigTypeSchema,
        createOn: z.enum([
            'daysBeforePayDay',
            'payment',
            'notificationSend',
            'daysAfterPayment',
        ]),
        qtdDaysBeforePayDay: z.number().int().optional(),
        galaxPaySubAccountId: z.number().int().optional(),
        qtdDaysAfterPay: z.number().int().optional(),
    })
    .refine(({ createOn, qtdDaysAfterPay, qtdDaysBeforePayDay }) => {
        if (createOn === 'daysBeforePayDay') return !!qtdDaysBeforePayDay
        if (createOn === 'daysAfterPayment') return !!qtdDaysAfterPay
        return true
    })
