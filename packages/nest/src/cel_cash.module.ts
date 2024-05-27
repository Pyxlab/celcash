import { CacheModule } from '@nestjs/cache-manager'
import { type DynamicModule, Module } from '@nestjs/common'
import {
    buildCellCashConfig,
    buildCellCashConfigAsync,
} from './cel_cash.config'
import { CelCashService } from './cel_cash.service'
import type {
    CelCashModuleAsyncOptions,
    CelCashModuleOptions,
} from './interfaces/cel_cash-module-options.interface'

@Module({
    imports: [CacheModule.register()],
    providers: [CelCashService],
    exports: [CelCashService],
})
export class CelCashModule {
    static forRoot(options: CelCashModuleOptions): DynamicModule {
        return {
            global: options.isGlobal,
            module: CelCashModule,
            providers: [buildCellCashConfig(options.celCashServiceOptions)],
        }
    }

    static forRootAsync(options: CelCashModuleAsyncOptions): DynamicModule {
        return {
            imports: options.imports || [],
            global: options.isGlobal,
            module: CelCashModule,
            providers: [buildCellCashConfigAsync(options)],
        }
    }
}
