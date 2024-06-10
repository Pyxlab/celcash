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
} from './contract'
import type {
    Antecipation,
    Cards,
    Chargebacks,
    Charges,
    Companies,
    Customers,
    Pix,
    Plans,
    Subscriptions,
    Transactions,
    Transfer,
} from './contract'
import { Configure, celCashRestFetchApi, basicAuthorization } from './utils'

export interface loggingInterface {
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

export abstract class CelCashServiceContract {
    static readonly CACHE = {
        ROOT: 'cel_cash',
        ACCESS_TOKEN: 'cel_cash:access_token',
    } as const

    readonly #cel_cash_base_url: string
    readonly #cel_cash_id: string | number
    readonly #cel_cash_hash: string

    readonly #config: CelCashServiceConfig

    constructor(config: Configure, logger: loggingInterface) {
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

    protected abstract getCachedAccessToken(): Promise<string | null>
    protected abstract setCachedAccessToken(
        value: string,
        expiresIn: number,
    ): Promise<void>

    get antecipation(): Antecipation {
        return initClient(antecipation, this.#config)
    }

    get cards(): Cards {
        return initClient(cards, this.#config)
    }

    get charges(): Charges {
        return initClient(charges, this.#config)
    }

    get chargebacks(): Chargebacks {
        return initClient(chargebacks, this.#config)
    }

    get companies(): Companies {
        return initClient(companies, this.#config)
    }

    get pix(): Pix {
        return initClient(pix, this.#config)
    }

    get transfer(): Transfer {
        return initClient(transfer, this.#config)
    }

    get transactions(): Transactions {
        return initClient(transactions, this.#config)
    }

    // public get webhook() {
    //     return initClient()
    // }

    get plans(): Plans {
        return initClient(plans, this.#config)
    }

    get customers(): Customers {
        return initClient(customers, this.#config)
    }

    get subscriptions(): Subscriptions {
        return initClient(subscriptions, this.#config)
    }

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

            throw new Error('Error on get access_token')
        }

        return token
    }
}
