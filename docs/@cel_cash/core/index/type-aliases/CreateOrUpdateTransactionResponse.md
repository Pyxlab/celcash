[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CreateOrUpdateTransactionResponse

# Type alias: CreateOrUpdateTransactionResponse

> **CreateOrUpdateTransactionResponse**: `object`

## Type declaration

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

### Transaction

> **Transaction**: `object`

### Transaction.AbecsReasonDenied

> **AbecsReasonDenied**: `object` = `abecsReasonDeniedSchema`

### Transaction.AbecsReasonDenied.code

> **code**: `string`

### Transaction.AbecsReasonDenied.message

> **message**: `string`

### Transaction.Antifraud

> **Antifraud**: `object` = `antifraudSchema`

### Transaction.Antifraud.approved

> **approved**: `boolean`

### Transaction.Antifraud.ip

> **ip**: `string`

### Transaction.Antifraud.sent

> **sent**: `boolean`

### Transaction.Antifraud.sessionId

> **sessionId**: `string`

### Transaction.Boleto

> **Boleto**: `object` = `boletoSchema`

### Transaction.Boleto.bankAccount

> **bankAccount**: `string`

### Transaction.Boleto.bankAgency

> **bankAgency**: `string`

### Transaction.Boleto.bankEmissor

> **bankEmissor**: `string`

### Transaction.Boleto.bankLine

> **bankLine**: `string`

### Transaction.Boleto.bankNumber

> **bankNumber**: `number`

### Transaction.Boleto.barCode

> **barCode**: `string`

### Transaction.Boleto.pdf

> **pdf**: `string`

### Transaction.ConciliationOccurrences

> **ConciliationOccurrences**: `object`[]

### Transaction.CreditCard

> **CreditCard**: `object`

### Transaction.CreditCard.Card

> **Card**: `object` = `cardSchema`

### Transaction.CreditCard.Card.Brand

> **Brand**: `object` = `brandSchema`

### Transaction.CreditCard.Card.Brand.id

> **id**: `string`

### Transaction.CreditCard.Card.Brand.maxInstallment

> **maxInstallment**: `number`

### Transaction.CreditCard.Card.Brand.name

> **name**: `string`

### Transaction.CreditCard.Card.Brand.operatorIds

> **operatorIds**: `string`

### Transaction.CreditCard.Card.createdAt

> **createdAt**: `string`

### Transaction.CreditCard.Card.customerGalaxPayId

> **customerGalaxPayId**: `number`

### Transaction.CreditCard.Card.customerMyId

> **customerMyId**: `string`

### Transaction.CreditCard.Card.cvv

> **cvv**: `string`

### Transaction.CreditCard.Card.expiresAt

> **expiresAt**: `string`

### Transaction.CreditCard.Card.galaxPayId

> **galaxPayId**: `number`

### Transaction.CreditCard.Card.holder

> **holder**: `string`

### Transaction.CreditCard.Card.myId

> **myId**: `string`

### Transaction.CreditCard.Card.number

> **number**: `string`

### Transaction.CreditCard.Card.updatedAt

> **updatedAt**: `string`

### Transaction.Invoice

> **Invoice**: `object` = `invoiceSchema`

### Transaction.Invoice.description

> **description**: `string`

### Transaction.Invoice.number

> **number**: `string`

### Transaction.Invoice.pdf

> **pdf**: `string`

### Transaction.Invoice.status

> **status**: `"error"` \| `"pending"` \| `"emitted"` \| `"rejected"` \| `"cancel"` \| `"cancelOutSystem"` = `invoiceStatusSchema`

### Transaction.Invoice.statusDate

> **statusDate**: `string`

### Transaction.Invoice.statusDescription

> **statusDescription**: `string`

### Transaction.Invoice.xml

> **xml**: `string`

### Transaction.InvoiceConfig?

> `optional` **InvoiceConfig**: `object`

### Transaction.InvoiceConfig.createOn

> **createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`

### Transaction.InvoiceConfig.description

> **description**: `string`

### Transaction.InvoiceConfig.galaxPaySubAccountId?

> `optional` **galaxPaySubAccountId**: `number`

### Transaction.InvoiceConfig.qtdDaysAfterPay?

> `optional` **qtdDaysAfterPay**: `number`

### Transaction.InvoiceConfig.qtdDaysBeforePayDay?

> `optional` **qtdDaysBeforePayDay**: `number`

### Transaction.InvoiceConfig.type

> **type**: `"onePerTransaction"` \| `"onlyOne"` = `invoiceConfigTypeSchema`

### Transaction.PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `object` = `paymentMethodCreditCardSchema`

### Transaction.PaymentMethodCreditCard.Antifraud?

> `optional` **Antifraud**: `object`

### Transaction.PaymentMethodCreditCard.Antifraud.ip

> **ip**: `string`

### Transaction.PaymentMethodCreditCard.Antifraud.sessionId

> **sessionId**: `string`

### Transaction.PaymentMethodCreditCard.Card

> **Card**: `object`

### Transaction.PaymentMethodCreditCard.Card.Brand?

> `optional` **Brand**: `object` = `brandSchema`

### Transaction.PaymentMethodCreditCard.Card.Brand.id?

> `optional` **id**: `string`

### Transaction.PaymentMethodCreditCard.Card.Brand.maxInstallment?

> `optional` **maxInstallment**: `number`

### Transaction.PaymentMethodCreditCard.Card.Brand.name?

> `optional` **name**: `string`

### Transaction.PaymentMethodCreditCard.Card.Brand.operatorIds?

> `optional` **operatorIds**: `string`

### Transaction.PaymentMethodCreditCard.Card.createdAt?

> `optional` **createdAt**: `string`

### Transaction.PaymentMethodCreditCard.Card.customerGalaxPayId?

> `optional` **customerGalaxPayId**: `number`

### Transaction.PaymentMethodCreditCard.Card.customerMyId?

> `optional` **customerMyId**: `string`

### Transaction.PaymentMethodCreditCard.Card.cvv?

> `optional` **cvv**: `string`

### Transaction.PaymentMethodCreditCard.Card.expiresAt?

> `optional` **expiresAt**: `string`

### Transaction.PaymentMethodCreditCard.Card.galaxPayId?

> `optional` **galaxPayId**: `number`

### Transaction.PaymentMethodCreditCard.Card.holder?

> `optional` **holder**: `string`

### Transaction.PaymentMethodCreditCard.Card.myId?

> `optional` **myId**: `string`

### Transaction.PaymentMethodCreditCard.Card.number?

> `optional` **number**: `string`

### Transaction.PaymentMethodCreditCard.Card.updatedAt?

> `optional` **updatedAt**: `string`

### Transaction.PaymentMethodCreditCard.cardOperatorId?

> `optional` **cardOperatorId**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`

### Transaction.PaymentMethodCreditCard.preAuthorize?

> `optional` **preAuthorize**: `boolean`

### Transaction.additionalInfo?

> `optional` **additionalInfo**: `string`

### Transaction.authorizationCode

> **authorizationCode**: `string`

### Transaction.cardOperatorId

> **cardOperatorId**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"` = `cardOperatorIdSchema`

### Transaction.datetimeLastSentToOperator

> **datetimeLastSentToOperator**: `string`

### Transaction.fee

> **fee**: `number`

### Transaction.galaxPayId

> **galaxPayId**: `number`

### Transaction.myId

> **myId**: `string`

### Transaction.payday

> **payday**: `string`

### Transaction.payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `boolean`

### Transaction.reasonDenied?

> `optional` **reasonDenied**: `string`

### Transaction.status

> **status**: `"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"` = `transactionStatusSchema`

### Transaction.statusDate

> **statusDate**: `string`

### Transaction.statusDescription

> **statusDescription**: `string`

### Transaction.subscriptionGalaxPayId?

> `optional` **subscriptionGalaxPayId**: `number`

### Transaction.subscriptionMyId?

> `optional` **subscriptionMyId**: `string`

### Transaction.tid

> **tid**: `string`

### Transaction.value

> **value**: `number`

### type

> **type**: `boolean`

## Source

[packages/core/src/schemas/transactions.ts:269](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/schemas/transactions.ts#L269)
