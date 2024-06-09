import { Client } from '../types'
import { antecipation } from './antecipation'
import { auth } from './auth'
import { cards } from './cards'
import { chargebacks } from './chargebacks'
import { charges } from './charges'
import { companies } from './companies'
import { customers } from './customers'
import { plans } from './plans'
import { subscriptions } from './subscriptions'
import { transactions } from './transactions'
import { pix, transfer } from './transfer'

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
}
