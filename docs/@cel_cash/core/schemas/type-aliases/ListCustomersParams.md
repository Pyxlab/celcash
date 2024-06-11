[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / ListCustomersParams

# Type alias: ListCustomersParams

> **ListCustomersParams**: `object`

## Type declaration

### createdAtFrom?

> `optional` **createdAtFrom**: `string`

### createdAtTo?

> `optional` **createdAtTo**: `string`

### createdOrUpdatedFrom?

> `optional` **createdOrUpdatedFrom**: `string`

### createdOrUpdatedTo?

> `optional` **createdOrUpdatedTo**: `string`

### documents?

> `optional` **documents**: `string` \| `string`[]

### emails?

> `optional` **emails**: `string` \| `string`[]

### galaxPayIds?

> `optional` **galaxPayIds**: `number` \| `number`[]

### limit

> **limit**: `number`

### myIds?

> `optional` **myIds**: `string` \| `string`[]

### order?

> `optional` **order**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"updatedAt.asc"` \| `"updatedAt.desc"`

### startAt?

> `optional` **startAt**: `number`

### status?

> `optional` **status**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"`

## Source

[packages/core/src/schemas/customers.ts:77](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/schemas/customers.ts#L77)
