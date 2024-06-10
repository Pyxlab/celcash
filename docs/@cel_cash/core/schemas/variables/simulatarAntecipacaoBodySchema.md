[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / simulatarAntecipacaoBodySchema

# Variable: simulatarAntecipacaoBodySchema

> `const` **simulatarAntecipacaoBodySchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### brands

> **brands**: `ZodEffects`\<`ZodArray`\<`ZodEnum`\<[`"discover"`, `"mastercard"`, `"elo"`, `"hipercard"`, `"amex"`, `"visa"`]\>, `"many"`\>, `undefined` \| `string` \| `number`, (`"discover"` \| `"mastercard"` \| `"elo"` \| `"hipercard"` \| `"amex"` \| `"visa"`)[]\>

### transactionGalaxPayIds

> **transactionGalaxPayIds**: `ZodEffects`\<`ZodArray`\<`ZodNumber`, `"many"`\>, `undefined` \| `string` \| `number`, `number`[]\>

### value

> **value**: `ZodNumber`

## Source

[packages/core/src/schemas/antecipation.ts:71](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/antecipation.ts#L71)
