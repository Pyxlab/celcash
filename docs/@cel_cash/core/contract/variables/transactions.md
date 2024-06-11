[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / transactions

# Variable: transactions

> `const` **transactions**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### add

> **add**: `object`

### add.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `addTransactionBodySchema`

#### Type declaration

##### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `invoiceConfigSchema`

##### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

##### myId

> **myId**: `ZodString`

##### payday

> **payday**: `ZodOptional`\<`ZodString`\>

##### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

##### value

> **value**: `ZodOptional`\<`ZodNumber`\>

### add.method

> **method**: `"POST"` = `'POST'`

### add.path

> **path**: `"/:subscriptionId/:typeId/add"` = `'/:subscriptionId/:typeId/add'`

### add.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### subscriptionId

> **subscriptionId**: `ZodString`

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### add.responses

> **responses**: `object`

### add.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createOrUpdateTransactionResponseSchema`

#### Type declaration

##### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `splitSchema`

###### Type declaration

###### billGalaxyPayId

> **billGalaxyPayId**: `ZodNumber`

###### companyGalaxyPayId

> **companyGalaxyPayId**: `ZodNumber`

###### galaxyPayId

> **galaxyPayId**: `ZodNumber`

###### groupGalaxyPayId

> **groupGalaxyPayId**: `ZodNumber`

###### paymentMethod

> **paymentMethod**: `ZodString`

###### type

> **type**: `ZodEnum`\<[`"percent"`, `"fixed"`]\>

###### value

> **value**: `ZodNumber`

##### Transaction

> **Transaction**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### type

> **type**: `ZodBoolean`

### cancel

> **cancel**: `object`

### cancel.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### cancel.method

> **method**: `"DELETE"` = `'DELETE'`

### cancel.path

> **path**: `"/:transactionId/:typeId"` = `'/:transactionId/:typeId'`

### cancel.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### transactionId

> **transactionId**: `ZodString`

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### cancel.responses

> **responses**: `object`

### cancel.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### type

> **type**: `ZodBoolean`

### capture

> **capture**: `object`

### capture.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### capture.method

> **method**: `"PUT"` = `'PUT'`

### capture.path

> **path**: `"/:transactionId/:typeId/capture"` = `'/:transactionId/:typeId/capture'`

### capture.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### transactionId

> **transactionId**: `ZodString`

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### capture.responses

> **responses**: `object`

### capture.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createOrUpdateTransactionResponseSchema`

#### Type declaration

##### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `splitSchema`

###### Type declaration

###### billGalaxyPayId

> **billGalaxyPayId**: `ZodNumber`

###### companyGalaxyPayId

> **companyGalaxyPayId**: `ZodNumber`

###### galaxyPayId

> **galaxyPayId**: `ZodNumber`

###### groupGalaxyPayId

> **groupGalaxyPayId**: `ZodNumber`

###### paymentMethod

> **paymentMethod**: `ZodString`

###### type

> **type**: `ZodEnum`\<[`"percent"`, `"fixed"`]\>

###### value

> **value**: `ZodNumber`

##### Transaction

> **Transaction**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### type

> **type**: `ZodBoolean`

### create

> **create**: `object`

### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createTransactionBodySchema`

#### Type declaration

##### InvoiceConfig

> **InvoiceConfig**: `ZodOptional`\<`ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>\>

##### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

##### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

##### myId

> **myId**: `ZodString`

##### payday

> **payday**: `ZodString`

##### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

##### value

> **value**: `ZodNumber`

### create.method

> **method**: `"POST"` = `'POST'`

### create.path

> **path**: `"/:subscriptionId/:typeId/add"` = `'/:subscriptionId/:typeId/add'`

### create.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### subscriptionId

> **subscriptionId**: `ZodString`

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### create.responses

> **responses**: `object`

### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createOrUpdateTransactionResponseSchema`

#### Type declaration

##### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `splitSchema`

###### Type declaration

###### billGalaxyPayId

> **billGalaxyPayId**: `ZodNumber`

###### companyGalaxyPayId

> **companyGalaxyPayId**: `ZodNumber`

###### galaxyPayId

> **galaxyPayId**: `ZodNumber`

###### groupGalaxyPayId

> **groupGalaxyPayId**: `ZodNumber`

###### paymentMethod

> **paymentMethod**: `ZodString`

###### type

> **type**: `ZodEnum`\<[`"percent"`, `"fixed"`]\>

###### value

> **value**: `ZodNumber`

##### Transaction

> **Transaction**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### type

> **type**: `ZodBoolean`

### list

> **list**: `object`

### list.method

> **method**: `"GET"` = `'GET'`

### list.path

> **path**: `"/"` = `'/'`

### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listTransactionsParamsSchema`

#### Type declaration

##### chargeGalaxPayIds

> **chargeGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

##### chargeMyIds

> **chargeMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

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

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"payday.asc"`, `"payday.desc"`]\>\>

##### payDayFrom

> **payDayFrom**: `ZodOptional`\<`ZodString`\>

##### payDayTo

> **payDayTo**: `ZodOptional`\<`ZodString`\>

##### startAt

> **startAt**: `ZodNumber`

##### status

> **status**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodEnum`\<[..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...]\>, `ZodArray`\<`ZodEnum`\<...\>, `"many"`\>]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"` \| (`"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"`)[]\>

##### subscriptionGalaxPayIds

> **subscriptionGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

##### updateStatusFrom

> **updateStatusFrom**: `ZodOptional`\<`ZodString`\>

##### updateStatusTo

> **updateStatusTo**: `ZodOptional`\<`ZodString`\>

### list.responses

> **responses**: `object`

### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listTransactionsResponseSchema`

#### Type declaration

##### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

### retry

> **retry**: `object`

### retry.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### retry.method

> **method**: `"PUT"` = `'PUT'`

### retry.path

> **path**: `"/:transactionId/:typeId/retry"` = `'/:transactionId/:typeId/retry'`

### retry.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### transactionId

> **transactionId**: `ZodString`

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### retry.responses

> **responses**: `object`

### retry.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `retryOrReverseTransactionResponseSchema`

#### Type declaration

##### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

##### Transaction

> **Transaction**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `transactionsSchema`

###### Type declaration

###### AbecsReasonDenied

> **AbecsReasonDenied**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `abecsReasonDeniedSchema`

###### Type declaration

###### code

> **code**: `ZodString`

###### message

> **message**: `ZodString`

###### Antifraud

> **Antifraud**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `antifraudSchema`

###### Boleto

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

###### Charge

> **Charge**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### ConciliationOccurrences

> **ConciliationOccurrences**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### CreditCard

> **CreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Card

> **Card**: `ZodObject`\<..., ..., ..., ..., ...\> = `cardSchema`

###### Invoice

> **Invoice**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `invoiceSchema`

###### Type declaration

###### description

> **description**: `ZodString`

###### number

> **number**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### status

> **status**: `ZodEnum`\<...\> = `invoiceStatusSchema`

###### statusDate

> **statusDate**: `ZodString`

###### statusDescription

> **statusDescription**: `ZodString`

###### xml

> **xml**: `ZodString`

###### Pix

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

###### Subscription

> **Subscription**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `subscriptionSchema`

###### Type declaration

###### Customer

> **Customer**: `ZodEffects`\<..., ..., ...\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodOptional`\<...\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodOptional`\<...\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodOptional`\<...\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodOptional`\<...\>

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<...\>

###### firstPayDayDate

> **firstPayDayDate**: `ZodString`

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<...\> = `mainPaymentMethodIdSchema`

###### myId

> **myId**: `ZodString`

###### paymentLink

> **paymentLink**: `ZodOptional`\<...\>

###### periodicity

> **periodicity**: `ZodEnum`\<...\> = `periodicitySchema`

###### planGalaxPayId

> **planGalaxPayId**: `ZodNumber`

###### planMyId

> **planMyId**: `ZodString`

###### status

> **status**: `ZodEnum`\<...\> = `subscriptionStatusSchema`

###### value

> **value**: `ZodNumber`

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### authorizationCode

> **authorizationCode**: `ZodOptional`\<`ZodString`\>

###### cardOperatorId

> **cardOperatorId**: `ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\> = `cardOperatorIdSchema`

###### chargeGalaxPayId

> **chargeGalaxPayId**: `ZodNumber`

###### chargeMyId

> **chargeMyId**: `ZodString`

###### datetimeLastSentToOperator

> **datetimeLastSentToOperator**: `ZodString`

###### fee

> **fee**: `ZodNumber`

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### installment

> **installment**: `ZodNumber`

###### myId

> **myId**: `ZodString`

###### payday

> **payday**: `ZodString`

###### paydayDate

> **paydayDate**: `ZodString`

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

###### reasonDenied

> **reasonDenied**: `ZodOptional`\<`ZodString`\>

###### status

> **status**: `ZodEnum`\<[`"noSend"`, `"authorized"`, `"captured"`, `"denied"`, `"reversed"`, `"chargeback"`, `"pendingBoleto"`, `"payedBoleto"`, `"notCompensated"`, `"lessValueBoleto"`, `"moreValueBoleto"`, `"paidDuplicityBoleto"`, `"pendingPix"`, `"payedPix"`]\> = `transactionStatusSchema`

###### statusDate

> **statusDate**: `ZodString`

###### statusDescription

> **statusDescription**: `ZodString`

###### subscriptionGalaxPayId

> **subscriptionGalaxPayId**: `ZodNumber`

###### subscriptionMyId

> **subscriptionMyId**: `ZodString`

###### tid

> **tid**: `ZodOptional`\<`ZodString`\>

###### value

> **value**: `ZodNumber`

### reverse

> **reverse**: `object`

### reverse.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### valueToReverse

> **valueToReverse**: `ZodOptional`\<`ZodNumber`\>

### reverse.method

> **method**: `"PUT"` = `'PUT'`

### reverse.path

> **path**: `"/:transactionId/:typeId/reverse"` = `'/:transactionId/:typeId/reverse'`

### reverse.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### transactionId

> **transactionId**: `ZodString`

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### reverse.responses

> **responses**: `object`

### reverse.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `retryOrReverseTransactionResponseSchema`

#### Type declaration

##### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

##### Transaction

> **Transaction**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `transactionsSchema`

###### Type declaration

###### AbecsReasonDenied

> **AbecsReasonDenied**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `abecsReasonDeniedSchema`

###### Type declaration

###### code

> **code**: `ZodString`

###### message

> **message**: `ZodString`

###### Antifraud

> **Antifraud**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `antifraudSchema`

###### Boleto

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

###### Charge

> **Charge**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### ConciliationOccurrences

> **ConciliationOccurrences**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### CreditCard

> **CreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Card

> **Card**: `ZodObject`\<..., ..., ..., ..., ...\> = `cardSchema`

###### Invoice

> **Invoice**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `invoiceSchema`

###### Type declaration

###### description

> **description**: `ZodString`

###### number

> **number**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### status

> **status**: `ZodEnum`\<...\> = `invoiceStatusSchema`

###### statusDate

> **statusDate**: `ZodString`

###### statusDescription

> **statusDescription**: `ZodString`

###### xml

> **xml**: `ZodString`

###### Pix

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

###### Subscription

> **Subscription**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `subscriptionSchema`

###### Type declaration

###### Customer

> **Customer**: `ZodEffects`\<..., ..., ...\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodOptional`\<...\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodOptional`\<...\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodOptional`\<...\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodOptional`\<...\>

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<...\>

###### firstPayDayDate

> **firstPayDayDate**: `ZodString`

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<...\> = `mainPaymentMethodIdSchema`

###### myId

> **myId**: `ZodString`

###### paymentLink

> **paymentLink**: `ZodOptional`\<...\>

###### periodicity

> **periodicity**: `ZodEnum`\<...\> = `periodicitySchema`

###### planGalaxPayId

> **planGalaxPayId**: `ZodNumber`

###### planMyId

> **planMyId**: `ZodString`

###### status

> **status**: `ZodEnum`\<...\> = `subscriptionStatusSchema`

###### value

> **value**: `ZodNumber`

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### authorizationCode

> **authorizationCode**: `ZodOptional`\<`ZodString`\>

###### cardOperatorId

> **cardOperatorId**: `ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\> = `cardOperatorIdSchema`

###### chargeGalaxPayId

> **chargeGalaxPayId**: `ZodNumber`

###### chargeMyId

> **chargeMyId**: `ZodString`

###### datetimeLastSentToOperator

> **datetimeLastSentToOperator**: `ZodString`

###### fee

> **fee**: `ZodNumber`

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### installment

> **installment**: `ZodNumber`

###### myId

> **myId**: `ZodString`

###### payday

> **payday**: `ZodString`

###### paydayDate

> **paydayDate**: `ZodString`

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

###### reasonDenied

> **reasonDenied**: `ZodOptional`\<`ZodString`\>

###### status

> **status**: `ZodEnum`\<[`"noSend"`, `"authorized"`, `"captured"`, `"denied"`, `"reversed"`, `"chargeback"`, `"pendingBoleto"`, `"payedBoleto"`, `"notCompensated"`, `"lessValueBoleto"`, `"moreValueBoleto"`, `"paidDuplicityBoleto"`, `"pendingPix"`, `"payedPix"`]\> = `transactionStatusSchema`

###### statusDate

> **statusDate**: `ZodString`

###### statusDescription

> **statusDescription**: `ZodString`

###### subscriptionGalaxPayId

> **subscriptionGalaxPayId**: `ZodNumber`

###### subscriptionMyId

> **subscriptionMyId**: `ZodString`

###### tid

> **tid**: `ZodOptional`\<`ZodString`\>

###### value

> **value**: `ZodNumber`

### update

> **update**: `object`

### update.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `updateTransactionBodySchema`

#### Type declaration

##### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodOptional`\<`ZodString`\>\>

##### myId

> **myId**: `ZodString`

##### payday

> **payday**: `ZodOptional`\<`ZodString`\>

##### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

##### value

> **value**: `ZodOptional`\<`ZodNumber`\>

### update.method

> **method**: `"PUT"` = `'PUT'`

### update.path

> **path**: `"/:subscriptionId/:typeId"` = `'/:subscriptionId/:typeId'`

### update.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### subscriptionId

> **subscriptionId**: `ZodString`

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### update.responses

> **responses**: `object`

### update.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createOrUpdateTransactionResponseSchema`

#### Type declaration

##### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `splitSchema`

###### Type declaration

###### billGalaxyPayId

> **billGalaxyPayId**: `ZodNumber`

###### companyGalaxyPayId

> **companyGalaxyPayId**: `ZodNumber`

###### galaxyPayId

> **galaxyPayId**: `ZodNumber`

###### groupGalaxyPayId

> **groupGalaxyPayId**: `ZodNumber`

###### paymentMethod

> **paymentMethod**: `ZodString`

###### type

> **type**: `ZodEnum`\<[`"percent"`, `"fixed"`]\>

###### value

> **value**: `ZodNumber`

##### Transaction

> **Transaction**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### type

> **type**: `ZodBoolean`

## Source

[packages/core/src/contract/transactions.ts:15](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/contract/transactions.ts#L15)
