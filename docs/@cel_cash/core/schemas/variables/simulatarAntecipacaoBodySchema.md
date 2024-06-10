[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / simulatarAntecipacaoBodySchema

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

[packages/core/src/schemas/antecipation.ts:71](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/schemas/antecipation.ts#L71)
