import { Configure } from '@cel_cash/core/utils'
import { CelCashClient } from './client'

export function initCelCashClient(config: Configure): CelCashClient {
    return new CelCashClient(config)
}
