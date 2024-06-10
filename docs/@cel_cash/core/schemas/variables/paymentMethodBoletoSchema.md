[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / paymentMethodBoletoSchema

# Variable: paymentMethodBoletoSchema

> `const` **paymentMethodBoletoSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### Aggrement

> **Aggrement**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

### deadlineDays

> **deadlineDays**: `ZodOptional`\<`ZodNumber`\>

### documentNumber

> **documentNumber**: `ZodOptional`\<`ZodString`\>

### fine

> **fine**: `ZodOptional`\<`ZodNumber`\>

### instructions

> **instructions**: `ZodOptional`\<`ZodString`\>

### interest

> **interest**: `ZodOptional`\<`ZodNumber`\>

## Source

[packages/core/src/schemas/payments.ts:29](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/payments.ts#L29)
