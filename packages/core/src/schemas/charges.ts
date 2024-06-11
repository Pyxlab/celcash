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
import { contractSchema, splitSchema } from './contract.js'
import { customerSchema } from './customers.js'
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

const subscriptionSchema = z.object({
    myId: z.string(),
    planMyId: z.string(),
    planGalaxPayId: z.coerce.number(),
    firstPayDayDate: z.string(),
    additionalInfo: z.string().optional(),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    galaxPayId: z.coerce.number(),
    periodicity: periodicitySchema,
    paymentLink: z.string().optional(),
    value: z.coerce.number(),
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
    myId: z.string(),
    galaxPayId: z.coerce.number(),
    chargeMyId: z.string(),
    chargeGalaxPayId: z.coerce.number(),
    subscriptionMyId: z.string(),
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
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .describe(
            'Ids da cobrança avulsa no seu sistema. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    galaxPayIds: z
        .union([z.array(z.coerce.number()), z.coerce.number()])
        .optional()
        .describe(
            'Ids da cobrança avulsa no cel_cash. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    customerMyIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .describe(
            'Customer.myId. Id do cliente no seu sistema. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    customerGalaxPayIds: z
        .union([z.array(z.coerce.number()), z.coerce.number()])
        .optional()
        .describe(
            'Customer.galaxPayId. Id do cliente no cel_cash. Separe cada id por vírgula.',
        )
        .transform(transformArrayToString),
    createdAtFrom: z.string().optional().describe('Data de criação inicial.'),
    createdAtTo: z.string().optional().describe('Data de criação final.'),
    createdOrUpdatedAtFrom: z.coerce
        .string()
        .optional()
        .describe('Data de criação/atualização inicial.'),
    createdOrUpdatedAtTo: z.coerce
        .string()
        .optional()
        .describe('Data de criação/atualização final.'),
    status: z
        .union([chargesStatusSchema, z.array(chargesStatusSchema)])
        .optional()
        .describe('Status da cobrança avulsa. Separe cada valor por vírgula.')
        .transform(transformArrayToString),
    ExtraFields: z
        .array(z.string())
        .optional()
        .describe(
            'Buscar por um ou mais campos adicionais. String que deverá ser montada da seguinte maneira: NOME_DA_TAG.valor que quero buscar,NOME_DA_TAG2.valor1111',
        ),
    startAt: z.coerce
        .number()

        .describe('Ponteiro inicial para trazer os registros.')
        .min(0),
    limit: z.coerce
        .number()
        .min(0)
        .max(100)
        .describe('Qtd máxima de registros para trazer.'),
    order: z
        .enum([
            'createdAt.asc',
            'createdAt.desc',
            'updatedAt.asc',
            'updatedAt.desc',
        ])
        .optional()
        .describe(
            'Ordenação do resultado. String que deverá ser montada da seguinte maneira: campoDaEntidade.tipoDeOrdem. Caso queira passar mais de uma ordenação, separar por vírgula: campoDaEntidade.tipoDeOrdem, campoDaEntidade2.tipoDeOrdem',
        ),
})

export type ListChargesParams = z.input<typeof listChargesParamsSchema>

export const chargesSchema = z.object({
    galaxPayId: z.string(),
    myId: z.string().nullable(),
    planGalaxPayId: z.string(),
    planMyId: z.string().nullable(),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    paymentLink: z.string().url(),
    additionalInfo: z.string().nullable(),
    value: z.coerce.number(),
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
    totalQtdFoundInPage: z.coerce.number(),
    Charges: z.array(chargesSchema),
})

export type ListChargesResponse = z.input<typeof listChargesResponseSchema>

export const createChargeBodySchema = z.object({
    myId: z.coerce
        .string()
        .describe('Id referente no seu sistema, para salvar no cel_cash.'),
    value: z.coerce.number().describe('Preço em centavos.'),
    additionalInfo: z.coerce
        .string()
        .optional()
        .describe('Texto livre dedicado a informações adicionais internas.'),
    payday: z.coerce
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Data de vencimento inválida.')
        .describe('Data de vencimento da cobrança.'),
    planMyId: z.coerce
        .string()
        .optional()
        .describe(
            'Plan.myId: Id do plano no seu sistema, para salvar no cel_cash.',
        ),
    payedOutsideGalaxPay: z
        .boolean()
        .optional()
        .describe('Indica se a cobrança foi paga fora do cel_cash.'),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    Customer: customerSchema.deepPartial(),
    PaymentMethodCreditCard: paymentMethodCreditCardSchema.optional(),
    PaymentMethodBoleto: paymentMethodBoletoSchema.optional(),
    PaymentMethodPix: paymentMethodPixSchema.optional(),
})

export type CreateChargeBody = z.input<typeof createChargeBodySchema>

export const createChargeResponseSchema = z.object({
    type: z.boolean(),
    Charge: chargesSchema,
})

export type CreateChargeResponse = z.input<typeof createChargeResponseSchema>

export const updateChargeBodySchema = z.object({
    myId: z.coerce
        .string()
        .optional()
        .describe('Id referente no seu sistema, para salvar no cel_cash.'),
    value: z.coerce.number().optional().describe('Preço em centavos.'),
    additionalInfo: z.coerce
        .string()
        .optional()
        .describe('Texto livre dedicado a informações adicionais internas.'),
    payday: z.coerce
        .string()

        .optional()
        .describe('Data de vencimento da cobrança.'),
    planMyId: z.coerce
        .string()
        .optional()
        .describe('Id do plano no seu sistema, para salvar no cel_cash.'),
    payedOutsideGalaxPay: z
        .boolean()
        .optional()
        .describe('Indica se a cobrança foi paga fora do cel_cash.'),
    mainPaymentMethodId: mainPaymentMethodIdSchema,
    planGalaxPayId: z.coerce
        .string()
        .optional()
        .describe('Plan.galaxPayId: Id do plano no cel_cash.'),
})

export type UpdateChargeBody = z.input<typeof updateChargeBodySchema>
