import { Configure } from '@cel_cash/core/utils'
import { describe, it } from 'vitest'
import { CelCashClient } from '../src/client'

const config: Configure = {
    BASE_URL: 'https://api.sandbox.cel.cash/v2',
    ID: 5473,
    HASH: '83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe',
}

class testClient extends CelCashClient {
    async retrieveCachedAccessTokenTest() {
        return this.getCachedAccessToken()
    }

    async setCachedAccessTokenTest(value: string, expiresIn: number) {
        return this.setCachedAccessToken(value, expiresIn)
    }
}

describe.concurrent('CelCashClient', () => {
    it('should initialize with the provided config', async ({ expect }) => {
        const client = new CelCashClient(config)

        const plans = await client.plans.list({
            query: {
                startAt: 0,
                limit: 10,
            },
        })

        expect(plans).toBeDefined()
    })

    it('should throw an error if the token is invalid', async ({ expect }) => {
        const client = new CelCashClient({
            ...config,
            HASH: 'invalid',
        })

        expect(
            client.plans.list({ query: { startAt: 0, limit: 10 } }),
        ).rejects.toThrow()
    })

    it('should cache the access token', async ({ expect }) => {
        const client = new testClient(config)
        await client.plans.list({ query: { startAt: 0, limit: 1 } })

        const token = await client.retrieveCachedAccessTokenTest()

        expect(token).toBeDefined()
    })

    it('should set the access token in the cache', async ({ expect }) => {
        const client = new testClient(config)
        await client.setCachedAccessTokenTest('test', 60)

        const token = await client.retrieveCachedAccessTokenTest()

        expect(token).toBeDefined()
        expect(token).toBeTypeOf('string')
        expect(token).toBe('test')
    })

    it('should return null if the token has expired', async ({ expect }) => {
        const client = new testClient(config)
        await client.setCachedAccessTokenTest('test', 2)

        await new Promise(resolve => setTimeout(resolve, 3000))

        const token = await client.retrieveCachedAccessTokenTest()

        expect(token).toBeNull()
    })
})
