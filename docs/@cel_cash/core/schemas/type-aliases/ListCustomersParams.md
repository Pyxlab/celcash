[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / ListCustomersParams

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

[packages/core/src/schemas/customers.ts:77](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/customers.ts#L77)
