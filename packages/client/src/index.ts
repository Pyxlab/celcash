import { AsyncLocalStorage } from 'node:async_hooks'
import { contract } from '@celcash/core'
import { initClient, tsRestFetchApi } from '@ts-rest/core'
import { login } from './login';
import type { Configure } from './types';

export async function initCelCashClient(config: Configure) {
    const store = new AsyncLocalStorage<{ token: string; expiresAt: number }>()
    const baseURL = config.BASE_URL

    const token = await login(config)

    store.enterWith({
        token: token.access_token,
        expiresAt: Date.now() + token.expires_in * 1000,
    })

    return initClient(contract, {
        baseUrl: baseURL,
        baseHeaders: {},
        api: async args => {
            const label = `${args.method.toUpperCase()} ${args.path} end in`
            console.time(label)

            try {
                const storedToken = store.getStore()

                if (!storedToken || storedToken.expiresAt < Date.now()) {
                    const token = await login(config)

                    store.enterWith({
                        token: token.access_token,
                        expiresAt: Date.now() + token.expires_in * 1000,
                    })
                }

                args.headers = {
                    ...args.headers,
                    Authorization: `Bearer ${store.getStore()?.token}`,
                }

                const result = await tsRestFetchApi(args)

                console.timeEnd(label)

                return result
            } catch (e) {
                console.timeEnd(label)
                console.error(e)
                throw e
            }
        },
    })
}
