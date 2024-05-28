import { initContract } from '@ts-rest/core'
import { z } from 'zod'
import {
    authorizationBodySchema,
    authorizationResponseSchema,
} from '../schemas/common'
import { antecipation } from './antecipation'
import { chargebacks } from './chargebacks'
import { charges } from './charges'
import { companies } from './companies'
import { customers } from './customers'
import { plans } from './plans'
import { subscriptions } from './subscriptions'
import { transactions } from './transactions'
import { pix, transfer } from './transfer'

const c = initContract()

export const contract = c.router({
    subscriptions,
    antecipation,
    chargebacks,
    companies,
    pix,
    transfer,
    customers,
    plans,
    transactions,
    charges,
    token: {
        method: 'POST',
        path: '/token',
        responses: {
            200: authorizationResponseSchema,
        },
        body: authorizationBodySchema,
        headers: z.object({
            Authorization: z.string().regex(/^Basic .+$/),
        }),
    },
})
