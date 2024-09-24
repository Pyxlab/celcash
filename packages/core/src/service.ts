import { ApiFetcherArgs, initClient } from '@ts-rest/core'
import {
    antecipation,
    auth,
    cards,
    chargebacks,
    charges,
    companies,
    customers,
    pix,
    plans,
    subscriptions,
    transactions,
    transfer,
} from './contract/index.js'
import {
    Configure,
    basicAuthorization,
    celCashRestFetchApi,
} from './utils/index.js'

export interface LoggingInterface {
    debug: (message: string) => void
    error: (message: string) => void
}

export interface CelCashServiceConfig {
    baseUrl: string
    api: (args: ApiFetcherArgs) => Promise<{
        status: number
        body: unknown
        headers: Headers
    }>
}

/**
 * Abstract class representing the CelCash service contract.
 */
export abstract class CelCashServiceContract {
    /**
     * Cache constants for CelCash service.
     */
    static readonly CACHE = {
        ROOT: 'cel_cash',
        ACCESS_TOKEN: 'cel_cash:access_token',
    } as const

    readonly #cel_cash_base_url: string
    readonly #cel_cash_id: string | number
    readonly #cel_cash_hash: string

    readonly #config: CelCashServiceConfig

    /**
     * Constructs a new instance of the CelCashServiceContract class.
     * @param config {@link Configure} - The configuration object for the CelCash service.
     * @param logger {@link LoggingInterface} - The logger object for logging.
     */
    constructor(config: Configure, logger: LoggingInterface) {
        this.#cel_cash_base_url = config.BASE_URL
        this.#cel_cash_id = config.ID
        this.#cel_cash_hash = config.HASH

        this.#config = {
            baseUrl: this.#cel_cash_base_url,
            api: async (args: ApiFetcherArgs) => {
                const accessToken = await this.#getAccessToken()

                args.headers = {
                    ...args.headers,
                    Authorization: `Bearer ${accessToken}`,
                }

                logger.debug(`Requesting ${args.path}`)

                try {
                    const response = await celCashRestFetchApi(args)
                    logger.debug(`Response ${args.path}`)
                    return response
                } catch (error) {
                    logger.error(`Error ${args.path}`)
                    throw error
                }
            },
        }
    }

    /**
     * Retrieves the cached access token.
     * @returns A promise that resolves to the cached access token, or null if not found.
     */
    protected abstract getCachedAccessToken(): Promise<string | null>

    /**
     * Sets the cached access token.
     * @param value - The access token value to be cached.
     * @param expiresIn - The expiration time of the access token.
     * @returns A promise that resolves when the access token is successfully cached.
     */
    protected abstract setCachedAccessToken(
        value: string,
        expiresIn: number,
    ): Promise<void>

    /**
     * Gets the antecipation client.
     * @returns The antecipation client.
     */
    get antecipation() {
        return initClient(antecipation, this.#config)
    }

    /**
     * Gets the cards client.
     * @example
     * ```ts
     * // List cards
     * const cards = await service.cards.list({
     *   query: {
     *     limit: 10,
     *     startAt: 0,
     *   },
     * })
     * ```
     * @example
     * ```ts
     * // Create a card
     * const card = await service.create({
     *  body: {
     *      //...
     *  }
     * })
     * ```
     * @example
     * ```ts
     * // Delete a card
     * const result = await service.delete({
     *       params: {
     *           cardId: 123,
     *           typeId: 'galaxPayId'
     *       }
     *   })
     * ```
     * @returns The cards client.
     */
    get cards() {
        return initClient(cards, this.#config)
    }

    /**
     * Gets the charges client.
     * @returns The charges client.
     */
    get charges() {
        return initClient(charges, this.#config)
    }

    /**
     * Gets the chargebacks client.
     * @returns The chargebacks client.
     */
    get chargebacks() {
        return initClient(chargebacks, this.#config)
    }

    /**
     * Gets the companies client.
     * @returns The companies client.
     */
    get companies() {
        return initClient(companies, this.#config)
    }

    /**
     * Gets the pix client.
     * @returns The pix client.
     */
    get pix() {
        return initClient(pix, this.#config)
    }

    /**
     * Gets the transfer client.
     * @returns The transfer client.
     */
    get transfer() {
        return initClient(transfer, this.#config)
    }

    /**
     * Gets the transactions client.
     * @returns The transactions client.
     */
    get transactions() {
        return initClient(transactions, this.#config)
    }

    /**
     * Gets the plans client.
     * @returns The plans client.
     */
    get plans() {
        return initClient(plans, this.#config)
    }

    /**
     * Gets the customers client.
     * @returns The customers client.
     */
    get customers() {
        return initClient(customers, this.#config)
    }

    /**
     * Gets the subscriptions client.
     * @returns The subscriptions client.
     */
    get subscriptions() {
        return initClient(subscriptions, this.#config)
    }

    /**
     * Retrieves the access token.
     * @returns A promise that resolves to the access token.
     * @throws An error if there is an error retrieving the access token.
     */
    async #getAccessToken() {
        const token = await this.getCachedAccessToken()

        if (!token) {
            const client = initClient(auth, {
                baseUrl: this.#cel_cash_base_url,
                baseHeaders: {},
                api: celCashRestFetchApi,
            })

            const authorization = basicAuthorization({
                ID: this.#cel_cash_id,
                HASH: this.#cel_cash_hash,
            })

            const authorizationCode = await client.token({
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
                        'antecipation.read',
                        'antecipation.write',
                    ],
                },
                headers: {
                    authorization,
                },
            })

            if (authorizationCode.status === 200) {
                await this.setCachedAccessToken(
                    authorizationCode.body.access_token,
                    authorizationCode.body.expires_in,
                )

                return authorizationCode.body.access_token
            }

            throw authorizationCode.body
        }

        return token
    }
}
