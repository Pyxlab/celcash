import { z } from 'zod'
import { cardSchema } from './cards'
import { extraFieldSchema, invoiceConfigSchema, invoiceSchema } from './common'
import { contractSchema, splitSchema } from './contract'
import { customerSchema } from './customers'
import {
    antifraudSchema,
    boletoSchema,
    cardOperatorIdSchema,
    paymentMethodBoletoSchema,
    paymentMethodCreditCardSchema,
    paymentMethodPixSchema,
    pixSchema,
} from './payments'
import { periodicitySchema } from './plans'
import {
    createSubscriptionWithPlanBodySchema,
    mainPaymentMethodIdSchema,
    subscriptionStatusSchema,
} from './subscriptions'
import {
    abecsReasonDeniedSchema,
    conciliationOccurrenceSchema,
    transactionStatusSchema,
} from './transactions'

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
    Subscription: subscriptionSchema,
    CreditCard: z.object({
        Card: cardSchema,
    }),
})

export const chargesStatusSchema = z.enum([
    'active',
    'canceled',
    'closed',
    'waitingPayment',
    'inactive',
])

export const listChargesParamsSchema = z.object({
    myIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .describe(
            'Ids da cobrança avulsa no seu sistema. Separe cada id por vírgula.',
        ),
    galaxPayIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .describe(
            'Ids da cobrança avulsa no cel_cash. Separe cada id por vírgula.',
        ),
    customerMyIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .describe(
            'Customer.myId. Id do cliente no seu sistema. Separe cada id por vírgula.',
        ),
    customerGalaxPayIds: z
        .union([z.array(z.string()), z.string()])
        .optional()
        .describe(
            'Customer.galaxPayId. Id do cliente no cel_cash. Separe cada id por vírgula.',
        ),
    createdAtFrom: z.string().optional().describe('Data de criação inicial.'),
    createdAtTo: z.string().optional().describe('Data de criação final.'),
    createdOrUpdatedAtFrom: z
        .string()
        .optional()
        .describe('Data de criação/atualização inicial.'),
    createdOrUpdatedAtTo: z
        .string()
        .optional()
        .describe('Data de criação/atualização final.'),
    status: z
        .union([chargesStatusSchema, z.array(chargesStatusSchema)])
        .optional()
        .describe('Status da cobrança avulsa. Separe cada valor por vírgula.'),
    ExtraFields: z
        .array(z.string())
        .optional()
        .describe(
            'Buscar por um ou mais campos adicionais. String que deverá ser montada da seguinte maneira: NOME_DA_TAG.valor que quero buscar,NOME_DA_TAG2.valor1111',
        ),
    startAt: z
        .number()
        .int()
        .describe('Ponteiro inicial para trazer os registros.')
        .min(0),
    limit: z
        .number()
        .int()
        .describe('Qtd máxima de registros para trazer.')
        .min(1),
    order: z
        .string()
        .optional()
        .describe(
            'Ordenação do resultado. String que deverá ser montada da seguinte maneira: campoDaEntidade.tipoDeOrdem. Caso queira passar mais de uma ordenação, separar por vírgula: campoDaEntidade.tipoDeOrdem, campoDaEntidade2.tipoDeOrdem',
        ),
})

export type ListChargesParams = z.infer<typeof listChargesParamsSchema>

export const chargesSchema = z.object({
    galaxPayId: z.string(),
    myId: z.string().nullable(),
    planGalaxPayId: z.string(),
    planMyId: z.string().nullable(),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    paymentLink: z.string().url(),
    additionalInfo: z.string().nullable(),
    value: z.number(),
    status: chargesStatusSchema,
    payedOutsideGalaxPay: z.boolean(),
    Customer: customerSchema,
    Transactions: z.array(transactionsSchema),
    PaymentMethodCreditCard: paymentMethodCreditCardSchema,
    PaymentMethodBoleto: paymentMethodBoletoSchema,
    PaymentMethodPix: paymentMethodPixSchema,
    InvoiceConfig: invoiceConfigSchema,
    ExtraFields: z.array(extraFieldSchema),
    Contract: contractSchema,
    Split: splitSchema,
})

export const listChargesResponseSchema = z.object({
    totalQtdFoundInPage: z.number().int(),
    Charges: z.array(chargesSchema),
})

export type ListChargesResponse = z.infer<typeof listChargesResponseSchema>

export const createChargeBodySchema = z.object({
    myId: z
        .string()
        .uuid()
        .describe('Id referente no seu sistema, para salvar no cel_cash.'),
    value: z.number().int().describe('Preço em centavos.'),
    additionalInfo: z
        .string()
        .optional()
        .describe('Texto livre dedicado a informações adicionais internas.'),
    payday: z.string().datetime().describe('Data de vencimento da cobrança.'),
    planMyId: z
        .string()
        .uuid()
        .optional()
        .describe(
            'Plan.myId: Id do plano no seu sistema, para salvar no cel_cash.',
        ),
    payedOutsideGalaxPay: z
        .boolean()
        .optional()
        .describe('Indica se a cobrança foi paga fora do cel_cash.'),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    Customer: customerSchema,
    PaymentMethodCreditCard: paymentMethodCreditCardSchema.optional(),
    PaymentMethodBoleto: paymentMethodBoletoSchema.optional(),
    PaymentMethodPix: paymentMethodPixSchema.optional(),
    Split: splitSchema,
    InvoiceConfig: invoiceConfigSchema,
    ExtraFields: z.array(extraFieldSchema),
})

export type CreateChargeBody = z.infer<typeof createChargeBodySchema>

export const createChargeResponseSchema = z.object({
    type: z.boolean(),
    Charge: chargesSchema,
})

export type CreateChargeResponse = z.infer<typeof createChargeResponseSchema>

export const updateChargeBodySchema = z.object({
    myId: z
        .string()
        .uuid()
        .optional()
        .describe('Id referente no seu sistema, para salvar no cel_cash.'),
    value: z.number().int().describe('Preço em centavos.'),
    additionalInfo: z
        .string()
        .optional()
        .describe('Texto livre dedicado a informações adicionais internas.'),
    payday: z
        .string()
        .datetime()
        .optional()
        .describe('Data de vencimento da cobrança.'),
    planMyId: z
        .string()
        .uuid()
        .optional()
        .describe('Id do plano no seu sistema, para salvar no cel_cash.'),
    payedOutsideGalaxPay: z
        .boolean()
        .optional()
        .describe('Indica se a cobrança foi paga fora do cel_cash.'),
    mainPaymentMethodIdSchema: mainPaymentMethodIdSchema,
    planGalaxPayId: z
        .string()
        .optional()
        .describe('Plan.galaxPayId: Id do plano no cel_cash.'),
})

export type UpdateChargeBody = z.infer<typeof updateChargeBodySchema>
