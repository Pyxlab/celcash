[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / plans

# Variable: plans

> `const` **plans**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### create

> **create**: `object`

### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createPlanBodySchema`

#### Type declaration

##### PlanPrices

> **PlanPrices**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

##### myId

> **myId**: `ZodString`

##### name

> **name**: `ZodString`

##### periodicity

> **periodicity**: `ZodEnum`\<[`"weekly"`, `"biweekly"`, `"monthly"`, `"bimonthly"`, `"quarterly"`, `"biannual"`, `"yearly"`]\> = `periodicitySchema`

##### quantity

> **quantity**: `ZodNumber`

### create.method

> **method**: `"POST"` = `'POST'`

### create.path

> **path**: `"/"` = `'/'`

### create.responses

> **responses**: `object`

### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createPlanResponseSchema`

#### Type declaration

##### Plan

> **Plan**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `planSchema`

##### type

> **type**: `ZodBoolean`

### delete

> **delete**: `object`

### delete.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### delete.method

> **method**: `"DELETE"` = `'DELETE'`

### delete.path

> **path**: `"/:planId/:typeId"` = `'/:planId/:typeId'`

### delete.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### planId

> **planId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### delete.responses

> **responses**: `object`

### delete.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### type

> **type**: `ZodBoolean`

### list

> **list**: `object`

### list.method

> **method**: `"GET"` = `'GET'`

### list.path

> **path**: `"/"` = `'/'`

### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listPlansParamsSchema`

#### Type declaration

##### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

##### createdAtOrUpdatedAtFrom

> **createdAtOrUpdatedAtFrom**: `ZodOptional`\<`ZodString`\>

##### createdAtOrUpdatedAtTo

> **createdAtOrUpdatedAtTo**: `ZodOptional`\<`ZodString`\>

##### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

##### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### limit

> **limit**: `ZodNumber`

##### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"updatedAt.asc"`, `"updatedAt.desc"`]\>\>

##### startAt

> **startAt**: `ZodNumber`

##### status

> **status**: `ZodOptional`\<`ZodEnum`\<[`"active"`, `"inactive"`]\>\>

### list.responses

> **responses**: `object`

### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listPlansResponseSchema`

#### Type declaration

##### Plans

> **Plans**: `ZodArray`\<`ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

### update

> **update**: `object`

### update.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `updatePlanBodySchema`

#### Type declaration

##### PlanPrices

> **PlanPrices**: `ZodOptional`\<`ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>\>

##### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodOptional`\<`ZodString`\>\>

##### myId

> **myId**: `ZodOptional`\<`ZodString`\>

##### name

> **name**: `ZodOptional`\<`ZodString`\>

##### periodicity

> **periodicity**: `ZodOptional`\<`ZodEnum`\<[`"weekly"`, `"biweekly"`, `"monthly"`, `"bimonthly"`, `"quarterly"`, `"biannual"`, `"yearly"`]\>\> = `periodicitySchema`

##### quantity

> **quantity**: `ZodOptional`\<`ZodNumber`\>

### update.method

> **method**: `"PUT"` = `'PUT'`

### update.path

> **path**: `"/:planId/:typeId"` = `'/:planId/:typeId'`

### update.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### planId

> **planId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### update.responses

> **responses**: `object`

### update.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createPlanResponseSchema`

#### Type declaration

##### Plan

> **Plan**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `planSchema`

##### type

> **type**: `ZodBoolean`

## Source

[packages/core/src/contract/plans.ts:13](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/contract/plans.ts#L13)
