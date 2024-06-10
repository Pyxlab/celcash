import { initClient } from '@ts-rest/core'
import { auth } from '../contract/auth.js'
import { basicAuthorization } from './basic.js'
import { Configure } from './types.js'

export async function login(config: Configure) {
    const baseURL = config.BASE_URL

    const client = initClient(auth, {
        baseUrl: baseURL,
        baseHeaders: {},
    })

    const token = await client.token({
        body: {
            grant_type: 'authorization_code',
            scope: [
                'customers.read',
                'customers.write',
                'plans.read',
                'plans.write',
                'transactions.read',
                'transactions.write',
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
            ].join(' ') as any,
        },
        headers: {
            authorization: basicAuthorization(config),
        },
    })

    if (token.status !== 200) {
        throw new Error('Erro ao buscar token')
    }

    return token.body
}
