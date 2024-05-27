import {
    type FactoryProvider,
    Inject,
    type ValueProvider,
} from '@nestjs/common'
import type {
    CelCashModuleAsyncOptions,
    CelCashServiceOptions,
} from './interfaces'

const CELL_CASH_CONFIG = Symbol('CELL_CASH_CONFIG')

export const InjectCelCashConfig = () => Inject(CELL_CASH_CONFIG)

export const buildCellCashConfig = (
    config: CelCashServiceOptions,
): ValueProvider<CelCashServiceOptions> => {
    return {
        provide: CELL_CASH_CONFIG,
        useValue: config,
    }
}

export const buildCellCashConfigAsync = (
    options: CelCashModuleAsyncOptions,
): FactoryProvider<CelCashServiceOptions> => {
    return {
        provide: CELL_CASH_CONFIG,
        useFactory: options.useFactory,
        inject: options.inject || [],
    }
}
