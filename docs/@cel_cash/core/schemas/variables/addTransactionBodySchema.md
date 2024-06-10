[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / addTransactionBodySchema

# Variable: addTransactionBodySchema

> `const` **addTransactionBodySchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `invoiceConfigSchema`

### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

#### Type declaration

##### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

##### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

##### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>\>

##### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

### myId

> **myId**: `ZodString`

### payday

> **payday**: `ZodOptional`\<`ZodString`\>

### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

### value

> **value**: `ZodOptional`\<`ZodNumber`\>

## Source

[packages/core/src/schemas/transactions.ts:286](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/transactions.ts#L286)