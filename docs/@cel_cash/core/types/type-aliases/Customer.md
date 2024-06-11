[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [types](../README.md) / Customer

# Type alias: Customer

> **Customer**: `object`

## Type declaration

### Address

> **Address**: `object` = `addressSchema`

### Address.city

> **city**: `string`

### Address.complement?

> `optional` **complement**: `string`

### Address.neighborhood

> **neighborhood**: `string`

### Address.number

> **number**: `string`

### Address.state

> **state**: `string`

### Address.street

> **street**: `string`

### Address.zipCode

> **zipCode**: `string`

### createdAt

> **createdAt**: `string`

### document

> **document**: `string`

### emails

> **emails**: `string`[]

### galaPayId

> **galaPayId**: `number`

### invoiceHoldIss?

> `optional` **invoiceHoldIss**: `boolean`

### municipalDocument?

> `optional` **municipalDocument**: `string`

### myId

> **myId**: `string`

### name

> **name**: `string`

### phones?

> `optional` **phones**: `number`[]

### status

> **status**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"` = `statusCustomerSchema`

### updatedAt

> **updatedAt**: `string`

## Source

[packages/core/src/types.ts:74](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/types.ts#L74)
