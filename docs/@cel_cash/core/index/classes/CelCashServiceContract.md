[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CelCashServiceContract

# Class: `abstract` CelCashServiceContract

## Constructors

### new CelCashServiceContract()

> **new CelCashServiceContract**(`config`, `logger`): [`CelCashServiceContract`](CelCashServiceContract.md)

#### Parameters

• **config**: [`Configure`](../../utils/type-aliases/Configure.md)

• **logger**: [`loggingInterface`](../interfaces/loggingInterface.md)

#### Returns

[`CelCashServiceContract`](CelCashServiceContract.md)

#### Source

[packages/core/src/service.ts:57](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L57)

## Properties

### #cel\_cash\_base\_url

> `private` `readonly` **#cel\_cash\_base\_url**: `string`

#### Source

[packages/core/src/service.ts:51](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L51)

***

### #cel\_cash\_hash

> `private` `readonly` **#cel\_cash\_hash**: `string`

#### Source

[packages/core/src/service.ts:53](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L53)

***

### #cel\_cash\_id

> `private` `readonly` **#cel\_cash\_id**: `string` \| `number`

#### Source

[packages/core/src/service.ts:52](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L52)

***

### #config

> `private` `readonly` **#config**: [`CelCashServiceConfig`](../interfaces/CelCashServiceConfig.md)

#### Source

[packages/core/src/service.ts:55](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L55)

***

### CACHE

> `static` `readonly` **CACHE**: `object`

#### ACCESS\_TOKEN

> `readonly` **ACCESS\_TOKEN**: `"cel_cash:access_token"` = `'cel_cash:access_token'`

#### ROOT

> `readonly` **ROOT**: `"cel_cash"` = `'cel_cash'`

#### Source

[packages/core/src/service.ts:46](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L46)

## Accessors

### antecipation

> `get` **antecipation**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:92](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L92)

***

### cards

> `get` **cards**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:96](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L96)

***

### chargebacks

> `get` **chargebacks**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`AppRouter`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`AppRouter`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:104](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L104)

***

### charges

> `get` **charges**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:100](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L100)

***

### companies

> `get` **companies**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:108](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L108)

***

### customers

> `get` **customers**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:132](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L132)

***

### pix

> `get` **pix**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:112](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L112)

***

### plans

> `get` **plans**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:128](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L128)

***

### subscriptions

> `get` **subscriptions**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:136](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L136)

***

### transactions

> `get` **transactions**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:120](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L120)

***

### transfer

> `get` **transfer**(): `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Returns

`RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:116](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L116)

## Methods

### #getAccessToken()

> `private` **#getAccessToken**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Source

[packages/core/src/service.ts:140](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L140)

***

### getCachedAccessToken()

> `protected` `abstract` **getCachedAccessToken**(): `Promise`\<`null` \| `string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Source

[packages/core/src/service.ts:86](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L86)

***

### setCachedAccessToken()

> `protected` `abstract` **setCachedAccessToken**(`value`, `expiresIn`): `Promise`\<`void`\>

#### Parameters

• **value**: `string`

• **expiresIn**: `number`

#### Returns

`Promise`\<`void`\>

#### Source

[packages/core/src/service.ts:87](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/service.ts#L87)
