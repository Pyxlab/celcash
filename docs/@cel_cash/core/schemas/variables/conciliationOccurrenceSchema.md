[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / conciliationOccurrenceSchema

# Variable: conciliationOccurrenceSchema

> `const` **conciliationOccurrenceSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### account

> **account**: `ZodString`

### agency

> **agency**: `ZodString`

### bankName

> **bankName**: `ZodString`

### bankNumber

> **bankNumber**: `ZodNumber`

### depositDate

> **depositDate**: `ZodString`

### liquidValue

> **liquidValue**: `ZodNumber`

### taxPercent

> **taxPercent**: `ZodNumber`

### taxValue

> **taxValue**: `ZodNumber`

### type

> **type**: `ZodEnum`\<[`"payment"`, `"canceled"`]\> = `conciliationOccurrenceStatusSchema`

## Source

[packages/core/src/schemas/transactions.ts:175](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/schemas/transactions.ts#L175)
