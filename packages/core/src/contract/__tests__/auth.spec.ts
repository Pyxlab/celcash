import { initClient } from '@ts-rest/core'
import { describe, it } from 'vitest'
import { api } from '../../api'
import { basicAuthorization } from '../../authorization'
import { auth } from '../auth'

describe.concurrent('auth', () => {
    const client = initClient(auth, {
        baseUrl: 'https://api.sandbox.cel.cash/v2',
        api,
    })

    const authorization = basicAuthorization({
        ID: 5473,
        HASH: '83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe',
    })

    it('should have the correct methods', ({ expect }) => {
        expect(client).toHaveProperty('token')
    })

    it('should be able to call the token method', async ({ expect }) => {
        const response = await client.token({
            body: {
                grant_type: 'authorization_code',
                scope: [],
            },
            headers: {
                authorization,
            },
        })

        expect(response).not.toBeFalsy()
    })

    it('should throw an error if the authorization header is not correct', async ({
        expect,
    }) => {
        const response = await client.token({
            body: {
                grant_type: 'authorization_code',
                scope: [],
            },
            headers: {
                authorization: '12345',
            },
        })

        expect(response.status).toBe(401)
    })

    it('should throw an error if the body is not correct', async ({
        expect,
    }) => {
        const response = await client.token({
            body: {
                grant_type: 'authorization_code',
                scope: ['banana'] as any,
            },
            headers: {
                authorization,
            },
        })

        expect(response.status).toBe(507)
    })

    it('should be access_token in the response if the body is correct', async ({
        expect,
    }) => {
        const response = await client.token({
            body: {
                grant_type: 'authorization_code',
                scope: ['cards.read'],
            },
            headers: {
                authorization,
            },
        })

        expect(response.body).toHaveProperty('access_token')
    })
})
