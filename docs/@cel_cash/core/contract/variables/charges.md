[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / charges

# Variable: charges

> `const` **charges**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### cancel

> **cancel**: `object`

### cancel.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### cancel.method

> **method**: `"DELETE"` = `'DELETE'`

### cancel.path

> **path**: `"/:chargeId/:typeId/"` = `'/:chargeId/:typeId/'`

### cancel.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### cancel.responses

> **responses**: `object`

### cancel.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `chargesSchema`

#### Type declaration

##### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `contractSchema`

###### Type declaration

###### acceptedAt

> **acceptedAt**: `ZodString`

###### document

> **document**: `ZodString`

###### ip

> **ip**: `ZodString`

###### name

> **name**: `ZodString`

###### pdf

> **pdf**: `ZodString`

##### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `customerSchema`

##### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `invoiceConfigSchema`

##### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodBoletoSchema`

###### Type declaration

###### Aggrement

> **Aggrement**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### deadlineDays

> **deadlineDays**: `ZodOptional`\<`ZodNumber`\>

###### documentNumber

> **documentNumber**: `ZodOptional`\<`ZodString`\>

###### fine

> **fine**: `ZodOptional`\<`ZodNumber`\>

###### instructions

> **instructions**: `ZodOptional`\<`ZodString`\>

###### interest

> **interest**: `ZodOptional`\<`ZodNumber`\>

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

##### PaymentMethodPix

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodPixSchema`

###### Type declaration

###### Deadline

> **Deadline**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### fine

> **fine**: `ZodOptional`\<`ZodNumber`\>

###### instructions

> **instructions**: `ZodOptional`\<`ZodString`\>

###### interest

> **interest**: `ZodOptional`\<`ZodNumber`\>

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

##### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### additionalInfo

> **additionalInfo**: `ZodNullable`\<`ZodString`\>

##### galaxPayId

> **galaxPayId**: `ZodString`

##### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

##### myId

> **myId**: `ZodNullable`\<`ZodString`\>

##### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

##### paymentLink

> **paymentLink**: `ZodString`

##### planGalaxPayId

> **planGalaxPayId**: `ZodString`

##### planMyId

> **planMyId**: `ZodNullable`\<`ZodString`\>

##### status

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\> = `chargesStatusSchema`

##### value

> **value**: `ZodNumber`

### capture

> **capture**: `object`

### capture.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### capture.method

> **method**: `"PUT"` = `'PUT'`

### capture.path

> **path**: `"/:chargeId/:typeId/capture"` = `'/:chargeId/:typeId/capture'`

### capture.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### capture.responses

> **responses**: `object`

### capture.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `chargesSchema`

#### Type declaration

##### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `contractSchema`

###### Type declaration

###### acceptedAt

> **acceptedAt**: `ZodString`

###### document

> **document**: `ZodString`

###### ip

> **ip**: `ZodString`

###### name

> **name**: `ZodString`

###### pdf

> **pdf**: `ZodString`

##### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `customerSchema`

##### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `invoiceConfigSchema`

##### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodBoletoSchema`

###### Type declaration

###### Aggrement

> **Aggrement**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### deadlineDays

> **deadlineDays**: `ZodOptional`\<`ZodNumber`\>

###### documentNumber

> **documentNumber**: `ZodOptional`\<`ZodString`\>

###### fine

> **fine**: `ZodOptional`\<`ZodNumber`\>

###### instructions

> **instructions**: `ZodOptional`\<`ZodString`\>

###### interest

> **interest**: `ZodOptional`\<`ZodNumber`\>

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

##### PaymentMethodPix

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodPixSchema`

###### Type declaration

###### Deadline

> **Deadline**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### fine

> **fine**: `ZodOptional`\<`ZodNumber`\>

###### instructions

> **instructions**: `ZodOptional`\<`ZodString`\>

###### interest

> **interest**: `ZodOptional`\<`ZodNumber`\>

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

##### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### additionalInfo

> **additionalInfo**: `ZodNullable`\<`ZodString`\>

##### galaxPayId

> **galaxPayId**: `ZodString`

##### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

##### myId

> **myId**: `ZodNullable`\<`ZodString`\>

##### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

##### paymentLink

> **paymentLink**: `ZodString`

##### planGalaxPayId

> **planGalaxPayId**: `ZodString`

##### planMyId

> **planMyId**: `ZodNullable`\<`ZodString`\>

##### status

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\> = `chargesStatusSchema`

##### value

> **value**: `ZodNumber`

### create

> **create**: `object`

### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createChargeBodySchema`

#### Type declaration

##### Customer

> **Customer**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Address

> **Address**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\> = `addressSchema`

###### createdAt

> **createdAt**: `ZodOptional`\<`ZodString`\>

###### document

> **document**: `ZodOptional`\<`ZodString`\>

###### emails

> **emails**: `ZodOptional`\<`ZodArray`\<`ZodString`, `"many"`\>\>

###### galaPayId

> **galaPayId**: `ZodOptional`\<`ZodNumber`\>

###### invoiceHoldIss

> **invoiceHoldIss**: `ZodOptional`\<`ZodOptional`\<`ZodBoolean`\>\>

###### municipalDocument

> **municipalDocument**: `ZodOptional`\<`ZodOptional`\<`ZodString`\>\>

###### myId

> **myId**: `ZodOptional`\<`ZodString`\>

###### name

> **name**: `ZodOptional`\<`ZodString`\>

###### phones

> **phones**: `ZodOptional`\<`ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>\>

###### status

> **status**: `ZodOptional`\<`ZodEnum`\<[`"active"`, `"delayed"`, `"inactive"`, `"withoutSubscriptionOrCharge"`]\>\> = `statusCustomerSchema`

###### updatedAt

> **updatedAt**: `ZodOptional`\<`ZodString`\>

##### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

##### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

##### PaymentMethodPix

> **PaymentMethodPix**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

##### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

##### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

##### myId

> **myId**: `ZodString`

##### payday

> **payday**: `ZodString`

##### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

##### planMyId

> **planMyId**: `ZodOptional`\<`ZodString`\>

##### value

> **value**: `ZodNumber`

### create.method

> **method**: `"POST"` = `'POST'`

### create.path

> **path**: `"/"` = `'/'`

### create.responses

> **responses**: `object`

### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createChargeResponseSchema`

#### Type declaration

##### Charge

> **Charge**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `chargesSchema`

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `contractSchema`

###### Type declaration

###### acceptedAt

> **acceptedAt**: `ZodString`

###### document

> **document**: `ZodString`

###### ip

> **ip**: `ZodString`

###### name

> **name**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `customerSchema`

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `invoiceConfigSchema`

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodBoletoSchema`

###### Type declaration

###### Aggrement

> **Aggrement**: `ZodOptional`\<...\>

###### deadlineDays

> **deadlineDays**: `ZodOptional`\<...\>

###### documentNumber

> **documentNumber**: `ZodOptional`\<...\>

###### fine

> **fine**: `ZodOptional`\<...\>

###### instructions

> **instructions**: `ZodOptional`\<...\>

###### interest

> **interest**: `ZodOptional`\<...\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<...\>

###### Card

> **Card**: `ZodEffects`\<..., ..., ...\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<...\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<...\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodPixSchema`

###### Type declaration

###### Deadline

> **Deadline**: `ZodOptional`\<...\>

###### fine

> **fine**: `ZodOptional`\<...\>

###### instructions

> **instructions**: `ZodOptional`\<...\>

###### interest

> **interest**: `ZodOptional`\<...\>

###### Split

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

> **type**: `ZodEnum`\<...\>

###### value

> **value**: `ZodNumber`

###### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### additionalInfo

> **additionalInfo**: `ZodNullable`\<`ZodString`\>

###### galaxPayId

> **galaxPayId**: `ZodString`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

###### myId

> **myId**: `ZodNullable`\<`ZodString`\>

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

###### paymentLink

> **paymentLink**: `ZodString`

###### planGalaxPayId

> **planGalaxPayId**: `ZodString`

###### planMyId

> **planMyId**: `ZodNullable`\<`ZodString`\>

###### status

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\> = `chargesStatusSchema`

###### value

> **value**: `ZodNumber`

##### type

> **type**: `ZodBoolean`

### list

> **list**: `object`

### list.method

> **method**: `"GET"` = `'GET'`

### list.path

> **path**: `"/"` = `'/'`

### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listCardsParamsSchema`

#### Type declaration

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

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`]\>\>

##### startAt

> **startAt**: `ZodNumber`

##### status

> **status**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodEnum`\<...\>, `"many"`\>, `ZodEnum`\<[..., ...]\>]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]\>

### list.responses

> **responses**: `object`

### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listChargesResponseSchema`

#### Type declaration

##### Charges

> **Charges**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

### retry

> **retry**: `object`

### retry.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### retry.method

> **method**: `"PUT"` = `'PUT'`

### retry.path

> **path**: `"/:chargeId/:typeId/retry"` = `'/:chargeId/:typeId/retry'`

### retry.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### retry.responses

> **responses**: `object`

### retry.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createChargeResponseSchema`

#### Type declaration

##### Charge

> **Charge**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `chargesSchema`

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `contractSchema`

###### Type declaration

###### acceptedAt

> **acceptedAt**: `ZodString`

###### document

> **document**: `ZodString`

###### ip

> **ip**: `ZodString`

###### name

> **name**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `customerSchema`

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `invoiceConfigSchema`

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodBoletoSchema`

###### Type declaration

###### Aggrement

> **Aggrement**: `ZodOptional`\<...\>

###### deadlineDays

> **deadlineDays**: `ZodOptional`\<...\>

###### documentNumber

> **documentNumber**: `ZodOptional`\<...\>

###### fine

> **fine**: `ZodOptional`\<...\>

###### instructions

> **instructions**: `ZodOptional`\<...\>

###### interest

> **interest**: `ZodOptional`\<...\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<...\>

###### Card

> **Card**: `ZodEffects`\<..., ..., ...\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<...\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<...\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodPixSchema`

###### Type declaration

###### Deadline

> **Deadline**: `ZodOptional`\<...\>

###### fine

> **fine**: `ZodOptional`\<...\>

###### instructions

> **instructions**: `ZodOptional`\<...\>

###### interest

> **interest**: `ZodOptional`\<...\>

###### Split

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

> **type**: `ZodEnum`\<...\>

###### value

> **value**: `ZodNumber`

###### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### additionalInfo

> **additionalInfo**: `ZodNullable`\<`ZodString`\>

###### galaxPayId

> **galaxPayId**: `ZodString`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

###### myId

> **myId**: `ZodNullable`\<`ZodString`\>

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

###### paymentLink

> **paymentLink**: `ZodString`

###### planGalaxPayId

> **planGalaxPayId**: `ZodString`

###### planMyId

> **planMyId**: `ZodNullable`\<`ZodString`\>

###### status

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\> = `chargesStatusSchema`

###### value

> **value**: `ZodNumber`

##### type

> **type**: `ZodBoolean`

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

> **path**: `"/:chargeId/:typeId/reverse"` = `'/:chargeId/:typeId/reverse'`

### reverse.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### reverse.responses

> **responses**: `object`

### reverse.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createChargeResponseSchema`

#### Type declaration

##### Charge

> **Charge**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `chargesSchema`

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `contractSchema`

###### Type declaration

###### acceptedAt

> **acceptedAt**: `ZodString`

###### document

> **document**: `ZodString`

###### ip

> **ip**: `ZodString`

###### name

> **name**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `customerSchema`

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `invoiceConfigSchema`

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodBoletoSchema`

###### Type declaration

###### Aggrement

> **Aggrement**: `ZodOptional`\<...\>

###### deadlineDays

> **deadlineDays**: `ZodOptional`\<...\>

###### documentNumber

> **documentNumber**: `ZodOptional`\<...\>

###### fine

> **fine**: `ZodOptional`\<...\>

###### instructions

> **instructions**: `ZodOptional`\<...\>

###### interest

> **interest**: `ZodOptional`\<...\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<...\>

###### Card

> **Card**: `ZodEffects`\<..., ..., ...\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<...\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<...\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodPixSchema`

###### Type declaration

###### Deadline

> **Deadline**: `ZodOptional`\<...\>

###### fine

> **fine**: `ZodOptional`\<...\>

###### instructions

> **instructions**: `ZodOptional`\<...\>

###### interest

> **interest**: `ZodOptional`\<...\>

###### Split

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

> **type**: `ZodEnum`\<...\>

###### value

> **value**: `ZodNumber`

###### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### additionalInfo

> **additionalInfo**: `ZodNullable`\<`ZodString`\>

###### galaxPayId

> **galaxPayId**: `ZodString`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

###### myId

> **myId**: `ZodNullable`\<`ZodString`\>

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

###### paymentLink

> **paymentLink**: `ZodString`

###### planGalaxPayId

> **planGalaxPayId**: `ZodString`

###### planMyId

> **planMyId**: `ZodNullable`\<`ZodString`\>

###### status

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\> = `chargesStatusSchema`

###### value

> **value**: `ZodNumber`

##### type

> **type**: `ZodBoolean`

### update

> **update**: `object`

### update.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `updateChargeBodySchema`

#### Type declaration

##### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

##### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

##### myId

> **myId**: `ZodOptional`\<`ZodString`\>

##### payday

> **payday**: `ZodOptional`\<`ZodString`\>

##### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

##### planGalaxPayId

> **planGalaxPayId**: `ZodOptional`\<`ZodString`\>

##### planMyId

> **planMyId**: `ZodOptional`\<`ZodString`\>

##### value

> **value**: `ZodOptional`\<`ZodNumber`\>

### update.method

> **method**: `"PUT"` = `'PUT'`

### update.path

> **path**: `"/:chargeId/:typeId"` = `'/:chargeId/:typeId'`

### update.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### update.responses

> **responses**: `object`

### update.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createChargeResponseSchema`

#### Type declaration

##### Charge

> **Charge**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `chargesSchema`

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `contractSchema`

###### Type declaration

###### acceptedAt

> **acceptedAt**: `ZodString`

###### document

> **document**: `ZodString`

###### ip

> **ip**: `ZodString`

###### name

> **name**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `customerSchema`

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\> = `invoiceConfigSchema`

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodBoletoSchema`

###### Type declaration

###### Aggrement

> **Aggrement**: `ZodOptional`\<...\>

###### deadlineDays

> **deadlineDays**: `ZodOptional`\<...\>

###### documentNumber

> **documentNumber**: `ZodOptional`\<...\>

###### fine

> **fine**: `ZodOptional`\<...\>

###### instructions

> **instructions**: `ZodOptional`\<...\>

###### interest

> **interest**: `ZodOptional`\<...\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodCreditCardSchema`

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<...\>

###### Card

> **Card**: `ZodEffects`\<..., ..., ...\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<...\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<...\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `paymentMethodPixSchema`

###### Type declaration

###### Deadline

> **Deadline**: `ZodOptional`\<...\>

###### fine

> **fine**: `ZodOptional`\<...\>

###### instructions

> **instructions**: `ZodOptional`\<...\>

###### interest

> **interest**: `ZodOptional`\<...\>

###### Split

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

> **type**: `ZodEnum`\<...\>

###### value

> **value**: `ZodNumber`

###### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### additionalInfo

> **additionalInfo**: `ZodNullable`\<`ZodString`\>

###### galaxPayId

> **galaxPayId**: `ZodString`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

###### myId

> **myId**: `ZodNullable`\<`ZodString`\>

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

###### paymentLink

> **paymentLink**: `ZodString`

###### planGalaxPayId

> **planGalaxPayId**: `ZodString`

###### planMyId

> **planMyId**: `ZodNullable`\<`ZodString`\>

###### status

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\> = `chargesStatusSchema`

###### value

> **value**: `ZodNumber`

##### type

> **type**: `ZodBoolean`

## Source

[packages/core/src/contract/charges.ts:14](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/contract/charges.ts#L14)
