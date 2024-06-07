import { z } from 'zod'

export const subscriptionStatusSchema = z.enum([
    'active',
    'canceled',
    'stopped',
    'waitingPayment',
    'inactive',
])
