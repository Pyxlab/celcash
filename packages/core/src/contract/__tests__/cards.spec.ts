import { initClient } from '@ts-rest/core'
import { beforeEach, describe, it } from 'vitest'
import { api } from '../../utils/api'
import { cards } from '../cards'
import { authenticate } from './_utils'

let authorization: string

beforeEach(async () => {
    const { access_token } = await authenticate()
    authorization = `Bearer ${access_token}`
})

describe.concurrent('Cards', () => {
    const client = initClient(cards, {
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
        expect(client).toHaveProperty('create')
        expect(client).toHaveProperty('delete')
        expect(client).toHaveProperty('list')
    })

    it('should list cards', async ({ expect }) => {
        const response = await client.list({
            query: {
                status: 'active',
                limit: 10,
                startAt: 10,
                order: ['createdAt', 'asc'],
            },
        })

        expect(response.status).toBe(200)
    })

    it('should not list cards if the query is not correct', async ({
        expect,
    }) => {
        const response = await client.list({
            query: {
                status: 'active',
                limit: 'banana' as any,
                startAt: 10,
            },
        })

        expect(response.status).toBe(507)
    })
})
