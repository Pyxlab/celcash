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
} from '@cel_cash/core/contracts'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable, Logger, type OnModuleInit } from '@nestjs/common'
import {
    type ApiFetcherArgs,
    initClient,
    initContract,
    tsRestFetchApi,
} from '@ts-rest/core'
import type { Cache } from 'cache-manager'
import { InjectCelCashConfig } from './cel_cash.config'
import type { CelCashServiceOptions } from './interfaces'

@Injectable()
export class CelCashService implements OnModuleInit {
    public static readonly CACHE = {
        ROOT: 'cel_cash',
        ACCESS_TOKEN: 'cel_cash:access_token',
    } as const

    private readonly logger = new Logger(CelCashService.name)

    private readonly config: {
        baseUrl: string
        api: (args: ApiFetcherArgs) => Promise<{
            status: number
            body: unknown
            headers: Headers
        }>
    }

    constructor(
        @InjectCelCashConfig()
        private readonly cellCashServiceOptions: CelCashServiceOptions,
        @Inject(CACHE_MANAGER)
        private readonly cacheManage: Cache,
    ) {
        this.config = {
            baseUrl: this.cellCashServiceOptions.base_url,
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
        }
    }

    public onModuleInit() {
        this.logger.log('Initialized...')
    }

    public get antecipation() {
        return initClient(antecipation, this.config)
    }

    public get cards() {
        return initClient(cards, this.config)
    }

    public get charges() {
        return initClient(charges, this.config)
    }

    public get chargebacks() {
        return initClient(chargebacks, this.config)
    }

    public get companies() {
        return initClient(companies, this.config)
    }

    public get pix() {
        return initClient(pix, this.config)
    }

    public get transfer() {
        return initClient(transfer, this.config)
    }

    public get transactions() {
        return initClient(transactions, this.config)
    }

    // public get webhook() {
    //     return this.client.webhook;
    // }

    public get plans() {
        return initClient(plans, this.config)
    }

    public get customers() {
        return initClient(customers, this.config)
    }

    public get subscriptions() {
        return initClient(subscriptions, this.config)
    }

    private async getAccessToken() {
        const contract = initContract().router(auth)

        const access_token = await this.cacheManage.get<string>(
            CelCashService.CACHE.ACCESS_TOKEN,
        )
        if (!access_token) {
            const client = initClient(contract, {
                baseUrl: this.cellCashServiceOptions.base_url,
                baseHeaders: {},
            })

            const ID = this.cellCashServiceOptions.id
            const HASH = this.cellCashServiceOptions.hash
            const basic = Buffer.from(`${ID}:${HASH}`).toString('base64')

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
                        'antecipation.read',
                        'antecipation.write',
                    ],
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
