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
