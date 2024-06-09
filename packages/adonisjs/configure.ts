/**
 * @cel_cash/adonisjs
 *
 * @license MIT
 * @copyright Walaff Fernandes <walaffonofre@gmail.com>
 */

import ConfigureCommand from '@adonisjs/core/commands/configure'
import { stubsRoot } from './stubs/main.js'

export async function configure(command: ConfigureCommand) {
  const codemods = await command.createCodemods()

  /**
   * Publish config file
   */
  await codemods.makeUsingStub(stubsRoot, 'config/cel_cash.stub', {})

  /**
   * Publish provider
   */
  await codemods.updateRcFile((rcFile) => {
    rcFile.addProvider('@cel_cash/adonisjs/cel_cash_provider')
  })

  /**
   * Define env variables for the selected store
   */
  await codemods.defineEnvVariables({
    CEL_CASH_BASE_URL: 'https://api.sandbox.cel.cash/v2',
    CEL_CASH_ID: 5473,
    CEL_CASH_HASH: '83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe',
  })

  /**
   * Define env variables validation for the selected store
   */
  await codemods.defineEnvValidations({
    leadingComment: 'Variables for configuring the lock package',
    variables: {
      CEL_CASH_BASE_URL: 'Env.schema.string()',
      CEL_CASH_ID: 'Env.schema.number()',
      CEL_CASH_HASH: 'Env.schema.string()',
    },
  })
}
