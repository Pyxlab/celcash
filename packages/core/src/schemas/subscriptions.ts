import { z } from 'zod'
import { customerSchema } from './customers'
import {
    paymentMethodBoletoSchema,
    paymentMethodCreditCardSchema,
    paymentMethodPixSchema,
} from './payments'
import { periodicitySchema } from './plans'
import {
    createTransactionResponseSchema,
    invoiceConfigSchema,
} from './transactions'

export const subscriptionStatusSchema = z.enum([
    'active',
    'canceled',
    'stopped',
    'waitingPayment',
    'inactive',
])
export type SubscriptionStatus = z.infer<typeof subscriptionStatusSchema>

export const listSubscriptionsParamsSchema = z.object({
    myIds: z.union([z.array(z.string()), z.string()]).optional(),
    galaxPayIds: z.union([z.array(z.string()), z.string()]).optional(),
    customerMyIds: z.union([z.array(z.string()), z.string()]).optional(),
    customerGalaxPayIds: z.union([z.array(z.string()), z.string()]).optional(),
    planMyIds: z.union([z.array(z.string()), z.string()]).optional(),
    planGalaxPayIds: z.union([z.array(z.string()), z.string()]).optional(),
    createdAtFrom: z.string().datetime().optional(),
    createdAtTo: z.string().datetime().optional(),
    createdAtOrUpdatedAtFrom: z.string().datetime().optional(),
    createdAtOrUpdatedAtTo: z.string().datetime().optional(),
    status: subscriptionStatusSchema.optional(),
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

export const mainPaymentMethodIdSchema = z.enum(['creditcard', 'boleto', 'pix'])
export type MainPaymentMethodId = z.infer<typeof mainPaymentMethodIdSchema>

export const createSubscriptionWithPlanBodySchema = z.object({
    myId: z.string(),
    planMyId: z.string(),
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
    galaxPayId: z.number().int(),
    planGalaxPayId: z.number().int(),
    periodicity: periodicitySchema,
    paymentLink: z.string().optional(),
    value: z.number().int(),
    status: subscriptionStatusSchema,
    Transactions: z.array(createTransactionResponseSchema),
})

export type Subscription = z.infer<typeof subscriptionSchema>

export const listSubscriptionsResponseSchema = z.object({
    totalQtdFoundInPage: z.number().int(),
    Subscriptions: z.array(subscriptionSchema),
})

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
        firstPayDayDate: true,
    })

export type CreateSubscriptionManualBody = z.infer<
    typeof createSubscriptionManualBodySchema
>
