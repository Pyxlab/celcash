[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [types](../README.md) / PaymentMethodCreditCard

# Type alias: PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `object`

## Type declaration

### Antifraud?

> `optional` **Antifraud**: `object`

### Antifraud.ip

> **ip**: `string`

### Antifraud.sessionId

> **sessionId**: `string`

### Card

> **Card**: `object`

### Card.Brand?

> `optional` **Brand**: `object` = `brandSchema`

### Card.Brand.id?

> `optional` **id**: `string`

### Card.Brand.maxInstallment?

> `optional` **maxInstallment**: `number`

### Card.Brand.name?

> `optional` **name**: `string`

### Card.Brand.operatorIds?

> `optional` **operatorIds**: `string`

### Card.createdAt?

> `optional` **createdAt**: `string`

### Card.customerGalaxPayId?

> `optional` **customerGalaxPayId**: `number`

### Card.customerMyId?

> `optional` **customerMyId**: `string`

### Card.cvv?

> `optional` **cvv**: `string`

### Card.expiresAt?

> `optional` **expiresAt**: `string`

### Card.galaxPayId?

> `optional` **galaxPayId**: `number`

### Card.holder?

> `optional` **holder**: `string`

### Card.myId?

> `optional` **myId**: `string`

### Card.number?

> `optional` **number**: `string`

### Card.updatedAt?

> `optional` **updatedAt**: `string`

### cardOperatorId?

> `optional` **cardOperatorId**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`

### preAuthorize?

> `optional` **preAuthorize**: `boolean`

## Source

[packages/core/src/types.ts:84](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/types.ts#L84)
