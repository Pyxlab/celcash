[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / PixPaymentResponse

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

[packages/core/src/schemas/common.ts:75](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/common.ts#L75)