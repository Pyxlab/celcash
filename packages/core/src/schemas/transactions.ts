import { z } from 'zod'
import { cardSchema } from './cards'
import {
    antifraudSchema,
    boletoSchema,
    cardOperatorIdSchema,
    paymentMethodCreditCardSchema,
} from './payments'

export const invoiceConfigTypeSchema = z.enum(['onePerTransaction', 'onlyOne'])
export type InvoiceConfigType = z.infer<typeof invoiceConfigTypeSchema>

export const invoiceStatusSchema = z.enum([
    'pending',
    'emitted',
    'rejected',
    'error',
    'cancel',
    'cancelOutSystem',
])
export type InvoiceStatus = z.infer<typeof invoiceStatusSchema>

export const invoiceSchema = z.object({
    description: z.string(),
    number: z.string(),
    status: invoiceStatusSchema,
    statusDescription: z.string(),
    pdf: z.string(),
    statusDate: z.string().datetime(),
    xml: z.string(),
})

export type Invoice = z.infer<typeof invoiceSchema>

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

export type InvoiceConfig = z.infer<typeof invoiceConfigSchema>

export const conciliationOccurrenceStatusSchema = z.enum([
    'payment',
    'canceled',
])
export type ConciliationOccurrenceStatus = z.infer<
    typeof conciliationOccurrenceStatusSchema
>

export const conciliationOccurrenceSchema = z.object({
    type: conciliationOccurrenceStatusSchema,
    liquidValue: z.number().int(),
    depositDate: z.string().datetime(),
    taxValue: z.number().int(),
    taxPercent: z.number().int(),
    bankName: z.string(),
    bankNumber: z.number().int(),
    agency: z.string(),
    account: z.string(),
})

export type ConciliationOccurrence = z.infer<
    typeof conciliationOccurrenceSchema
>

export const abecsReasonDeniedSchema = z.object({
    code: z.string().length(4),
    message: z.string(),
})
export type AbecsReasonDenied = z.infer<typeof abecsReasonDeniedSchema>

export const createTransactionBodySchema = z.object({
    myId: z.string().uuid(),
    value: z.number().int(),
    payday: z.string().datetime(),
    payedOutsideGalaxPay: z.boolean(),
    additionalInfo: z.string().optional(),
    PaymentMethodCreditCard: paymentMethodCreditCardSchema,
    InvoiceConfig: invoiceConfigSchema.optional(),
})

export const transactionStatusSchema = z.enum([
    'noSend',
    'authorized',
    'captured',
    'denied',
    'reversed',
    'chargeback',
    'pendingBoleto',
    'payedBoleto',
    'notCompensated',
    'lessValueBoleto',
    'moreValueBoleto',
    'paidDuplicityBoleto',
    'pendingPix',
    'payedPix',
    'unavailablePix',
    'cancel',
    'payExternal',
    'cancelByContract',
    'free',
])

export const createTransactionResponseSchema =
    createTransactionBodySchema.extend({
        galaxPayId: z.number().int(),
        subscriptionMyId: z.string().uuid().optional(),
        subscriptionGalaxPayId: z.number().int().optional(),
        statusDate: z.string().datetime(),
        status: transactionStatusSchema,
        datetimeLastSentToOperator: z.string().datetime(),
        fee: z.number().int(),
        Invoice: invoiceSchema,
        ConciliationOccurrences: z.array(conciliationOccurrenceSchema),
        statusDescription: z.string(),
        tid: z.string(),
        authorizationCode: z.string(),
        reasonDenied: z.string().optional(),
        Boleto: boletoSchema,
        AbecsReasonDenied: abecsReasonDeniedSchema,
        cardOperatorId: cardOperatorIdSchema,
        Antifraud: antifraudSchema,
        CreditCard: z.object({
            Card: cardSchema,
        }),
    })

export type CreateTransactionResponse = z.infer<
    typeof createTransactionResponseSchema
>

export const updateTransactionBodySchema = createTransactionBodySchema
    .pick({
        myId: true,
        value: true,
        payday: true,
        payedOutsideGalaxPay: true,
        additionalInfo: true,
    })
    .deepPartial()
    .required({ myId: true })

export type UpdateTransactionBody = z.infer<typeof updateTransactionBodySchema>
