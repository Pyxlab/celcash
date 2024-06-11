import { AsyncLocalStorage } from 'node:async_hooks'
import { CelCashServiceContract } from '@cel_cash/core'
import { type Configure, login } from '@cel_cash/core/utils'

export class CelCashClient extends CelCashServiceContract {
    readonly #store: AsyncLocalStorage<{
        token: string
        expiresAt: number
    }>

    static #formatMessage = (
        message: string,
        type: 'ERROR' | 'DEBUG',
    ): string => {
        const date = new Date()
        const day = date.getDate().toString().padStart(2, '0')
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const year = date.getFullYear()
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const seconds = date.getSeconds().toString().padStart(2, '0')
        const ampm = +hours >= 12 ? 'PM' : 'AM'
        const formattedHours = +hours % 12

        return `[CelCashClient] ${process.pid} - ${day}/${month}/${year} ${formattedHours}:${minutes}:${seconds} ${ampm} ${type} - ${message}`
    }

    constructor(config: Configure) {
        super(config, {
            debug(message) {
                console.debug(CelCashClient.#formatMessage(message, 'DEBUG'))
            },
            error(message) {
                console.error(CelCashClient.#formatMessage(message, 'ERROR'))
            },
        })

        this.#store = new AsyncLocalStorage()

        login(config).then(token => {
            this.#store.enterWith({
                token: token.access_token,
                expiresAt: Date.now() + token.expires_in * 1000,
            })
        })
    }

    protected getCachedAccessToken(): Promise<string | null> {
        const storedToken = this.#store.getStore()

        if (!storedToken || storedToken.expiresAt < Date.now()) {
            return Promise.resolve(null)
        }

        return Promise.resolve(storedToken.token)
    }

    protected setCachedAccessToken(
        value: string,
        expiresIn: number,
    ): Promise<void> {
        this.#store.enterWith({
            token: value,
            expiresAt: Date.now() + expiresIn * 1000,
        })

        return Promise.resolve()
    }
}
