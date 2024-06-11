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

[packages/core/src/schemas/common.ts:75](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/schemas/common.ts#L75)
