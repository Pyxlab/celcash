[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / addTransactionBodySchema

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

[packages/core/src/schemas/transactions.ts:286](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/schemas/transactions.ts#L286)
