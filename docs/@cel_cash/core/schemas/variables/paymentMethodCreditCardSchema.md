[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / paymentMethodCreditCardSchema

# Variable: paymentMethodCreditCardSchema

> `const` **paymentMethodCreditCardSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>\>

### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

## Source

[packages/core/src/schemas/payments.ts:9](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/payments.ts#L9)
