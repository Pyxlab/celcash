/**
 * @cel_cash/adonisjs
 *
 * @license MIT
 * @copyright Walaff Fernandes <walaffonofre@gmail.com>
 */

import type { LoggerService } from '@adonisjs/core/types'
import type { ResolvedConfig } from './types.js'
import type { RedisService } from '@adonisjs/redis/types'
import { CelCashServiceContract } from '@cel_cash/core'

export class CelCashService extends CelCashServiceContract {
  readonly #redis: RedisService

  protected async getCachedAccessToken() {
    return this.#redis.get(CelCashService.CACHE.ACCESS_TOKEN)
  }

  protected async setCachedAccessToken(value: string, expiresIn: number): Promise<void> {
    await this.#redis.set(CelCashService.CACHE.ACCESS_TOKEN, value, 'PX', expiresIn)
  }

  constructor(config: ResolvedConfig, logger: LoggerService, redis: RedisService) {
    super(
      {
        BASE_URL: config.baseUrl,
        ID: config.id,
        HASH: config.hash,
      },
      logger
    )

    this.#redis = redis
  }
}
