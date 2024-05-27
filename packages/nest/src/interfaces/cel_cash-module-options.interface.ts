import { type ModuleMetadata, Type } from '@nestjs/common'

export interface CelCashModuleOptions {
    /**
     * If "true", registers `GalaxPayModule` as a global module.
     * See: https://docs.nestjs.com/modules#global-modules
     */
    isGlobal: boolean

    celCashServiceOptions: CelCashServiceOptions
}

export interface CelCashServiceOptions {
    /**
     * See at https://docs-celcash.celcoin.com.br the current url base
     */
    base_url: string

    /**
     * Refers to Galax ID for authentication using OAuth 2.0 protocol.
     */
    id: number

    /**
     * Refers to Galax hash for authentication using OAuth 2.0 protocol.
     */
    hash: string
}

export interface CelCashOptionsFactory {
    createCelCashOptions():
        | Promise<CelCashServiceOptions>
        | CelCashServiceOptions
}

export type CelcashUseFactory = (
    ...args: any[]
) => Promise<CelCashServiceOptions> | CelCashServiceOptions

export interface CelCashModuleAsyncOptions
    extends Pick<ModuleMetadata, 'imports'> {
    isGlobal?: boolean
    useFactory: CelcashUseFactory
    inject?: any[]
}
