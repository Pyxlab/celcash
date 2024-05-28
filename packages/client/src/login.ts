import { auth } from '@cel_cash/core/contracts'
import { initClient, initContract } from '@ts-rest/core'
import { authorization } from './authorization'
import type { Configure } from './types'

const contract = initContract().router({ auth })

export async function login(config: Configure) {
    const baseURL = config.BASE_URL

    const client = initClient(contract, {
        baseUrl: baseURL,
        baseHeaders: {},
    })

    const token = await client.auth.token({
        body: {
            grant_type: 'authorization_code',
            scope: [
                'customers.read',
                'customers.write',
                'plans.read',
                'plans.write',
                'transactions.read',
                'transactions.write',
                // "webhooks.write",
                'cards.read',
                'cards.write',
                'card-brands.read',
                'subscriptions.read',
                'subscriptions.write',
                'charges.read',
                'charges.write',
                'boletos.read',
                'carnes.read',
                'payment-methods.read',
            ].join(' '),
        },
        headers: {
            authorization: authorization(config),
        },
    })

    if (token.status !== 200) {
        throw new Error('Erro ao buscar token')
    }

    return token.body
}
