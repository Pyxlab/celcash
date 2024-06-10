[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / ListSubscriptionsParams

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

[packages/core/src/schemas/subscriptions.ts:101](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/subscriptions.ts#L101)
