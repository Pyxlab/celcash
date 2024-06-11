[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CreateSubscriptionManualBody

# Type alias: CreateSubscriptionManualBody

> **CreateSubscriptionManualBody**: `object`

## Type declaration

### Customer

> **Customer**: `object`

### Customer.Address?

> `optional` **Address**: `object` = `addressSchema`

### Customer.Address.city?

> `optional` **city**: `string`

### Customer.Address.complement?

> `optional` **complement**: `string`

### Customer.Address.neighborhood?

> `optional` **neighborhood**: `string`

### Customer.Address.number?

> `optional` **number**: `string`

### Customer.Address.state?

> `optional` **state**: `string`

### Customer.Address.street?

> `optional` **street**: `string`

### Customer.Address.zipCode?

> `optional` **zipCode**: `string`

### Customer.createdAt?

> `optional` **createdAt**: `string`

### Customer.document?

> `optional` **document**: `string`

### Customer.emails?

> `optional` **emails**: `string`[]

### Customer.galaPayId?

> `optional` **galaPayId**: `number`

### Customer.invoiceHoldIss?

> `optional` **invoiceHoldIss**: `boolean`

### Customer.municipalDocument?

> `optional` **municipalDocument**: `string`

### Customer.myId?

> `optional` **myId**: `string`

### Customer.name?

> `optional` **name**: `string`

### Customer.phones?

> `optional` **phones**: `number`[]

### Customer.status?

> `optional` **status**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"` = `statusCustomerSchema`

### Customer.updatedAt?

> `optional` **updatedAt**: `string`

### InvoiceConfig?

> `optional` **InvoiceConfig**: `object`

### InvoiceConfig.createOn

> **createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`

### InvoiceConfig.description

> **description**: `string`

### InvoiceConfig.galaxPaySubAccountId?

> `optional` **galaxPaySubAccountId**: `number`

### InvoiceConfig.qtdDaysAfterPay?

> `optional` **qtdDaysAfterPay**: `number`

### InvoiceConfig.qtdDaysBeforePayDay?

> `optional` **qtdDaysBeforePayDay**: `number`

### InvoiceConfig.type

> **type**: `"onePerTransaction"` \| `"onlyOne"` = `invoiceConfigTypeSchema`

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

### additionalInfo?

> `optional` **additionalInfo**: `string`

### mainPaymentMethodId

> **mainPaymentMethodId**: `"creditcard"` \| `"boleto"` \| `"pix"` = `mainPaymentMethodIdSchema`

### myId

> **myId**: `string`

## Source

[packages/core/src/schemas/subscriptions.ts:201](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/schemas/subscriptions.ts#L201)
