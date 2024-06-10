import { z } from 'zod'
import { transformArrayToString } from '../utils/transform'
import { mainPaymentMethodIdSchema, periodicitySchema } from './_/common'
import {
    antifraudSchema,
    boletoSchema,
    cardOperatorIdSchema,
    pixSchema,
} from './_/payments'
import { subscriptionStatusSchema } from './_/subscription'
import { cardSchema } from './cards'
import { chargesSchema } from './charges'
import { invoiceConfigSchema, invoiceSchema } from './common'
import { splitSchema } from './contract'
import { customerSchema } from './customers'
import {
    paymentMethodBoletoSchema,
    paymentMethodCreditCardSchema,
    paymentMethodPixSchema,
} from './payments'

const subscriptionSchema = z.object({
    myId: z.string(),
    planMyId: z.string(),
    planGalaxPayId: z.number().int(),
    firstPayDayDate: z.string().datetime(),
    additionalInfo: z.string().optional(),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    galaxPayId: z.number().int(),
    periodicity: periodicitySchema,
    paymentLink: z.string().optional(),
    value: z.number().int(),
    status: subscriptionStatusSchema,
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

export const listTransactionsParamsSchema = z.object({
    myIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .describe(
            'Ids das transações no seu sistema. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    galaxPayIds: z
        .union([z.array(z.number().int()), z.number().int()])
        .optional()
        .describe('Ids das transações no cel_cash. Separe cada id por vírgula.')
        .transform(transformArrayToString),
    subscriptionGalaxPayIds: z
        .union([z.array(z.number()), z.number()])
        .optional()
        .describe(
            'Subscription.galaxPayId. Id da assinatura no cel_cash. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    chargeMyIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .describe(
            'Charge.myId. Id da cobrança no seu sistema. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    customerMyIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .describe(
            'Customer.myId. Id do cliente no seu sistema. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    customerGalaxPayIds: z
        .union([z.array(z.number().int()), z.number().int()])
        .optional()
        .describe(
            'Customer.galaxPayId. Id do cliente no cel_cash. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    chargeGalaxPayIds: z
        .union([z.array(z.number().int()), z.number().int()])
        .optional()
        .describe(
            'Charge.galaxPayId. Id da cobrança no cel_cash. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    createdAtFrom: z
        .string()
        .datetime()
        .optional()
        .describe('Data de criação inicial'),
    createdAtTo: z
        .string()
        .datetime()
        .optional()
        .describe('Data de criação final'),
    payDayFrom: z
        .string()
        .datetime()
        .optional()
        .describe('Data de vencimento inicial'),
    payDayTo: z
        .string()
        .datetime()
        .optional()
        .describe('Data de vencimento final'),
    updateStatusFrom: z
        .string()
        .datetime()
        .optional()
        .describe('Data de atualização de status inicial'),
    updateStatusTo: z
        .string()
        .datetime()
        .optional()
        .describe('Data de atualização de status final'),
    status: z
        .union([transactionStatusSchema, z.array(transactionStatusSchema)])
        .optional()
        .describe('Status da transação. Separe cada status por vírgula.')
        .transform(transformArrayToString),
    startAt: z
        .number()
        .int()
        .describe('Ponteiro inicial para trazer os registros.'),
    limit: z.number().int().describe('Qtd máxima de registros para trazer.'),
    order: z
        .enum(['createdAt.asc', 'createdAt.desc', 'payday.asc', 'payday.desc'])
        .optional()
        .describe(`Ordenação do resultado. String que deverá ser montada da seguinte maneira: campoDaEntidade.tipoDeOrdem
Caso queira passar mais de uma ordenação, separar por vírgula: campoDaEntidade.tipoDeOrdem, campoDaEntidade2.tipoDeOrd`),
})

export const conciliationOccurrenceStatusSchema = z.enum([
    'payment',
    'canceled',
])

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

export const abecsReasonDeniedSchema = z.object({
    code: z.string().length(4),
    message: z.string(),
})

export const transactionsSchema = z.object({
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
    Charge: z.array(chargesSchema),
    Subscription: subscriptionSchema,
    CreditCard: z.object({
        Card: cardSchema,
    }),
})

export const listTransactionsResponseSchema = z.object({
    totalQtdFoundInPage: z.number().int(),
    Transactions: z.array(transactionsSchema),
})

export const createTransactionBodySchema = z.object({
    myId: z.string().uuid(),
    value: z.number().int(),
    payday: z.string().datetime(),
    payedOutsideGalaxPay: z.boolean(),
    additionalInfo: z.string().optional(),
    PaymentMethodCreditCard: paymentMethodCreditCardSchema,
    InvoiceConfig: invoiceConfigSchema.optional(),
})

export const createOrUpdateTransactionResponseSchema = z.object({
    type: z.boolean(),
    Transaction: createTransactionBodySchema.extend({
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
    }),
    Split: splitSchema,
})

export type CreateOrUpdateTransactionResponse = z.input<
    typeof createOrUpdateTransactionResponseSchema
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

export type UpdateTransactionBody = z.input<typeof updateTransactionBodySchema>

export const addTransactionBodySchema = z.object({
    myId: z
        .string()
        .uuid()
        .describe('Id referente no seu sistema, para salvar na cel_cash'),
    value: z
        .number()
        .int()
        .optional()
        .describe(
            'Valor a ser cobrado. Caso não seja informado, será considerado o valor da assinatura',
        ),
    payday: z
        .string()
        .datetime()
        .optional()
        .describe(`Data de vencimento do pagamento
Caso não for passado, será calculada automaticamente pela data da último pagamento e periodicidade da assinatura.
Se for a primeira transação da assinatura, irá pegar o valor definido em Subscription.firstPayDayDate.`),
    payedOutsideGalaxPay: z
        .boolean()
        .optional()
        .describe('Indica se a transação foi paga fora do cel_cash'),
    PaymentMethodCreditCard: paymentMethodCreditCardSchema,
    InvoiceConfig: invoiceConfigSchema,
})

export const retryOrReverseTransactionResponseSchema = z.object({
    Transaction: transactionsSchema,
    PaymentMethodCreditCard: paymentMethodCreditCardSchema,
})
