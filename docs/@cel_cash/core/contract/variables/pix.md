[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / pix

# Variable: pix

> `const` **pix**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### payment

> **payment**: `object`

### payment.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `pixPaymentBodySchema`

#### Type declaration

##### desc

> **desc**: `ZodOptional`\<`ZodString`\>

##### key

> **key**: `ZodString`

##### type

> **type**: `ZodEnum`\<[`"cpf"`, `"cnpj"`, `"email"`, `"mobilePhone"`, `"random"`]\>

##### value

> **value**: `ZodNumber`

### payment.method

> **method**: `"POST"` = `'POST'`

### payment.path

> **path**: `"/payment"` = `'/payment'`

### payment.responses

> **responses**: `object`

### payment.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `pixPaymentResponseSchema`

#### Type declaration

##### Payment

> **Payment**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentSchema`

###### Type declaration

###### createdAt

> **createdAt**: `ZodString`

###### desc

> **desc**: `ZodOptional`\<`ZodString`\>

###### endToEnd

> **endToEnd**: `ZodString`

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### key

> **key**: `ZodString`

###### status

> **status**: `ZodEnum`\<[`"efectivated"`, `"error"`, `"confirm"`]\>

###### taxValue

> **taxValue**: `ZodNumber`

###### value

> **value**: `ZodNumber`

##### type

> **type**: `ZodBoolean`

## Source

[packages/core/src/contract/transfer.ts:11](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/contract/transfer.ts#L11)
