[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / listTransactionsParamsSchema

# Variable: listTransactionsParamsSchema

> `const` **listTransactionsParamsSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### chargeGalaxPayIds

> **chargeGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

### chargeMyIds

> **chargeMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

### customerGalaxPayIds

> **customerGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

### customerMyIds

> **customerMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

### limit

> **limit**: `ZodNumber`

### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"payday.asc"`, `"payday.desc"`]\>\>

### payDayFrom

> **payDayFrom**: `ZodOptional`\<`ZodString`\>

### payDayTo

> **payDayTo**: `ZodOptional`\<`ZodString`\>

### startAt

> **startAt**: `ZodNumber`

### status

> **status**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodEnum`\<[`"noSend"`, `"authorized"`, `"captured"`, `"denied"`, `"reversed"`, `"chargeback"`, `"pendingBoleto"`, `"payedBoleto"`, `"notCompensated"`, `"lessValueBoleto"`, `"moreValueBoleto"`, `"paidDuplicityBoleto"`, `"pendingPix"`, `"payedPix"`]\>, `ZodArray`\<`ZodEnum`\<[`"noSend"`, `"authorized"`, `"captured"`, `"denied"`, `"reversed"`, `"chargeback"`, `"pendingBoleto"`, `"payedBoleto"`, `"notCompensated"`, `"lessValueBoleto"`, `"moreValueBoleto"`, `"paidDuplicityBoleto"`, `"pendingPix"`, `"payedPix"`]\>, `"many"`\>]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"` \| (`"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"`)[]\>

### subscriptionGalaxPayIds

> **subscriptionGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

### updateStatusFrom

> **updateStatusFrom**: `ZodOptional`\<`ZodString`\>

### updateStatusTo

> **updateStatusTo**: `ZodOptional`\<`ZodString`\>

## Source

[packages/core/src/schemas/transactions.ts:71](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/transactions.ts#L71)
