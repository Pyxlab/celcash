import { z } from 'zod'
import { transformArrayToString } from '../utils/transform.js'
import { mainPaymentMethodIdSchema, periodicitySchema } from './_/common.js'
import {
    antifraudSchema,
    boletoSchema,
    cardOperatorIdSchema,
    pixSchema,
} from './_/payments.js'
import { subscriptionStatusSchema } from './_/subscription.js'
import { cardSchema } from './cards.js'
import {
    extraFieldSchema,
    invoiceConfigSchema,
    invoiceSchema,
} from './common.js'
import { splitSchema } from './contract.js'
import { partialCustomerSchema } from './customers.js'
import {
    paymentMethodBoletoSchema,
    paymentMethodCreditCardSchema,
    paymentMethodPixSchema,
} from './payments.js'
import {
    abecsReasonDeniedSchema,
    conciliationOccurrenceSchema,
    transactionStatusSchema,
} from './transactions.js'

const transactionsSchema = z.object({
    myId: z.string().uuid(),
    galaxPayId: z.coerce.number(),
    chargeMyId: z.string().uuid(),
    chargeGalaxPayId: z.coerce.number(),
    subscriptionMyId: z.string().uuid(),
    subscriptionGalaxPayId: z.coerce.number(),
    value: z.coerce.number(),
    payday: z.string(),
    payedOutsideGalaxPay: z.boolean(),
    additionalInfo: z.string().optional(),
    installment: z.coerce.number(),
    paydayDate: z.string(),
    reasonDenied: z.string().optional(),
    authorizationCode: z.string().optional(),
    tid: z.string().optional(),
    statusDate: z.string(),
    cardOperatorId: cardOperatorIdSchema,
    AbecsReasonDenied: abecsReasonDeniedSchema,
    datetimeLastSentToOperator: z.string(),
    status: transactionStatusSchema,
    fee: z.coerce.number(),
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

const listSubscriptionsOrderEnum = z.enum([
    'createdAt.asc',
    'createdAt.desc',
    'updatedAt.asc',
    'updatedAt.desc',
])
export const listSubscriptionsParamsSchema = z.object({
    myIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    galaxPayIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    customerMyIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    customerGalaxPayIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    planMyIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    planGalaxPayIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    createdAtFrom: z.string().optional(),
    createdAtTo: z.string().optional(),
    createdAtOrUpdatedAtFrom: z.string().optional(),
    createdAtOrUpdatedAtTo: z.string().optional(),
    status: subscriptionStatusSchema.optional(),
    startAt: z.coerce.number(),
    limit: z.coerce.number().min(0).max(100),
    order: z
        .union([
            listSubscriptionsOrderEnum,
            z.array(listSubscriptionsOrderEnum),
        ])
        .optional()
        .transform(transformArrayToString),
})

export type ListSubscriptionsParams = z.input<
    typeof listSubscriptionsParamsSchema
>

export const createSubscriptionWithPlanBodySchemaBase = z.object({
    myId: z.string(),
    planMyId: z.string().optional(),
    planGalaxPayId: z.coerce.number().optional(),
    firstPayDayDate: z.string(),
    additionalInfo: z.string().optional(),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    Customer: partialCustomerSchema,
    PaymentMethodCreditCard: paymentMethodCreditCardSchema.optional(),
    PaymentMethodBoleto: paymentMethodBoletoSchema.optional(),
    PaymentMethodPix: paymentMethodPixSchema.optional(),
    InvoiceConfig: invoiceConfigSchema.optional(),
})

export const createSubscriptionWithPlanBodySchema =
    createSubscriptionWithPlanBodySchemaBase.refine(
        ({ planMyId, planGalaxPayId }) => {
            if (!planMyId && planGalaxPayId) return true
            if (planMyId && !planGalaxPayId) return true
            return false
        },
        'planMyId and planGalaxPayId must be informed together',
    )

export type CreateSubscriptionWithPlanBody = z.input<
    typeof createSubscriptionWithPlanBodySchemaBase
>

export const subscriptionSchema =
    createSubscriptionWithPlanBodySchemaBase.extend({
        quantity: z.coerce.number(),
        galaxPayId: z.coerce.number(),
        planGalaxPayId: z.coerce.number(),
        periodicity: periodicitySchema,
        paymentLink: z.string().optional(),
        value: z.coerce.number(),
        status: subscriptionStatusSchema,
        Transactions: z.array(transactionsSchema),
        createdAt: z.string(),
        updatedAt: z.string(),
    })

export const listSubscriptionsResponseSchema = z.object({
    totalQtdFoundInPage: z.coerce.number(),
    Subscriptions: z.array(subscriptionSchema),
})

export type ListSubscriptionsResponse = z.input<
    typeof listSubscriptionsResponseSchema
>

export const createSubscriptionResponseSchema = z.object({
    type: z.boolean(),
    Subscription: subscriptionSchema,
})

export type CreateSubscriptionWithPlanResponse = z.input<
    typeof createSubscriptionResponseSchema
>

export const cancelSubscriptionResponseSchema = z.object({
    type: z.boolean(),
})

export type CancelSubscriptionResponse = z.input<
    typeof cancelSubscriptionResponseSchema
>

export const emptySchema = z.object({})

export type Empty = z.input<typeof emptySchema>

export const createSubscriptionWithotPlanBodySchema =
    createSubscriptionWithPlanBodySchemaBase
        .omit({
            planMyId: true,
            planGalaxPayId: true,
        })
        .extend({
            value: z.coerce.number(),
            quantity: z.coerce.number(),
            periodicity: periodicitySchema,
        })

export type CreateSubscriptionWithoutPlanBody = z.input<
    typeof createSubscriptionWithotPlanBodySchema
>

export const createSubscriptionManualBodySchema =
    createSubscriptionWithPlanBodySchemaBase.omit({
        planMyId: true,
        planGalaxPayId: true,
        firstPayDayDate: true,
    })

export type CreateSubscriptionManualBody = z.input<
    typeof createSubscriptionManualBodySchema
>

export const updateSubscriptionInfoBodySchema = z.object({
    myId: z.string().optional(),
    additionalInfo: z.string().optional(),
    planMyId: z.string().optional(),
    planGalaxPayId: z.coerce.number().optional(),
    InvoiceConfig: invoiceConfigSchema.optional(),
    ExtraFields: z.array(extraFieldSchema).optional(),
    Split: splitSchema.optional(),
})

export type UpdateSubscriptionInfoBody = z.input<
    typeof updateSubscriptionInfoBodySchema
>

export const updateSubscriptionPaymentBodySchema = z.object({
    value: z.coerce.number(),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    PaymentMethodCreditCard: paymentMethodCreditCardSchema.optional(),
    PaymentMethodBoleto: paymentMethodBoletoSchema.optional(),
    PaymentMethodPix: paymentMethodPixSchema.optional(),
    Split: splitSchema.optional(),
})

export type UpdateSubscriptionPaymentBody = z.input<
    typeof updateSubscriptionPaymentBodySchema
>
