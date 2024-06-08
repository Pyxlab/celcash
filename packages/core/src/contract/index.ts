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

type Antecipation = Client<typeof antecipation>
type Auth = Client<typeof auth>
type Cards = Client<typeof cards>
type Chargebacks = Client<typeof chargebacks>
type Charges = Client<typeof charges>
type Companies = Client<typeof companies>
type Customers = Client<typeof customers>
type Plans = Client<typeof plans>
type Subscriptions = Client<typeof subscriptions>
type Transactions = Client<typeof transactions>
type Pix = Client<typeof pix>
type Transfer = Client<typeof transfer>

export type {
    Antecipation,
    Auth,
    Cards,
    Chargebacks,
    Charges,
    Companies,
    Customers,
    Plans,
    Subscriptions,
    Transactions,
    Pix,
    Transfer,
}

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
