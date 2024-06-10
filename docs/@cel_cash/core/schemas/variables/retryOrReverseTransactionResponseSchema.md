[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[CelCash](../../../../README.md) / [@cel\_cash/core](../../README.md) / [schemas](../README.md) / retryOrReverseTransactionResponseSchema

# Variable: retryOrReverseTransactionResponseSchema

> `const` **retryOrReverseTransactionResponseSchema**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

## Type declaration

### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

#### Type declaration

##### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

##### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

##### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>\>

##### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

### Transaction

> **Transaction**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `transactionsSchema`

#### Type declaration

##### AbecsReasonDenied

> **AbecsReasonDenied**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `abecsReasonDeniedSchema`

###### Type declaration

###### code

> **code**: `ZodString`

###### message

> **message**: `ZodString`

##### Antifraud

> **Antifraud**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `antifraudSchema`

##### Boleto

> **Boleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `boletoSchema`

###### Type declaration

###### bankAccount

> **bankAccount**: `ZodString`

###### bankAgency

> **bankAgency**: `ZodString`

###### bankEmissor

> **bankEmissor**: `ZodString`

###### bankLine

> **bankLine**: `ZodString`

###### bankNumber

> **bankNumber**: `ZodNumber`

###### barCode

> **barCode**: `ZodString`

###### pdf

> **pdf**: `ZodString`

##### Charge

> **Charge**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### ConciliationOccurrences

> **ConciliationOccurrences**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### CreditCard

> **CreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Card

> **Card**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `cardSchema`

##### Invoice

> **Invoice**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `invoiceSchema`

###### Type declaration

###### description

> **description**: `ZodString`

###### number

> **number**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### status

> **status**: `ZodEnum`\<[`"pending"`, `"emitted"`, `"rejected"`, `"error"`, `"cancel"`, `"cancelOutSystem"`]\> = `invoiceStatusSchema`

###### statusDate

> **statusDate**: `ZodString`

###### statusDescription

> **statusDescription**: `ZodString`

###### xml

> **xml**: `ZodString`

##### Pix

> **Pix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `pixSchema`

###### Type declaration

###### image

> **image**: `ZodString`

###### page

> **page**: `ZodString`

###### qrCode

> **qrCode**: `ZodString`

###### reference

> **reference**: `ZodString`

##### Subscription

> **Subscription**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `subscriptionSchema`

###### Type declaration

###### Customer

> **Customer**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodOptional`\<`ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### firstPayDayDate

> **firstPayDayDate**: `ZodString`

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

###### myId

> **myId**: `ZodString`

###### paymentLink

> **paymentLink**: `ZodOptional`\<`ZodString`\>

###### periodicity

> **periodicity**: `ZodEnum`\<[`"weekly"`, `"biweekly"`, `"monthly"`, `"bimonthly"`, `"quarterly"`, `"biannual"`, `"yearly"`]\> = `periodicitySchema`

###### planGalaxPayId

> **planGalaxPayId**: `ZodNumber`

###### planMyId

> **planMyId**: `ZodString`

###### status

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"stopped"`, `"waitingPayment"`, `"inactive"`]\> = `subscriptionStatusSchema`

###### value

> **value**: `ZodNumber`

##### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

##### authorizationCode

> **authorizationCode**: `ZodOptional`\<`ZodString`\>

##### cardOperatorId

> **cardOperatorId**: `ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\> = `cardOperatorIdSchema`

##### chargeGalaxPayId

> **chargeGalaxPayId**: `ZodNumber`

##### chargeMyId

> **chargeMyId**: `ZodString`

##### datetimeLastSentToOperator

> **datetimeLastSentToOperator**: `ZodString`

##### fee

> **fee**: `ZodNumber`

##### galaxPayId

> **galaxPayId**: `ZodNumber`

##### installment

> **installment**: `ZodNumber`

##### myId

> **myId**: `ZodString`

##### payday

> **payday**: `ZodString`

##### paydayDate

> **paydayDate**: `ZodString`

##### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

##### reasonDenied

> **reasonDenied**: `ZodOptional`\<`ZodString`\>

##### status

> **status**: `ZodEnum`\<[`"noSend"`, `"authorized"`, `"captured"`, `"denied"`, `"reversed"`, `"chargeback"`, `"pendingBoleto"`, `"payedBoleto"`, `"notCompensated"`, `"lessValueBoleto"`, `"moreValueBoleto"`, `"paidDuplicityBoleto"`, `"pendingPix"`, `"payedPix"`]\> = `transactionStatusSchema`

##### statusDate

> **statusDate**: `ZodString`

##### statusDescription

> **statusDescription**: `ZodString`

##### subscriptionGalaxPayId

> **subscriptionGalaxPayId**: `ZodNumber`

##### subscriptionMyId

> **subscriptionMyId**: `ZodString`

##### tid

> **tid**: `ZodOptional`\<`ZodString`\>

##### value

> **value**: `ZodNumber`

## Source

[packages/core/src/schemas/transactions.ts:313](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/core/src/schemas/transactions.ts#L313)
