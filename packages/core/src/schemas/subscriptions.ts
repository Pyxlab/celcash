import { z } from 'zod'
import { transformArrayToString } from '../utils/transform'
import {
    mainPaymentMethodIdSchema,
    orderSchema,
    periodicitySchema,
} from './_/common'
import {
    antifraudSchema,
    boletoSchema,
    cardOperatorIdSchema,
    pixSchema,
} from './_/payments'
import { subscriptionStatusSchema } from './_/subscription'
import { cardSchema } from './cards'
import { extraFieldSchema, invoiceConfigSchema, invoiceSchema } from './common'
import { splitSchema } from './contract'
import { customerSchema } from './customers'
import {
    paymentMethodBoletoSchema,
    paymentMethodCreditCardSchema,
    paymentMethodPixSchema,
} from './payments'
import {
    abecsReasonDeniedSchema,
    conciliationOccurrenceSchema,
    transactionStatusSchema,
} from './transactions'

const transactionsSchema = z.object({
    myId: z.string().uuid(),
    galaxPayId: z.number().int(),
    chargeMyId: z.string().uuid(),
    chargeGalaxPayId: z.number().int(),
    subscriptionMyId: z.string().uuid(),
    subscriptionGalaxPayId: z.number().int(),
    value: z.number().int(),
    payday: z.string().datetime(),
    payedOutsideGalaxPay: z.boolean(),
    additionalInfo: z.string().optional(),
    installment: z.number().int(),
    paydayDate: z.string().datetime(),
    reasonDenied: z.string().optional(),
    authorizationCode: z.string().optional(),
    tid: z.string().optional(),
    statusDate: z.string().datetime(),
    cardOperatorId: cardOperatorIdSchema,
    AbecsReasonDenied: abecsReasonDeniedSchema,
    datetimeLastSentToOperator: z.string().datetime(),
    status: transactionStatusSchema,
    fee: z.number().int(),
    statusDescription: z.string(),
    Antifraud: antifraudSchema,
    ConciliationOccurrences: z.array(conciliationOccurrenceSchema),
    Invoice: invoiceSchema,
    Boleto: boletoSchema,
    Pix: pixSchema,
    CreditCard: z.object({
        Card: cardSchema,
    }),
})

export const listSubscriptionsParamsSchema = z.object({
    myIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .transform(transformArrayToString),
    galaxPayIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .transform(transformArrayToString),
    customerMyIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .transform(transformArrayToString),
    customerGalaxPayIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .transform(transformArrayToString),
    planMyIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .transform(transformArrayToString),
    planGalaxPayIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .transform(transformArrayToString),
    createdAtFrom: z.string().datetime().optional(),
    createdAtTo: z.string().datetime().optional(),
    createdAtOrUpdatedAtFrom: z.string().datetime().optional(),
    createdAtOrUpdatedAtTo: z.string().datetime().optional(),
    status: subscriptionStatusSchema.optional(),
    startAt: z.number().int(),
    limit: z.number().int(),
    order: orderSchema.optional(),
})

export type ListSubscriptionsParams = z.infer<
    typeof listSubscriptionsParamsSchema
>

export const createSubscriptionWithPlanBodySchema = z.object({
    myId: z.string(),
    planMyId: z.string(),
    planGalaxPayId: z.number().int(),
    firstPayDayDate: z.string().datetime(),
    additionalInfo: z.string().optional(),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    Customer: customerSchema
        .deepPartial()
        .refine(({ myId, galaPayId, document, name, emails }) => {
            if (galaPayId) return true
            if (!!myId && !document && !name && !emails) return true
            if (!!document && !myId && !name && !emails) return true
            if (!!myId && !!document && !!name && !!emails) return true
            return false
        }),
    PaymentMethodCreditCard: paymentMethodCreditCardSchema.optional(),
    PaymentMethodBoleto: paymentMethodBoletoSchema.optional(),
    PaymentMethodPix: paymentMethodPixSchema.optional(),
    InvoiceConfig: invoiceConfigSchema.optional(),
})

export type CreateSubscriptionWithPlanBody = z.infer<
    typeof createSubscriptionWithPlanBodySchema
>

export const subscriptionSchema = createSubscriptionWithPlanBodySchema.extend({
    quantity: z.number().int(),
    galaxPayId: z.number().int(),
    planGalaxPayId: z.number().int(),
    periodicity: periodicitySchema,
    paymentLink: z.string().optional(),
    value: z.number().int(),
    status: subscriptionStatusSchema,
    Transactions: z.array(transactionsSchema),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
})

export const listSubscriptionsResponseSchema = z.object({
    totalQtdFoundInPage: z.number().int(),
    Subscriptions: z.array(subscriptionSchema),
})

export type ListSubscriptionsResponse = z.infer<
    typeof listSubscriptionsResponseSchema
>

export const createSubscriptionResponseSchema = z.object({
    type: z.boolean(),
    Subscription: subscriptionSchema,
})

export type CreateSubscriptionWithPlanResponse = z.infer<
    typeof createSubscriptionResponseSchema
>

export const cancelSubscriptionResponseSchema = z.object({
    type: z.boolean(),
})

export type CancelSubscriptionResponse = z.infer<
    typeof cancelSubscriptionResponseSchema
>

export const emptySchema = z.object({})

export type Empty = z.infer<typeof emptySchema>

export const createSubscriptionWithotPlanBodySchema =
    createSubscriptionWithPlanBodySchema
        .omit({
            planMyId: true,
            planGalaxPayId: true,
        })
        .extend({
            value: z.number().int(),
            quantity: z.number().int(),
            periodicity: periodicitySchema,
        })

export type CreateSubscriptionWithoutPlanBody = z.infer<
    typeof createSubscriptionWithotPlanBodySchema
>

export const createSubscriptionManualBodySchema =
    createSubscriptionWithPlanBodySchema.omit({
        planMyId: true,
        planGalaxPayId: true,
        firstPayDayDate: true,
    })

export type CreateSubscriptionManualBody = z.infer<
    typeof createSubscriptionManualBodySchema
>

export const updateSubscriptionInfoBodySchema = z.object({
    myId: z.string().optional(),
    additionalInfo: z.string().optional(),
    planMyId: z.string().optional(),
    planGalaxPayId: z.number().int().optional(),
    InvoiceConfig: invoiceConfigSchema.optional(),
    ExtraFields: z.array(extraFieldSchema).optional(),
    Split: splitSchema.optional(),
})

export type UpdateSubscriptionInfoBody = z.infer<
    typeof updateSubscriptionInfoBodySchema
>

export const updateSubscriptionPaymentBodySchema = z.object({
    value: z.number().int(),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    PaymentMethodCreditCard: paymentMethodCreditCardSchema.optional(),
    PaymentMethodBoleto: paymentMethodBoletoSchema.optional(),
    PaymentMethodPix: paymentMethodPixSchema.optional(),
    Split: splitSchema.optional(),
})

export type UpdateSubscriptionPaymentBody = z.infer<
    typeof updateSubscriptionPaymentBodySchema
>
