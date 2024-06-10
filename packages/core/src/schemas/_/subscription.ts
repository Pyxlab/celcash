import { z } from 'zod'

export const subscriptionStatusSchema = z.enum([
    'active',
    'canceled',
    'closed',
    'stopped',
    'waitingPayment',
    'inactive',
])
