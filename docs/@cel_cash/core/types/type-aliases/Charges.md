[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [types](../README.md) / Charges

# Type alias: Charges

> **Charges**: `object`

## Type declaration

### Contract

> **Contract**: `object` = `contractSchema`

### Contract.acceptedAt

> **acceptedAt**: `string`

### Contract.document

> **document**: `string`

### Contract.ip

> **ip**: `string`

### Contract.name

> **name**: `string`

### Contract.pdf

> **pdf**: `string`

### Customer

> **Customer**: `object` = `customerSchema`

### Customer.Address

> **Address**: `object` = `addressSchema`

### Customer.Address.city

> **city**: `string`

### Customer.Address.complement?

> `optional` **complement**: `string`

### Customer.Address.neighborhood

> **neighborhood**: `string`

### Customer.Address.number

> **number**: `string`

### Customer.Address.state

> **state**: `string`

### Customer.Address.street

> **street**: `string`

### Customer.Address.zipCode

> **zipCode**: `string`

### Customer.createdAt

> **createdAt**: `string`

### Customer.document

> **document**: `string`

### Customer.emails

> **emails**: `string`[]

### Customer.galaPayId

> **galaPayId**: `number`

### Customer.invoiceHoldIss?

> `optional` **invoiceHoldIss**: `boolean`

### Customer.municipalDocument?

> `optional` **municipalDocument**: `string`

### Customer.myId

> **myId**: `string`

### Customer.name

> **name**: `string`

### Customer.phones?

> `optional` **phones**: `number`[]

### Customer.status

> **status**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"` = `statusCustomerSchema`

### Customer.updatedAt

> **updatedAt**: `string`

### ExtraFields

> **ExtraFields**: `object`[]

### InvoiceConfig

> **InvoiceConfig**: `object` = `invoiceConfigSchema`

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

### PaymentMethodBoleto

> **PaymentMethodBoleto**: `object` = `paymentMethodBoletoSchema`

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

### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `object` = `paymentMethodCreditCardSchema`

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

### PaymentMethodPix

> **PaymentMethodPix**: `object` = `paymentMethodPixSchema`

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

### Split

> **Split**: `object` = `splitSchema`

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

### Transactions

> **Transactions**: `object`[]

### additionalInfo

> **additionalInfo**: `null` \| `string`

### galaxPayId

> **galaxPayId**: `string`

### mainPaymentMethodId

> **mainPaymentMethodId**: `"creditcard"` \| `"boleto"` \| `"pix"` = `mainPaymentMethodIdSchema`

### myId

> **myId**: `null` \| `string`

### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `boolean`

### paymentLink

> **paymentLink**: `string`

### planGalaxPayId

> **planGalaxPayId**: `string`

### planMyId

> **planMyId**: `null` \| `string`

### status

> **status**: `"active"` \| `"inactive"` \| `"canceled"` \| `"closed"` \| `"waitingPayment"` = `chargesStatusSchema`

### value

> **value**: `number`

## Source

[packages/core/src/types.ts:111](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/types.ts#L111)
