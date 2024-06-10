[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / invoiceSchema

# Variable: invoiceSchema

> `const` **invoiceSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### description

> **description**: `ZodString`

### number

> **number**: `ZodString`

### pdf

> **pdf**: `ZodString`

### status

> **status**: `ZodEnum`\<[`"pending"`, `"emitted"`, `"rejected"`, `"error"`, `"cancel"`, `"cancelOutSystem"`]\> = `invoiceStatusSchema`

### statusDate

> **statusDate**: `ZodString`

### statusDescription

> **statusDescription**: `ZodString`

### xml

> **xml**: `ZodString`

## Source

[packages/core/src/schemas/common.ts:119](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/common.ts#L119)
