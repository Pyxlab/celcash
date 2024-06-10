[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / CreateCustomerBody

# Type alias: CreateCustomerBody

> **CreateCustomerBody**: `object`

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

### document

> **document**: `string`

### emails

> **emails**: `string`[]

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

## Source

[packages/core/src/schemas/customers.ts:23](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/customers.ts#L23)
