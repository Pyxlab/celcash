[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / simulatarAntecipacaoResponseSchema

# Variable: simulatarAntecipacaoResponseSchema

> `const` **simulatarAntecipacaoResponseSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### Antecipation

> **Antecipation**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### averageDays

> **averageDays**: `ZodNumber`

##### cet

> **cet**: `ZodNumber`

##### companyGalaxPayId

> **companyGalaxPayId**: `ZodNumber`

##### createdAtFrom

> **createdAtFrom**: `ZodString`

##### createdAtTo

> **createdAtTo**: `ZodString`

##### done

> **done**: `ZodEnum`\<[`"F"`, `"T"`]\>

##### galaxPayId

> **galaxPayId**: `ZodNumber`

##### netValue

> **netValue**: `ZodNumber`

##### totalAntecipateTax

> **totalAntecipateTax**: `ZodNumber`

##### totalMdr

> **totalMdr**: `ZodNumber`

##### totalValue

> **totalValue**: `ZodNumber`

##### transactionsGalaxPayIds

> **transactionsGalaxPayIds**: `ZodString`

##### uuid

> **uuid**: `ZodString`

### OperationSummary

> **OperationSummary**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### averageDays

> **averageDays**: `ZodNumber`

##### cet

> **cet**: `ZodNumber`

##### finalTax

> **finalTax**: `ZodNumber`

##### grossTotal

> **grossTotal**: `ZodNumber`

##### mdr

> **mdr**: `ZodNumber`

##### mdrTax

> **mdrTax**: `ZodNumber`

##### netValue

> **netValue**: `ZodNumber`

### Releases

> **Releases**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

### type

> **type**: `ZodBoolean`

## Source

[packages/core/src/schemas/antecipation.ts:134](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/schemas/antecipation.ts#L134)
