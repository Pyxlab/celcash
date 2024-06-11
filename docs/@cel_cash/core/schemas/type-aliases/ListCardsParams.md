[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / ListCardsParams

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

[packages/core/src/schemas/cards.ts:34](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/schemas/cards.ts#L34)
