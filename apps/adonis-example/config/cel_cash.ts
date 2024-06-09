import env from '#start/env'
import { defineConfig } from '@cel_cash/adonisjs'

const celCashConfig = defineConfig({
  baseUrl: env.get('CEL_CASH_BASE_URL'),
  id: env.get('CEL_CASH_ID'),
  hash: env.get('CEL_CASH_HASH'),
})

export default celCashConfig
