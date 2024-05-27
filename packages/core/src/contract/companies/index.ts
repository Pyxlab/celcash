import { initContract } from '@ts-rest/core'
import { balance } from './balance'
import { fees } from './fees'
import { subaccounts } from './subaccounts'

const c = initContract()

export const companies = c.router(
    {
        fees,
        balance,
        subaccounts,
    },
    { pathPrefix: '/company' },
)
