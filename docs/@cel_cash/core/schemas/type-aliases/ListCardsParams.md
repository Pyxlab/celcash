[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / ListCardsParams

# Type alias: ListCardsParams

> **ListCardsParams**: `object`

## Type declaration

### createdAtFrom?

> `optional` **createdAtFrom**: `string`

### createdAtTo?

> `optional` **createdAtTo**: `string`

### customerGalaxPayIds?

> `optional` **customerGalaxPayIds**: `number` \| `number`[]

### customerMyIds?

> `optional` **customerMyIds**: `string` \| `string`[]

### galaxPayIds?

> `optional` **galaxPayIds**: `number` \| `number`[]

### limit

> **limit**: `number`

### myIds?

> `optional` **myIds**: `string` \| `string`[]

### order?

> `optional` **order**: `"createdAt.asc"` \| `"createdAt.desc"`

### startAt

> **startAt**: `number`

### status?

> `optional` **status**: `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]

## Source

[packages/core/src/schemas/cards.ts:34](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/cards.ts#L34)
