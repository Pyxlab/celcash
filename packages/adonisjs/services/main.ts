/**
 * @cel_cash/adonisjs
 *
 * @license MIT
 * @copyright Walaff Fernandes <walaffonofre@gmail.com>
 */

import app from '@adonisjs/core/services/app'
import { CelCashService } from '../src/client.js'

let client: CelCashService

await app.booted(async () => {
  client = await app.container.make('@cel_cash/adonisjs')
})

export { client as default }
