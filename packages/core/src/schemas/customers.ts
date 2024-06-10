import { z } from 'zod'
import { transformArrayToString } from '../utils/transform'
import { addressSchema } from './common'

export const statusCustomerSchema = z.enum([
    'active',
    'delayed',
    'inactive',
    'withoutSubscriptionOrCharge',
])

export const createCustomerBodySchema = z.object({
    myId: z.string().uuid(),
    name: z.string(),
    document: z.string().min(11).max(14),
    emails: z.array(z.string()),
    phones: z.array(z.number()).optional(),
    invoiceHoldIss: z.boolean().optional(),
    municipalDocument: z.string().optional(),
    Address: addressSchema,
})

export type CreateCustomerBody = z.input<typeof createCustomerBodySchema>

export const customerSchema = createCustomerBodySchema.extend({
    galaPayId: z.number().int(),
    status: statusCustomerSchema,
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
})

export const createCustomerResponseSchema = z.object({
    type: z.boolean(),
    Customer: customerSchema,
})

export type CreateCustomerResponse = z.input<
    typeof createCustomerResponseSchema
>

export const listCustomersParamsSchema = z.object({
    documents: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    emails: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    createdAtFrom: z.string().datetime().optional(),
    createdAtTo: z.string().datetime().optional(),
    createdOrUpdatedFrom: z.string().datetime().optional(),
    createdOrUpdatedTo: z.string().datetime().optional(),
    myIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    galaxPayIds: z
        .union([z.array(z.coerce.number()), z.coerce.number()])
        .optional()
        .transform(transformArrayToString),
    startAt: z.number().optional(),
    status: z
        .enum(['active', 'delayed', 'inactive', 'withoutSubscriptionOrCharge'])
        .optional(),
    limit: z.number(),
    order: z
        .enum([
            'createdAt.asc',
            'createdAt.desc',
            'updatedAt.asc',
            'updatedAt.desc',
        ])
        .optional(),
})

export type ListCustomersParams = z.input<typeof listCustomersParamsSchema>

export const listCustomersResponseSchema = z.object({
    totalQtdFoundInPage: z.number().int(),
    Customers: z.array(customerSchema),
})

export type ListCustomersResponse = z.input<typeof listCustomersResponseSchema>
