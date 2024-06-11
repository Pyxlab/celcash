[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CreateCustomerResponse

# Type alias: CreateCustomerResponse

> **CreateCustomerResponse**: `object`

## Type declaration

### Customer

> **Customer**: `object` = `customerSchema`

### Customer.Address

> **Address**: `object` = `addressSchema`

### Customer.Address.city

> **city**: `string`

### Customer.Address.complement?

> `optional` **complement**: `string`

### Customer.Address.neighborhood

> **neighborhood**: `string`

### Customer.Address.number

> **number**: `string`

### Customer.Address.state

> **state**: `string`

### Customer.Address.street

> **street**: `string`

### Customer.Address.zipCode

> **zipCode**: `string`

### Customer.createdAt

> **createdAt**: `string`

### Customer.document

> **document**: `string`

### Customer.emails

> **emails**: `string`[]

### Customer.galaPayId

> **galaPayId**: `number`

### Customer.invoiceHoldIss?

> `optional` **invoiceHoldIss**: `boolean`

### Customer.municipalDocument?

> `optional` **municipalDocument**: `string`

### Customer.myId

> **myId**: `string`

### Customer.name

> **name**: `string`

### Customer.phones?

> `optional` **phones**: `number`[]

### Customer.status

> **status**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"` = `statusCustomerSchema`

### Customer.updatedAt

> **updatedAt**: `string`

### type

> **type**: `boolean`

## Source

[packages/core/src/schemas/customers.ts:37](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/schemas/customers.ts#L37)
