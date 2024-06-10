[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CreatePlanResponse

# Type alias: CreatePlanResponse

> **CreatePlanResponse**: `object`

## Type declaration

### Plan

> **Plan**: `object` = `planSchema`

### Plan.PlanPrices

> **PlanPrices**: `object`[]

### Plan.additionalInfo?

> `optional` **additionalInfo**: `string`

### Plan.galaxPayId

> **galaxPayId**: `number`

### Plan.myId

> **myId**: `string`

### Plan.name

> **name**: `string`

### Plan.periodicity

> **periodicity**: `"weekly"` \| `"biweekly"` \| `"monthly"` \| `"bimonthly"` \| `"quarterly"` \| `"biannual"` \| `"yearly"` = `periodicitySchema`

### Plan.quantity

> **quantity**: `number`

### type

> **type**: `boolean`

## Source

[packages/core/src/schemas/plans.ts:69](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/schemas/plans.ts#L69)
