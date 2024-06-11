[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [types](../README.md) / Transaction

# Type alias: Transaction

> **Transaction**: `object`

## Type declaration

### AbecsReasonDenied

> **AbecsReasonDenied**: `object` = `abecsReasonDeniedSchema`

### AbecsReasonDenied.code

> **code**: `string`

### AbecsReasonDenied.message

> **message**: `string`

### Antifraud

> **Antifraud**: `object` = `antifraudSchema`

### Antifraud.approved

> **approved**: `boolean`

### Antifraud.ip

> **ip**: `string`

### Antifraud.sent

> **sent**: `boolean`

### Antifraud.sessionId

> **sessionId**: `string`

### Boleto

> **Boleto**: `object` = `boletoSchema`

### Boleto.bankAccount

> **bankAccount**: `string`

### Boleto.bankAgency

> **bankAgency**: `string`

### Boleto.bankEmissor

> **bankEmissor**: `string`

### Boleto.bankLine

> **bankLine**: `string`

### Boleto.bankNumber

> **bankNumber**: `number`

### Boleto.barCode

> **barCode**: `string`

### Boleto.pdf

> **pdf**: `string`

### Charge

> **Charge**: `object`[]

### ConciliationOccurrences

> **ConciliationOccurrences**: `object`[]

### CreditCard

> **CreditCard**: `object`

### CreditCard.Card

> **Card**: `object` = `cardSchema`

### CreditCard.Card.Brand

> **Brand**: `object` = `brandSchema`

### CreditCard.Card.Brand.id

> **id**: `string`

### CreditCard.Card.Brand.maxInstallment

> **maxInstallment**: `number`

### CreditCard.Card.Brand.name

> **name**: `string`

### CreditCard.Card.Brand.operatorIds

> **operatorIds**: `string`

### CreditCard.Card.createdAt

> **createdAt**: `string`

### CreditCard.Card.customerGalaxPayId

> **customerGalaxPayId**: `number`

### CreditCard.Card.customerMyId

> **customerMyId**: `string`

### CreditCard.Card.cvv

> **cvv**: `string`

### CreditCard.Card.expiresAt

> **expiresAt**: `string`

### CreditCard.Card.galaxPayId

> **galaxPayId**: `number`

### CreditCard.Card.holder

> **holder**: `string`

### CreditCard.Card.myId

> **myId**: `string`

### CreditCard.Card.number

> **number**: `string`

### CreditCard.Card.updatedAt

> **updatedAt**: `string`

### Invoice

> **Invoice**: `object` = `invoiceSchema`

### Invoice.description

> **description**: `string`

### Invoice.number

> **number**: `string`

### Invoice.pdf

> **pdf**: `string`

### Invoice.status

> **status**: `"error"` \| `"pending"` \| `"emitted"` \| `"rejected"` \| `"cancel"` \| `"cancelOutSystem"` = `invoiceStatusSchema`

### Invoice.statusDate

> **statusDate**: `string`

### Invoice.statusDescription

> **statusDescription**: `string`

### Invoice.xml

> **xml**: `string`

### Pix

> **Pix**: `object` = `pixSchema`

### Pix.image

> **image**: `string`

### Pix.page

> **page**: `string`

### Pix.qrCode

> **qrCode**: `string`

### Pix.reference

> **reference**: `string`

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

### Subscription.additionalInfo?

> `optional` **additionalInfo**: `string`

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

### Subscription.status

> **status**: `"active"` \| `"inactive"` \| `"canceled"` \| `"closed"` \| `"stopped"` \| `"waitingPayment"` = `subscriptionStatusSchema`

### Subscription.value

> **value**: `number`

### additionalInfo?

> `optional` **additionalInfo**: `string`

### authorizationCode?

> `optional` **authorizationCode**: `string`

### cardOperatorId

> **cardOperatorId**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"` = `cardOperatorIdSchema`

### chargeGalaxPayId

> **chargeGalaxPayId**: `number`

### chargeMyId

> **chargeMyId**: `string`

### datetimeLastSentToOperator

> **datetimeLastSentToOperator**: `string`

### fee

> **fee**: `number`

### galaxPayId

> **galaxPayId**: `number`

### installment

> **installment**: `number`

### myId

> **myId**: `string`

### payday

> **payday**: `string`

### paydayDate

> **paydayDate**: `string`

### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `boolean`

### reasonDenied?

> `optional` **reasonDenied**: `string`

### status

> **status**: `"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"` = `transactionStatusSchema`

### statusDate

> **statusDate**: `string`

### statusDescription

> **statusDescription**: `string`

### subscriptionGalaxPayId

> **subscriptionGalaxPayId**: `number`

### subscriptionMyId

> **subscriptionMyId**: `string`

### tid?

> `optional` **tid**: `string`

### value

> **value**: `number`

## Source

[packages/core/src/types.ts:97](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/types.ts#L97)
