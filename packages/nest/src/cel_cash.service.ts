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
    AppRouter,
    type InitClientReturn,
    initClient,
    initContract,
    tsRestFetchApi,
} from '@ts-rest/core'
import type { Cache } from 'cache-manager'
import { InjectCelCashConfig } from './cel_cash.config'
import type { CelCashServiceOptions } from './interfaces'

const c = initContract()

const contract = initContract().router({
    antecipation,
    cards,
    chargebacks,
    charges,
    companies,
    customers,
    plans,
    subscriptions,
    transactions,
    pix,
    transfer,
})

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
        const contract = c.router(antecipation)
        return initClient(contract, this.config)
    }

    public get cards() {
        const contract = c.router(cards)
        return initClient(contract, this.config)
    }

    public get charges() {
        const contract = c.router(charges)
        return initClient(contract, this.config)
    }

    public get chargebacks() {
        const contract = c.router(chargebacks)
        return initClient(contract, this.config)
    }

    public get companies() {
        const contract = c.router(companies)
        return initClient(contract, this.config)
    }

    public get pix() {
        const contract = c.router(pix)
        return initClient(contract, this.config)
    }

    public get transfer() {
        const contract = c.router(transfer)
        return initClient(contract, this.config)
    }

    public get transactions() {
        const contract = c.router(transactions)
        return initClient(contract, this.config)
    }

    // public get webhook() {
    //     return this.client.webhook;
    // }

    public get plans() {
        const contract = c.router(plans)
        return initClient(contract, this.config)
    }

    public get customers() {
        const contract = c.router(customers)
        return initClient(contract, this.config)
    }

    public get subscriptions() {
        const contract = c.router(subscriptions)
        return initClient(contract, this.config)
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
