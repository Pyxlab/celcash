import { z } from 'zod'
import {
    agreementSchema,
    cardOperatorIdSchema,
    deadlineSchema,
} from './_/payments.js'
import { cardSchema } from './cards.js'

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

export const paymentMethodBoletoSchema = z.object({
    fine: z.coerce.number().optional(),
    interest: z.coerce.number().optional(),
    instructions: z.string().optional(),
    deadlineDays: z.coerce.number().optional(),
    documentNumber: z.string().optional(),
    Aggrement: agreementSchema.optional(),
})

export const paymentMethodPixSchema = z.object({
    fine: z.coerce.number().optional(),
    interest: z.coerce.number().optional(),
    instructions: z.string().optional(),
    Deadline: deadlineSchema.optional(),
})
