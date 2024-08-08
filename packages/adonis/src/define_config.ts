/**
 * @cel_cash/adonisjs
 *
 * @license MIT
 * @copyright Walaff Fernandes <walaffonofre@gmail.com>
 */

import { InvalidArgumentsException } from '@adonisjs/core/exceptions'
import type { CelCashConfig } from './types.js'

/**
 * Define lock configuration
 */
export function defineConfig(config: CelCashConfig) {
    if (!config.baseUrl) {
        throw new InvalidArgumentsException(
            'Missing "baseUrl" property for CelCash config',
        )
    }

    if (!config.id) {
        throw new InvalidArgumentsException(
            'Missing "id" property for CelCash config',
        )
    }

    if (!config.hash) {
        throw new InvalidArgumentsException(
            'Missing "hash" property for CelCash config',
        )
    }

    return config
}
