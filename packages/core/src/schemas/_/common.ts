import { z } from 'zod'

export const periodicitySchema = z.enum([
    'weekly',
    'biweekly',
    'monthly',
    'bimonthly',
    'quarterly',
    'biannual',
    'yearly',
])

export const mainPaymentMethodIdSchema = z.enum(['creditcard', 'boleto', 'pix'])

const tupleOrder = z
    .tuple([z.string(), z.enum(['asc', 'desc'])])
    .transform(([field, direction]) => `${field}.${direction}`)

export const orderSchema = z
    .union([tupleOrder, z.array(tupleOrder)])
    .transform(value => {
        if (Array.isArray(value)) {
            return value.join(',')
        }
        return value
    })
