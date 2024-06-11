[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CreatePlanResponse

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

[packages/core/src/schemas/plans.ts:69](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/schemas/plans.ts#L69)
