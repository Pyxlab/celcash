import { initClient } from '@ts-rest/core'
import { beforeEach, describe, it } from 'vitest'
import { api } from '../../utils/api'
import { antecipation } from '../antecipation'
import { authenticate } from './_utils'

let authorization: string

beforeEach(async () => {
    const { access_token } = await authenticate()
    authorization = `Bearer ${access_token}`
})

describe('Antecipation', () => {
    const client = initClient(antecipation, {
        baseUrl: 'https://api.sandbox.cel.cash/v2',
        api: args =>
            api({
                ...args,
                headers: {
                    ...args.headers,
                    Authorization: authorization,
                },
            }),
    })

    it('should have the correct methods', ({ expect }) => {
        expect(client.simulate).toHaveProperty('getByFilters')
        expect(client.simulate).toHaveProperty('create')
        expect(client).toHaveProperty('create')
    })

    it('should be return status 507 error', async ({ expect }) => {
        const response = await client.simulate.getByFilters({
            query: {} as any,
        })

        expect(response.status).toBe(507)
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
