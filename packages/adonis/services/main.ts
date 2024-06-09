/**
 * @cel_cash/adonisjs
 *
 * @license MIT
 * @copyright Walaff Fernandes <walaffonofre@gmail.com>
 */

import app from '@adonisjs/core/services/app'
import { CelCashService } from '../src/client.js'

let celcash: CelCashService

await app.booted(async () => {
  celcash = await app.container.make('@cel_cash/adonisjs')
})

export { celcash as default }
