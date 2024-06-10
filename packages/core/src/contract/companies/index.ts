import { initContract } from '@ts-rest/core'
import { balance } from './balance.js'
import { fees } from './fees.js'
import { subaccounts } from './subaccounts.js'

const c = initContract()

export const companies = c.router(
    {
        fees,
        balance,
        subaccounts,
    },
    { pathPrefix: '/company' },
)
