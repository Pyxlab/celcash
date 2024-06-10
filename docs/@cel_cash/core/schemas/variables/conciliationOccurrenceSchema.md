[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / conciliationOccurrenceSchema

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

[packages/core/src/schemas/transactions.ts:175](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/transactions.ts#L175)
