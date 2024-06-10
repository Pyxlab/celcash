import { AppRouter, InitClientReturn } from '@ts-rest/core'
import { z } from 'zod'
import {
    mainPaymentMethodIdSchema,
    periodicitySchema,
} from './schemas/_/common.js'
import {
    agreementSchema,
    antifraudSchema,
    boletoSchema,
    cardOperatorIdSchema,
    deadlineSchema,
    pixSchema,
} from './schemas/_/payments.js'
import { subscriptionStatusSchema } from './schemas/_/subscription.js'
import {
    antecipationSchema,
    operationSummarySchema,
    releasesSchema,
} from './schemas/antecipation.js'
import {
    brandSchema,
    cardSchema,
    cardStatusSchema,
    listCardsParamsSchema,
} from './schemas/cards.js'
import { chargesSchema } from './schemas/charges.js'
import {
    addressSchema,
    extraFieldSchema,
    invoiceConfigSchema,
    invoiceConfigTypeSchema,
    invoiceSchema,
    invoiceStatusSchema,
    paymentSchema,
    scopeSchema,
} from './schemas/common.js'
import { contractSchema, splitSchema } from './schemas/contract.js'
import { customerSchema, statusCustomerSchema } from './schemas/customers.js'
import {
    paymentMethodBoletoSchema,
    paymentMethodCreditCardSchema,
    paymentMethodPixSchema,
} from './schemas/payments.js'
import { planPricesSchema, planSchema, planStatusSchema } from './schemas/plans.js'
import { subscriptionSchema } from './schemas/subscriptions.js'
import {
    abecsReasonDeniedSchema,
    conciliationOccurrenceSchema,
    conciliationOccurrenceStatusSchema,
    transactionStatusSchema,
    transactionsSchema,
} from './schemas/transactions.js'
import { celCashRestFetchApi } from './utils/api.js'

export type Antecipation = z.infer<typeof antecipationSchema>
export type Releases = z.infer<typeof releasesSchema>
export type OperationSummary = z.infer<typeof operationSummarySchema>

export type CardStatus = z.infer<typeof cardStatusSchema>
export type Brand = z.infer<typeof brandSchema>
export type ListCardsParams = z.infer<typeof listCardsParamsSchema>
export type Card = z.infer<typeof cardSchema>

export type Scope = z.infer<typeof scopeSchema>
export type Payment = z.infer<typeof paymentSchema>
export type Address = z.infer<typeof addressSchema>

export type StatusCustomer = z.infer<typeof statusCustomerSchema>
export type Customer = z.infer<typeof customerSchema>

export type CardOperatorId = z.infer<typeof cardOperatorIdSchema>
export type Agreement = z.infer<typeof agreementSchema>
export type Boleto = z.infer<typeof boletoSchema>
export type PaymentMethodPix = z.infer<typeof paymentMethodPixSchema>
export type Pix = z.infer<typeof pixSchema>
export type PaymentMethodBoleto = z.infer<typeof paymentMethodBoletoSchema>
export type Deadline = z.infer<typeof deadlineSchema>
export type Antifraud = z.infer<typeof antifraudSchema>
export type PaymentMethodCreditCard = z.infer<
    typeof paymentMethodCreditCardSchema
>

export type PlanStatus = z.infer<typeof planStatusSchema>
export type PlanPrices = z.infer<typeof planPricesSchema>
export type Periodicity = z.infer<typeof periodicitySchema>
export type Plan = z.infer<typeof planSchema>

export type SubscriptionStatus = z.infer<typeof subscriptionStatusSchema>
export type MainPaymentMethodId = z.infer<typeof mainPaymentMethodIdSchema>
export type Subscription = z.infer<typeof subscriptionSchema>

export type Transaction = z.infer<typeof transactionsSchema>
export type TransactionStatus = z.infer<typeof transactionStatusSchema>
export type InvoiceConfigType = z.infer<typeof invoiceConfigTypeSchema>
export type InvoiceStatus = z.infer<typeof invoiceStatusSchema>
export type Invoice = z.infer<typeof invoiceSchema>
export type InvoiceConfig = z.infer<typeof invoiceConfigSchema>
export type ConciliationOccurrenceStatus = z.infer<
    typeof conciliationOccurrenceStatusSchema
>
export type ConciliationOccurrence = z.infer<
    typeof conciliationOccurrenceSchema
>
export type AbecsReasonDenied = z.infer<typeof abecsReasonDeniedSchema>

export type Charges = z.infer<typeof chargesSchema>
export type Contract = z.infer<typeof contractSchema>
export type Split = z.infer<typeof splitSchema>

export type ExtraFields = z.infer<typeof extraFieldSchema>

type Prettify<T> = {
    [K in keyof T]: T[K]
} & unknown

export type Client<T extends AppRouter> = Prettify<InitClientReturn<
    T,
    {
        baseUrl: string
        api: typeof celCashRestFetchApi
    }
>>
