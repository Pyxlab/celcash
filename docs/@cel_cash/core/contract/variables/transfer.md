[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / transfer

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

[packages/core/src/contract/transfer.ts:25](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/contract/transfer.ts#L25)
