[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / cards

# Variable: cards

> `const` **cards**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### create

> **create**: `object`

### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createCardBodySchema`

#### Type declaration

##### cvv

> **cvv**: `ZodString`

##### expiresAt

> **expiresAt**: `ZodString`

##### holder

> **holder**: `ZodString`

##### myId

> **myId**: `ZodString`

##### number

> **number**: `ZodString`

### create.method

> **method**: `"POST"` = `'POST'`

### create.path

> **path**: `"/:customerId/:typeId"` = `'/:customerId/:typeId'`

### create.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### customerId

> **customerId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### create.responses

> **responses**: `object`

### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createCardResponseSchema`

#### Type declaration

##### Card

> **Card**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `cardSchema`

##### type

> **type**: `ZodBoolean`

### delete

> **delete**: `object`

### delete.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### delete.method

> **method**: `"DELETE"` = `'DELETE'`

### delete.path

> **path**: `"/:cardId/:typeId"` = `'/:cardId/:typeId'`

### delete.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### cardId

> **cardId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

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

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listCardsParamsSchema`

#### Type declaration

##### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

##### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

##### customerGalaxPayIds

> **customerGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

##### customerMyIds

> **customerMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

##### limit

> **limit**: `ZodNumber`

##### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`]\>\>

##### startAt

> **startAt**: `ZodNumber`

##### status

> **status**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodEnum`\<...\>, `"many"`\>, `ZodEnum`\<[..., ...]\>]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]\>

### list.responses

> **responses**: `object`

### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listCardsResponseSchema`

#### Type declaration

##### Cards

> **Cards**: `ZodArray`\<`ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

## Source

[packages/core/src/contract/cards.ts:12](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/contract/cards.ts#L12)
