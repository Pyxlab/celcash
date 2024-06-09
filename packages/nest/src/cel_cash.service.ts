import { CelCashServiceContract } from '@cel_cash/core'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable, Logger, type OnModuleInit } from '@nestjs/common'
import type { Cache } from 'cache-manager'
import { InjectCelCashConfig } from './cel_cash.config'
import type { CelCashServiceOptions } from './interfaces'

@Injectable()
export class CelCashService
    extends CelCashServiceContract
    implements OnModuleInit
{
    private readonly logger: Logger

    constructor(
        @InjectCelCashConfig()
        cellCashServiceOptions: CelCashServiceOptions,
        @Inject(CACHE_MANAGER)
        private readonly cacheManage: Cache,
    ) {
        const logger = new Logger(CelCashService.name)

        super(
            {
                BASE_URL: cellCashServiceOptions.base_url,
                ID: cellCashServiceOptions.id,
                HASH: cellCashServiceOptions.hash,
            },
            logger,
        )

        this.logger = logger
    }

    public onModuleInit() {
        this.logger.log('Initialized...')
    }

    protected async getCachedAccessToken() {
        const token = await this.cacheManage.get<string>(
            CelCashService.CACHE.ACCESS_TOKEN,
        )
        return !!token ? token : null
    }

    protected async setCachedAccessToken(
        value: string,
        expiresIn: number,
    ): Promise<void> {
        await this.cacheManage.set(CelCashService.CACHE.ACCESS_TOKEN, value, {
            ttl: expiresIn,
        })
    }
}
