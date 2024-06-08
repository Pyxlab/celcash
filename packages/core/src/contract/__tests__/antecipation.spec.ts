import { initClient } from '@ts-rest/core'
import { beforeEach, describe, it } from 'vitest'
import { api } from '../../api'
import { basicAuthorization } from '../../authorization'
import { antecipation } from '../antecipation'
import { auth } from '../auth'

let authorization: string

beforeEach(async () => {
    const client = initClient(auth, {
        baseUrl: 'https://api.sandbox.cel.cash/v2',
        api,
    })

    const response = await client.token({
        body: {
            grant_type: 'authorization_code',
            scope: ['antecipation.write', 'antecipation.read'],
        },
        headers: {
            authorization: basicAuthorization({
                ID: 5473,
                HASH: '83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe',
            }),
        },
    })

    if (response.status === 200) {
        authorization = `Bearer ${response.body.access_token}`
    }
})

describe('Antecipation', () => {
    const client = initClient(antecipation, {
        baseUrl: 'https://api.sandbox.cel.cash/v2',
        api,
        baseHeaders: {
            authorization,
        },
    })

    it('should have the correct methods', ({ expect }) => {
        expect(client.simulate).toHaveProperty('getByFilters')
        expect(client.simulate).toHaveProperty('create')
        expect(client).toHaveProperty('create')
    })

    it.skip('should create antecipation', async ({ expect }) => {
        const response = await client.simulate.create({
            body: {
                brands: ['visa', 'mastercard'],
                transactionGalaxPayIds: [1, 2, 3],
                value: 1000,
            },
        })

        expect(response).toHaveProperty('status', 200)
    })

    it.skip('should list antecipations', async ({ expect }) => {
        const response = await client.simulate.getByFilters({
            query: {
                page: 1,
                limit: 10,
            },
        })

        expect(response).toHaveProperty('status', 200)
    })
})
