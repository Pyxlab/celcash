import { P, match } from 'ts-pattern'
import { z } from 'zod'
import {
    agreementSchema,
    cardOperatorIdSchema,
    deadlineSchema,
} from './_/payments.js'
import { cardSchema } from './cards.js'

export const paymentMethodCreditCardSchema = z.object({
    Card: cardSchema.deepPartial().refine(values => {
        return match(values)
            .with(
                {
                    myId: P.string,
                    galaxPayId: P.nullish,
                    number: P.nullish,
                    holder: P.nullish,
                    expiresAt: P.nullish,
                    cvv: P.nullish,
                },
                () => true,
            )
            .with(
                {
                    galaxPayId: P.number,
                    myId: P.nullish,
                    number: P.nullish,
                    holder: P.nullish,
                    expiresAt: P.nullish,
                    cvv: P.nullish,
                },
                () => true,
            )
            .with(
                {
                    galaxPayId: P.nullish,
                    myId: P.string,
                    number: P.string,
                    holder: P.string,
                    expiresAt: P.string,
                    cvv: P.string,
                },
                () => true,
            )
            .otherwise(() => false)
    }, 'You must provide all fields if you are not providing the galaxPayId or myId'),
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
