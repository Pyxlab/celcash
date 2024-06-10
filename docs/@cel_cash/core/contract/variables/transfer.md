[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / transfer

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

[packages/core/src/contract/transfer.ts:25](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/contract/transfer.ts#L25)
