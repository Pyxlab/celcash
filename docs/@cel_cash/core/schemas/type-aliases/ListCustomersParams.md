[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / ListCustomersParams

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

[packages/core/src/schemas/customers.ts:77](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/schemas/customers.ts#L77)
