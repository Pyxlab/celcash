[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / UpdateSubscriptionPaymentBody

# Type alias: UpdateSubscriptionPaymentBody

> **UpdateSubscriptionPaymentBody**: `object`

## Type declaration

### PaymentMethodBoleto?

> `optional` **PaymentMethodBoleto**: `object`

### PaymentMethodBoleto.Aggrement?

> `optional` **Aggrement**: `object`

### PaymentMethodBoleto.Aggrement.document?

> `optional` **document**: `string`

### PaymentMethodBoleto.Aggrement.name?

> `optional` **name**: `string`

### PaymentMethodBoleto.deadlineDays?

> `optional` **deadlineDays**: `number`

### PaymentMethodBoleto.documentNumber?

> `optional` **documentNumber**: `string`

### PaymentMethodBoleto.fine?

> `optional` **fine**: `number`

### PaymentMethodBoleto.instructions?

> `optional` **instructions**: `string`

### PaymentMethodBoleto.interest?

> `optional` **interest**: `number`

### PaymentMethodCreditCard?

> `optional` **PaymentMethodCreditCard**: `object`

### PaymentMethodCreditCard.Antifraud?

> `optional` **Antifraud**: `object`

### PaymentMethodCreditCard.Antifraud.ip

> **ip**: `string`

### PaymentMethodCreditCard.Antifraud.sessionId

> **sessionId**: `string`

### PaymentMethodCreditCard.Card

> **Card**: `object`

### PaymentMethodCreditCard.Card.Brand?

> `optional` **Brand**: `object` = `brandSchema`

### PaymentMethodCreditCard.Card.Brand.id?

> `optional` **id**: `string`

### PaymentMethodCreditCard.Card.Brand.maxInstallment?

> `optional` **maxInstallment**: `number`

### PaymentMethodCreditCard.Card.Brand.name?

> `optional` **name**: `string`

### PaymentMethodCreditCard.Card.Brand.operatorIds?

> `optional` **operatorIds**: `string`

### PaymentMethodCreditCard.Card.createdAt?

> `optional` **createdAt**: `string`

### PaymentMethodCreditCard.Card.customerGalaxPayId?

> `optional` **customerGalaxPayId**: `number`

### PaymentMethodCreditCard.Card.customerMyId?

> `optional` **customerMyId**: `string`

### PaymentMethodCreditCard.Card.cvv?

> `optional` **cvv**: `string`

### PaymentMethodCreditCard.Card.expiresAt?

> `optional` **expiresAt**: `string`

### PaymentMethodCreditCard.Card.galaxPayId?

> `optional` **galaxPayId**: `number`

### PaymentMethodCreditCard.Card.holder?

> `optional` **holder**: `string`

### PaymentMethodCreditCard.Card.myId?

> `optional` **myId**: `string`

### PaymentMethodCreditCard.Card.number?

> `optional` **number**: `string`

### PaymentMethodCreditCard.Card.updatedAt?

> `optional` **updatedAt**: `string`

### PaymentMethodCreditCard.cardOperatorId?

> `optional` **cardOperatorId**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`

### PaymentMethodCreditCard.preAuthorize?

> `optional` **preAuthorize**: `boolean`

### PaymentMethodPix?

> `optional` **PaymentMethodPix**: `object`

### PaymentMethodPix.Deadline?

> `optional` **Deadline**: `object`

### PaymentMethodPix.Deadline.type?

> `optional` **type**: `"days"`

### PaymentMethodPix.Deadline.value?

> `optional` **value**: `number`

### PaymentMethodPix.fine?

> `optional` **fine**: `number`

### PaymentMethodPix.instructions?

> `optional` **instructions**: `string`

### PaymentMethodPix.interest?

> `optional` **interest**: `number`

### Split?

> `optional` **Split**: `object`

### Split.billGalaxyPayId

> **billGalaxyPayId**: `number`

### Split.companyGalaxyPayId

> **companyGalaxyPayId**: `number`

### Split.galaxyPayId

> **galaxyPayId**: `number`

### Split.groupGalaxyPayId

> **groupGalaxyPayId**: `number`

### Split.paymentMethod

> **paymentMethod**: `string`

### Split.type

> **type**: `"percent"` \| `"fixed"`

### Split.value

> **value**: `number`

### mainPaymentMethodId

> **mainPaymentMethodId**: `"creditcard"` \| `"boleto"` \| `"pix"` = `mainPaymentMethodIdSchema`

### value

> **value**: `number`

## Source

[packages/core/src/schemas/subscriptions.ts:228](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/schemas/subscriptions.ts#L228)
