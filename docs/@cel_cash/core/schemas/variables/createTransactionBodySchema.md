[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / createTransactionBodySchema

# Variable: createTransactionBodySchema

> `const` **createTransactionBodySchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### InvoiceConfig

> **InvoiceConfig**: `ZodOptional`\<`ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>\>

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

### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

### myId

> **myId**: `ZodString`

### payday

> **payday**: `ZodString`

### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

### value

> **value**: `ZodNumber`

## Source

[packages/core/src/schemas/transactions.ts:232](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/schemas/transactions.ts#L232)
