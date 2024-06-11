[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / PixPaymentResponse

# Type alias: PixPaymentResponse

> **PixPaymentResponse**: `object`

## Type declaration

### Payment

> **Payment**: `object` = `paymentSchema`

### Payment.createdAt

> **createdAt**: `string`

### Payment.desc?

> `optional` **desc**: `string`

### Payment.endToEnd

> **endToEnd**: `string`

### Payment.galaxPayId

> **galaxPayId**: `number`

### Payment.key

> **key**: `string`

### Payment.status

> **status**: `"efectivated"` \| `"error"` \| `"confirm"`

### Payment.taxValue

> **taxValue**: `number`

### Payment.value

> **value**: `number`

### type

> **type**: `boolean`

## Source

[packages/core/src/schemas/common.ts:75](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/schemas/common.ts#L75)
