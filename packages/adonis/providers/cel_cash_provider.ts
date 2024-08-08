/**
 * @cel_cash/adonisjs
 *
 * @license MIT
 * @copyright Walaff Fernandes <walaffonofre@gmail.com>
 */

/// <reference types="@adonisjs/redis/redis_provider" />

import type { ApplicationService } from '@adonisjs/core/types'
import type { CelCashService } from '../src/client.js'
import type { CelCashConfig } from '../src/types.js'

declare module '@adonisjs/core/types' {
    export interface ContainerBindings {
        '@cel_cash/adonisjs': CelCashService
    }
}

export default class CelCashProvider {
    constructor(protected app: ApplicationService) {}

    register() {
        this.app.container.singleton('@cel_cash/adonisjs', async () => {
            const { CelCashService } = await import('../src/client.js')
            const config = this.app.config.get<CelCashConfig>('cel_cash')
            const logger = await this.app.container.make('logger')
            const redis = await this.app.container.make('redis')
            const service = new CelCashService(config, logger, redis)
            return service
        })
    }
}
