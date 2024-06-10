[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / transfer

# Variable: transfer

> `const` **transfer**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### internal

> **internal**: `object`

### internal.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `transferInternalBodySchema`

#### Type declaration

##### companyAccount

> **companyAccount**: `ZodNumber`

##### companyDocument

> **companyDocument**: `ZodString`

##### value

> **value**: `ZodNumber`

### internal.method

> **method**: `"POST"` = `'POST'`

### internal.path

> **path**: `"/internal"` = `'/internal'`

### internal.responses

> **responses**: `object`

### internal.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `transferInternalResponseSchema`

#### Type declaration

##### type

> **type**: `ZodBoolean`

## Source

[packages/core/src/contract/transfer.ts:25](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/contract/transfer.ts#L25)
