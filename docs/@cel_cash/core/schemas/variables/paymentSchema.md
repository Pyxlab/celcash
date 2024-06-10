[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / paymentSchema

# Variable: paymentSchema

> `const` **paymentSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### createdAt

> **createdAt**: `ZodString`

### desc

> **desc**: `ZodOptional`\<`ZodString`\>

### endToEnd

> **endToEnd**: `ZodString`

### galaxPayId

> **galaxPayId**: `ZodNumber`

### key

> **key**: `ZodString`

### status

> **status**: `ZodEnum`\<[`"efectivated"`, `"error"`, `"confirm"`]\>

### taxValue

> **taxValue**: `ZodNumber`

### value

> **value**: `ZodNumber`

## Source

[packages/core/src/schemas/common.ts:59](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/common.ts#L59)
