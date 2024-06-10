[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / ListSubscriptionsParams

# Type alias: ListSubscriptionsParams

> **ListSubscriptionsParams**: `object`

## Type declaration

### createdAtFrom?

> `optional` **createdAtFrom**: `string`

### createdAtOrUpdatedAtFrom?

> `optional` **createdAtOrUpdatedAtFrom**: `string`

### createdAtOrUpdatedAtTo?

> `optional` **createdAtOrUpdatedAtTo**: `string`

### createdAtTo?

> `optional` **createdAtTo**: `string`

### customerGalaxPayIds?

> `optional` **customerGalaxPayIds**: `string` \| `string`[]

### customerMyIds?

> `optional` **customerMyIds**: `string` \| `string`[]

### galaxPayIds?

> `optional` **galaxPayIds**: `string` \| `string`[]

### limit

> **limit**: `number`

### myIds?

> `optional` **myIds**: `string` \| `string`[]

### order?

> `optional` **order**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"updatedAt.asc"` \| `"updatedAt.desc"`

### planGalaxPayIds?

> `optional` **planGalaxPayIds**: `string` \| `string`[]

### planMyIds?

> `optional` **planMyIds**: `string` \| `string`[]

### startAt

> **startAt**: `number`

### status?

> `optional` **status**: `"active"` \| `"inactive"` \| `"canceled"` \| `"closed"` \| `"stopped"` \| `"waitingPayment"`

## Source

[packages/core/src/schemas/subscriptions.ts:101](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/schemas/subscriptions.ts#L101)
