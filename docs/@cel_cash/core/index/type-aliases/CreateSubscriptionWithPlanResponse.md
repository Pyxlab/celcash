[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CreateSubscriptionWithPlanResponse

# Type alias: CreateSubscriptionWithPlanResponse

> **CreateSubscriptionWithPlanResponse**: `object`

## Type declaration

### Subscription

> **Subscription**: `object` = `subscriptionSchema`

### Subscription.Customer

> **Customer**: `object`

### Subscription.Customer.Address?

> `optional` **Address**: `object` = `addressSchema`

### Subscription.Customer.Address.city?

> `optional` **city**: `string`

### Subscription.Customer.Address.complement?

> `optional` **complement**: `string`

### Subscription.Customer.Address.neighborhood?

> `optional` **neighborhood**: `string`

### Subscription.Customer.Address.number?

> `optional` **number**: `string`

### Subscription.Customer.Address.state?

> `optional` **state**: `string`

### Subscription.Customer.Address.street?

> `optional` **street**: `string`

### Subscription.Customer.Address.zipCode?

> `optional` **zipCode**: `string`

### Subscription.Customer.createdAt?

> `optional` **createdAt**: `string`

### Subscription.Customer.document?

> `optional` **document**: `string`

### Subscription.Customer.emails?

> `optional` **emails**: `string`[]

### Subscription.Customer.galaPayId?

> `optional` **galaPayId**: `number`

### Subscription.Customer.invoiceHoldIss?

> `optional` **invoiceHoldIss**: `boolean`

### Subscription.Customer.municipalDocument?

> `optional` **municipalDocument**: `string`

### Subscription.Customer.myId?

> `optional` **myId**: `string`

### Subscription.Customer.name?

> `optional` **name**: `string`

### Subscription.Customer.phones?

> `optional` **phones**: `number`[]

### Subscription.Customer.status?

> `optional` **status**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"` = `statusCustomerSchema`

### Subscription.Customer.updatedAt?

> `optional` **updatedAt**: `string`

### Subscription.InvoiceConfig?

> `optional` **InvoiceConfig**: `object`

### Subscription.InvoiceConfig.createOn

> **createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`

### Subscription.InvoiceConfig.description

> **description**: `string`

### Subscription.InvoiceConfig.galaxPaySubAccountId?

> `optional` **galaxPaySubAccountId**: `number`

### Subscription.InvoiceConfig.qtdDaysAfterPay?

> `optional` **qtdDaysAfterPay**: `number`

### Subscription.InvoiceConfig.qtdDaysBeforePayDay?

> `optional` **qtdDaysBeforePayDay**: `number`

### Subscription.InvoiceConfig.type

> **type**: `"onePerTransaction"` \| `"onlyOne"` = `invoiceConfigTypeSchema`

### Subscription.PaymentMethodBoleto?

> `optional` **PaymentMethodBoleto**: `object`

### Subscription.PaymentMethodBoleto.Aggrement?

> `optional` **Aggrement**: `object`

### Subscription.PaymentMethodBoleto.Aggrement.document?

> `optional` **document**: `string`

### Subscription.PaymentMethodBoleto.Aggrement.name?

> `optional` **name**: `string`

### Subscription.PaymentMethodBoleto.deadlineDays?

> `optional` **deadlineDays**: `number`

### Subscription.PaymentMethodBoleto.documentNumber?

> `optional` **documentNumber**: `string`

### Subscription.PaymentMethodBoleto.fine?

> `optional` **fine**: `number`

### Subscription.PaymentMethodBoleto.instructions?

> `optional` **instructions**: `string`

### Subscription.PaymentMethodBoleto.interest?

> `optional` **interest**: `number`

### Subscription.PaymentMethodCreditCard?

> `optional` **PaymentMethodCreditCard**: `object`

### Subscription.PaymentMethodCreditCard.Antifraud?

> `optional` **Antifraud**: `object`

### Subscription.PaymentMethodCreditCard.Antifraud.ip

> **ip**: `string`

### Subscription.PaymentMethodCreditCard.Antifraud.sessionId

> **sessionId**: `string`

### Subscription.PaymentMethodCreditCard.Card

> **Card**: `object`

### Subscription.PaymentMethodCreditCard.Card.Brand?

> `optional` **Brand**: `object` = `brandSchema`

### Subscription.PaymentMethodCreditCard.Card.Brand.id?

> `optional` **id**: `string`

### Subscription.PaymentMethodCreditCard.Card.Brand.maxInstallment?

> `optional` **maxInstallment**: `number`

### Subscription.PaymentMethodCreditCard.Card.Brand.name?

> `optional` **name**: `string`

### Subscription.PaymentMethodCreditCard.Card.Brand.operatorIds?

> `optional` **operatorIds**: `string`

### Subscription.PaymentMethodCreditCard.Card.createdAt?

> `optional` **createdAt**: `string`

### Subscription.PaymentMethodCreditCard.Card.customerGalaxPayId?

> `optional` **customerGalaxPayId**: `number`

### Subscription.PaymentMethodCreditCard.Card.customerMyId?

> `optional` **customerMyId**: `string`

### Subscription.PaymentMethodCreditCard.Card.cvv?

> `optional` **cvv**: `string`

### Subscription.PaymentMethodCreditCard.Card.expiresAt?

> `optional` **expiresAt**: `string`

### Subscription.PaymentMethodCreditCard.Card.galaxPayId?

> `optional` **galaxPayId**: `number`

### Subscription.PaymentMethodCreditCard.Card.holder?

> `optional` **holder**: `string`

### Subscription.PaymentMethodCreditCard.Card.myId?

> `optional` **myId**: `string`

### Subscription.PaymentMethodCreditCard.Card.number?

> `optional` **number**: `string`

### Subscription.PaymentMethodCreditCard.Card.updatedAt?

> `optional` **updatedAt**: `string`

### Subscription.PaymentMethodCreditCard.cardOperatorId?

> `optional` **cardOperatorId**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`

### Subscription.PaymentMethodCreditCard.preAuthorize?

> `optional` **preAuthorize**: `boolean`

### Subscription.PaymentMethodPix?

> `optional` **PaymentMethodPix**: `object`

### Subscription.PaymentMethodPix.Deadline?

> `optional` **Deadline**: `object`

### Subscription.PaymentMethodPix.Deadline.type?

> `optional` **type**: `"days"`

### Subscription.PaymentMethodPix.Deadline.value?

> `optional` **value**: `number`

### Subscription.PaymentMethodPix.fine?

> `optional` **fine**: `number`

### Subscription.PaymentMethodPix.instructions?

> `optional` **instructions**: `string`

### Subscription.PaymentMethodPix.interest?

> `optional` **interest**: `number`

### Subscription.Transactions

> **Transactions**: `object`[]

### Subscription.additionalInfo?

> `optional` **additionalInfo**: `string`

### Subscription.createdAt

> **createdAt**: `string`

### Subscription.firstPayDayDate

> **firstPayDayDate**: `string`

### Subscription.galaxPayId

> **galaxPayId**: `number`

### Subscription.mainPaymentMethodId

> **mainPaymentMethodId**: `"creditcard"` \| `"boleto"` \| `"pix"` = `mainPaymentMethodIdSchema`

### Subscription.myId

> **myId**: `string`

### Subscription.paymentLink?

> `optional` **paymentLink**: `string`

### Subscription.periodicity

> **periodicity**: `"weekly"` \| `"biweekly"` \| `"monthly"` \| `"bimonthly"` \| `"quarterly"` \| `"biannual"` \| `"yearly"` = `periodicitySchema`

### Subscription.planGalaxPayId

> **planGalaxPayId**: `number`

### Subscription.planMyId

> **planMyId**: `string`

### Subscription.quantity

> **quantity**: `number`

### Subscription.status

> **status**: `"active"` \| `"inactive"` \| `"canceled"` \| `"closed"` \| `"stopped"` \| `"waitingPayment"` = `subscriptionStatusSchema`

### Subscription.updatedAt

> **updatedAt**: `string`

### Subscription.value

> **value**: `number`

### type

> **type**: `boolean`

## Source

[packages/core/src/schemas/subscriptions.ts:162](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/schemas/subscriptions.ts#L162)
