import { contract } from '@cel_cash/core'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable, Logger, type OnModuleInit } from '@nestjs/common'
import {
    type ApiFetcherArgs,
    type InitClientReturn,
    initClient,
    tsRestFetchApi,
} from '@ts-rest/core'
import type { Cache } from 'cache-manager'
import { InjectCelCashConfig } from './cel_cash.config'
import type { CelCashServiceOptions } from './interfaces'

type CelCashClient = InitClientReturn<typeof contract, any>

@Injectable()
export class CelCashService implements CelCashClient, OnModuleInit {
    public static readonly CACHE = {
        ROOT: 'cel_cash',
        ACCESS_TOKEN: 'cel_cash:access_token',
    } as const

    readonly #client: CelCashClient

    private readonly logger = new Logger(CelCashService.name)

    constructor(
        @InjectCelCashConfig()
        private readonly cellCashServiceOptions: CelCashServiceOptions,
        @Inject(CACHE_MANAGER)
        private readonly cacheManage: Cache,
    ) {
        this.#client = initClient(contract, {
            baseUrl: this.cellCashServiceOptions.base_url,
            baseHeaders: {},
            api: async (args: ApiFetcherArgs) => {
                const access_token = await this.getAccessToken()

                args.headers = {
                    ...args.headers,
                    Authorization: `Bearer ${access_token}`,
                }

                this.logger.log(`Requesting ${args.path}`)
                return tsRestFetchApi(args)
                    .then(res => {
                        this.logger.log(`Response ${args.path}`)
                        return res
                    })
                    .catch(err => {
                        this.logger.error(`Error ${args.path}`)
                        throw err
                    })
            },
        })
    }
    public onModuleInit() {
        this.logger.log('Initialized...')
    }

    public get antecipation() {
        return this.#client.antecipation
    }

    public get chargebacks() {
        return this.#client.chargebacks
    }

    public get companies() {
        return this.#client.companies
    }

    public get pix() {
        return this.#client.pix
    }

    public get transfer() {
        return this.#client.transfer
    }

    public get token() {
        return this.#client.token
    }

    public get transactions() {
        return this.#client.transactions
    }

    // public get webhook() {
    //     return this.client.webhook;
    // }

    public get plans() {
        return this.#client.plans
    }

    public get customers() {
        return this.#client.customers
    }

    public get subscriptions() {
        return this.#client.subscriptions
    }

    private async getAccessToken() {
        const access_token = await this.cacheManage.get<string>(
            CelCashService.CACHE.ACCESS_TOKEN,
        )
        if (!access_token) {
            const client = initClient(contract, {
                baseUrl: this.cellCashServiceOptions.base_url,
                baseHeaders: {},
            })

            const value = `${this.cellCashServiceOptions.id}:${this.cellCashServiceOptions.hash}`
            const basic = Buffer.from(value).toString('base64')

            const authorization_code = await client.token({
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
                    ].join(' '),
                },
                headers: {
                    authorization: `Basic ${basic}`,
                },
            })

            if (authorization_code.status === 200) {
                await this.cacheManage.set(
                    CelCashService.CACHE.ACCESS_TOKEN,
                    authorization_code.body.access_token,
                    authorization_code.body.expires_in,
                )

                return authorization_code.body.access_token
            }

            throw new Error('Error on get access_token')
        }

        return access_token
    }
}
