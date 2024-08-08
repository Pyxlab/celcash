/**
 * @cel_cash/adonisjs
 *
 * @license MIT
 * @copyright Walaff Fernandes <walaffonofre@gmail.com>
 */

import ConfigureCommand from '@adonisjs/core/commands/configure'
import { stubsRoot } from './stubs/main.js'

const packagesToInstall = [{ name: '@adonisjs/redis', isDevDependency: false }]

export async function configure(command: ConfigureCommand) {
    let shouldInstallPackages: boolean | undefined = command.parsedFlags.install

    /**
     * Prompt when `install` or `--no-install` flags are
     * not used
     */
    if (shouldInstallPackages === undefined) {
        shouldInstallPackages = await command.prompt.confirm(
            'Do you want to install additional packages required by "@adonisjs/redis"?',
        )
    }

    const codemods = await command.createCodemods()

    /**
     * Publish config file
     */
    await codemods.makeUsingStub(stubsRoot, 'config/cel_cash.stub', {})

    /**
     * Publish provider
     */
    await codemods.updateRcFile(rcFile => {
        rcFile.addProvider('@cel_cash/adonisjs/cel_cash_provider')
    })

    /**
     * Define env variables for cel cash provider
     */
    await codemods.defineEnvVariables({
        CEL_CASH_BASE_URL: 'https://api.sandbox.cel.cash/v2',
        CEL_CASH_ID: 5473,
        CEL_CASH_HASH: '83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe',
    })

    /**
     * Define env variables validation for cel cash provider
     */
    await codemods.defineEnvValidations({
        leadingComment: 'Variables for @cel_cash/adonisjs',
        variables: {
            CEL_CASH_BASE_URL: 'Env.schema.string()',
            CEL_CASH_ID: 'Env.schema.number()',
            CEL_CASH_HASH: 'Env.schema.string()',
        },
    })

    /**
     * Install packages or share instructions to install them
     */
    if (shouldInstallPackages) {
        await codemods.installPackages(packagesToInstall)
    } else {
        await codemods.listPackagesToInstall(packagesToInstall)
    }

    /**
     * Print the instructions to complete the installation
     */
    command.logger.info(
        'Make sure to run "node ace configure @adonisjs/redis" to complete the installation',
    )
}
