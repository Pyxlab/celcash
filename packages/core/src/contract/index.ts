import { Client } from '../types.js'
import { antecipation } from './antecipation.js'
import { auth } from './auth.js'
import { cards } from './cards.js'
import { chargebacks } from './chargebacks.js'
import { charges } from './charges.js'
import { companies } from './companies/index.js'
import { subaccounts } from './companies/subaccounts.js'
import { customers } from './customers.js'
import { plans } from './plans.js'
import { subscriptions } from './subscriptions.js'
import { transactions } from './transactions.js'
import { pix, transfer } from './transfer.js'

export type Antecipation = Client<typeof antecipation>
export type Auth = Client<typeof auth>
export type Cards = Client<typeof cards>
export type Chargebacks = Client<typeof chargebacks>
export type Charges = Client<typeof charges>
export type Companies = Client<typeof companies>
export type Customers = Client<typeof customers>
export type Plans = Client<typeof plans>
export type Subscriptions = Client<typeof subscriptions>
export type Transactions = Client<typeof transactions>
export type Pix = Client<typeof pix>
export type Transfer = Client<typeof transfer>
export type Subaccounts = Client<typeof subaccounts>

export type Contract = {
    antecipation: Antecipation
    cards: Cards
    chargebacks: Chargebacks
    charges: Charges
    companies: Companies
    customers: Customers
    plans: Plans
    subscriptions: Subscriptions
    transactions: Transactions
    pix: Pix
    transfer: Transfer
    subaccounts: Subaccounts
}

export {
    antecipation,
    auth,
    cards,
    chargebacks,
    charges,
    companies,
    customers,
    plans,
    subscriptions,
    transactions,
    pix,
    transfer,
    subaccounts,
}
