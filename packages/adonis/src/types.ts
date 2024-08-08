/**
 * @cel_cash/adonisjs
 *
 * @license MIT
 * @copyright Walaff Fernandes <walaffonofre@gmail.com>
 */

export interface CelCashConfig {
    /**
     * The base URL of the CelCash API
     */
    baseUrl: string

    /**
     * The API key to use for requests
     */
    id: string | number

    /**
     * The API secret to use for requests
     */
    hash: string
}

export interface ResolvedConfig {
    baseUrl: string
    id: string | number
    hash: string
}
