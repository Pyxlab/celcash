[**@cel_cash/nestjs v2.1.5**](../README.md) • **Docs**

***

[Packages Example](../../../README.md) / [@cel\_cash/nestjs](../README.md) / CelCashService

# Class: CelCashService

## Extends

- `CelCashServiceContract`

## Implements

- `OnModuleInit`

## Constructors

### new CelCashService()

> **new CelCashService**(`cellCashServiceOptions`, `cacheManage`): [`CelCashService`](CelCashService.md)

#### Parameters

• **cellCashServiceOptions**: [`CelCashServiceOptions`](../interfaces/CelCashServiceOptions.md)

• **cacheManage**: `Cache`

#### Returns

[`CelCashService`](CelCashService.md)

#### Overrides

`CelCashServiceContract.constructor`

#### Source

[packages/nest/src/cel\_cash.service.ts:15](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/nest/src/cel_cash.service.ts#L15)

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

`CelCashServiceContract.#private`

#### Source

packages/core/dist/index.d.ts:25

***

### cacheManage

> `private` `readonly` **cacheManage**: `Cache`

#### Source

[packages/nest/src/cel\_cash.service.ts:19](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/nest/src/cel_cash.service.ts#L19)

***

### logger

> `private` `readonly` **logger**: `Logger`

#### Source

[packages/nest/src/cel\_cash.service.ts:13](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/nest/src/cel_cash.service.ts#L13)

***

### CACHE

> `static` `readonly` **CACHE**: `object`

#### ACCESS\_TOKEN

> `readonly` **ACCESS\_TOKEN**: `"cel_cash:access_token"`

#### ROOT

> `readonly` **ROOT**: `"cel_cash"`

#### Inherited from

`CelCashServiceContract.CACHE`

#### Source

packages/core/dist/index.d.ts:26

## Accessors

### antecipation

> `get` **antecipation**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### create

> **create**: `object`

##### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### antecipationUuid

> **antecipationUuid**: `ZodString`

##### create.method

> **method**: `"POST"`

##### create.path

> **path**: `"/antecipation/"`

##### create.responses

> **responses**: `object`

##### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### type

> **type**: `ZodBoolean`

##### create.responses.507

> **507**: `ContractPlainType`\<`ZodError`\<`any`\>\>

##### create.summary

> **summary**: `"Antecipar recebíveis"`

##### simulate

> **simulate**: `object`

##### simulate.create

> **create**: `object`

##### simulate.create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### brands

> **brands**: `ZodEffects`\<`ZodArray`\<`ZodEnum`\<[`"discover"`, `"mastercard"`, `"elo"`, `"hipercard"`, `"amex"`, `"visa"`]\>, `"many"`\>, `undefined` \| `string` \| `number`, (`"discover"` \| `"mastercard"` \| `"elo"` \| `"hipercard"` \| `"amex"` \| `"visa"`)[]\>

###### transactionGalaxPayIds

> **transactionGalaxPayIds**: `ZodEffects`\<`ZodArray`\<`ZodNumber`, `"many"`\>, `undefined` \| `string` \| `number`, `number`[]\>

###### value

> **value**: `ZodNumber`

##### simulate.create.method

> **method**: `"POST"`

##### simulate.create.path

> **path**: `"/antecipation/simulate/"`

##### simulate.create.responses

> **responses**: `object`

##### simulate.create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antecipation

> **Antecipation**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### averageDays

> **averageDays**: `ZodNumber`

###### cet

> **cet**: `ZodNumber`

###### companyGalaxPayId

> **companyGalaxPayId**: `ZodNumber`

###### createdAtFrom

> **createdAtFrom**: `ZodString`

###### createdAtTo

> **createdAtTo**: `ZodString`

###### done

> **done**: `ZodEnum`\<[..., ...]\>

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### netValue

> **netValue**: `ZodNumber`

###### totalAntecipateTax

> **totalAntecipateTax**: `ZodNumber`

###### totalMdr

> **totalMdr**: `ZodNumber`

###### totalValue

> **totalValue**: `ZodNumber`

###### transactionsGalaxPayIds

> **transactionsGalaxPayIds**: `ZodString`

###### uuid

> **uuid**: `ZodString`

###### OperationSummary

> **OperationSummary**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### averageDays

> **averageDays**: `ZodNumber`

###### cet

> **cet**: `ZodNumber`

###### finalTax

> **finalTax**: `ZodNumber`

###### grossTotal

> **grossTotal**: `ZodNumber`

###### mdr

> **mdr**: `ZodNumber`

###### mdrTax

> **mdrTax**: `ZodNumber`

###### netValue

> **netValue**: `ZodNumber`

###### Releases

> **Releases**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### type

> **type**: `ZodBoolean`

##### simulate.create.responses.507

> **507**: `ContractPlainType`\<`ZodError`\<`any`\>\>

##### simulate.create.summary

> **summary**: `"Simula antecipação"`

##### simulate.getByFilters

> **getByFilters**: `object`

##### simulate.getByFilters.method

> **method**: `"GET"`

##### simulate.getByFilters.path

> **path**: `"/antecipation/simulate/get-by-filters"`

##### simulate.getByFilters.query

> **query**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

##### simulate.getByFilters.responses

> **responses**: `object`

##### simulate.getByFilters.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antecipation

> **Antecipation**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

##### simulate.getByFilters.responses.507

> **507**: `ContractPlainType`\<`ZodError`\<`any`\>\>

##### simulate.getByFilters.summary

> **summary**: `"Lista as simulações antecipação de transações"`

#### Source

packages/core/dist/index.d.ts:33

***

### cards

> `get` **cards**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### create

> **create**: `object`

##### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### cvv

> **cvv**: `ZodString`

###### expiresAt

> **expiresAt**: `ZodString`

###### holder

> **holder**: `ZodString`

###### myId

> **myId**: `ZodString`

###### number

> **number**: `ZodString`

##### create.method

> **method**: `"POST"`

##### create.path

> **path**: `"/cards/:customerId/:typeId"`

##### create.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### customerId

> **customerId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### create.responses

> **responses**: `object`

##### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Card

> **Card**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### create.responses.507

> **507**: `ContractPlainType`\<`ZodError`\<`any`\>\>

##### delete

> **delete**: `object`

##### delete.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### delete.method

> **method**: `"DELETE"`

##### delete.path

> **path**: `"/cards/:cardId/:typeId"`

##### delete.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### cardId

> **cardId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### delete.responses

> **responses**: `object`

##### delete.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### type

> **type**: `ZodBoolean`

##### delete.responses.507

> **507**: `ContractPlainType`\<`ZodError`\<`any`\>\>

##### list

> **list**: `object`

##### list.method

> **method**: `"GET"`

##### list.path

> **path**: `"/cards/"`

##### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

###### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

###### customerGalaxPayIds

> **customerGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### customerMyIds

> **customerMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### limit

> **limit**: `ZodNumber`

###### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`]\>\>

###### startAt

> **startAt**: `ZodNumber`

###### status

> **status**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodEnum`\<...\>, `"many"`\>, `ZodEnum`\<[..., ...]\>]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]\>

##### list.responses

> **responses**: `object`

##### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Cards

> **Cards**: `ZodArray`\<`ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

##### list.responses.507

> **507**: `ContractPlainType`\<`ZodError`\<`any`\>\>

#### Source

packages/core/dist/index.d.ts:34

***

### chargebacks

> `get` **chargebacks**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

#### Source

packages/core/dist/index.d.ts:36

***

### charges

> `get` **charges**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### cancel

> **cancel**: `object`

##### cancel.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### cancel.method

> **method**: `"DELETE"`

##### cancel.path

> **path**: `"/charges/:chargeId/:typeId/"`

##### cancel.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### cancel.responses

> **responses**: `object`

##### cancel.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Deadline

> **Deadline**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### fine

> **fine**: `ZodOptional`\<`ZodNumber`\>

###### instructions

> **instructions**: `ZodOptional`\<`ZodString`\>

###### interest

> **interest**: `ZodOptional`\<`ZodNumber`\>

###### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### additionalInfo

> **additionalInfo**: `ZodNullable`\<`ZodString`\>

###### galaxPayId

> **galaxPayId**: `ZodString`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

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

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\>

###### value

> **value**: `ZodNumber`

##### capture

> **capture**: `object`

##### capture.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### capture.method

> **method**: `"PUT"`

##### capture.path

> **path**: `"/charges/:chargeId/:typeId/capture"`

##### capture.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### capture.responses

> **responses**: `object`

##### capture.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Deadline

> **Deadline**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### fine

> **fine**: `ZodOptional`\<`ZodNumber`\>

###### instructions

> **instructions**: `ZodOptional`\<`ZodString`\>

###### interest

> **interest**: `ZodOptional`\<`ZodNumber`\>

###### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### additionalInfo

> **additionalInfo**: `ZodNullable`\<`ZodString`\>

###### galaxPayId

> **galaxPayId**: `ZodString`

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

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

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\>

###### value

> **value**: `ZodNumber`

##### create

> **create**: `object`

##### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Customer

> **Customer**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Address

> **Address**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

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

> **status**: `ZodOptional`\<`ZodEnum`\<[`"active"`, `"delayed"`, `"inactive"`, `"withoutSubscriptionOrCharge"`]\>\>

###### updatedAt

> **updatedAt**: `ZodOptional`\<`ZodString`\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

###### myId

> **myId**: `ZodString`

###### payday

> **payday**: `ZodString`

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

###### planMyId

> **planMyId**: `ZodOptional`\<`ZodString`\>

###### value

> **value**: `ZodNumber`

##### create.method

> **method**: `"POST"`

##### create.path

> **path**: `"/charges/"`

##### create.responses

> **responses**: `object`

##### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Charge

> **Charge**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

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

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\>

###### value

> **value**: `ZodNumber`

###### type

> **type**: `ZodBoolean`

##### list

> **list**: `object`

##### list.method

> **method**: `"GET"`

##### list.path

> **path**: `"/charges/"`

##### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

###### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

###### customerGalaxPayIds

> **customerGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### customerMyIds

> **customerMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### limit

> **limit**: `ZodNumber`

###### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`]\>\>

###### startAt

> **startAt**: `ZodNumber`

###### status

> **status**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodEnum`\<...\>, `"many"`\>, `ZodEnum`\<[..., ...]\>]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]\>

##### list.responses

> **responses**: `object`

##### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Charges

> **Charges**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

##### retry

> **retry**: `object`

##### retry.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### retry.method

> **method**: `"PUT"`

##### retry.path

> **path**: `"/charges/:chargeId/:typeId/retry"`

##### retry.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### retry.responses

> **responses**: `object`

##### retry.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Charge

> **Charge**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

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

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\>

###### value

> **value**: `ZodNumber`

###### type

> **type**: `ZodBoolean`

##### reverse

> **reverse**: `object`

##### reverse.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### valueToReverse

> **valueToReverse**: `ZodOptional`\<`ZodNumber`\>

##### reverse.method

> **method**: `"PUT"`

##### reverse.path

> **path**: `"/charges/:chargeId/:typeId/reverse"`

##### reverse.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### reverse.responses

> **responses**: `object`

##### reverse.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Charge

> **Charge**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

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

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\>

###### value

> **value**: `ZodNumber`

###### type

> **type**: `ZodBoolean`

##### update

> **update**: `object`

##### update.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

###### myId

> **myId**: `ZodOptional`\<`ZodString`\>

###### payday

> **payday**: `ZodOptional`\<`ZodString`\>

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

###### planGalaxPayId

> **planGalaxPayId**: `ZodOptional`\<`ZodString`\>

###### planMyId

> **planMyId**: `ZodOptional`\<`ZodString`\>

###### value

> **value**: `ZodOptional`\<`ZodNumber`\>

##### update.method

> **method**: `"PUT"`

##### update.path

> **path**: `"/charges/:chargeId/:typeId"`

##### update.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### chargeId

> **chargeId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### update.responses

> **responses**: `object`

##### update.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Charge

> **Charge**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Contract

> **Contract**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### ExtraFields

> **ExtraFields**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **PaymentMethodPix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

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

> **status**: `ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"waitingPayment"`, `"inactive"`]\>

###### value

> **value**: `ZodNumber`

###### type

> **type**: `ZodBoolean`

#### Source

packages/core/dist/index.d.ts:35

***

### companies

> `get` **companies**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### balance

> **balance**: `object`

###### Index signature

 \[`x`: `string`\]: `_ts_rest_core.AppRouter` \| `_ts_rest_core.AppRoute`

##### fees

> **fees**: `object`

###### Index signature

 \[`x`: `string`\]: `_ts_rest_core.AppRouter` \| `_ts_rest_core.AppRoute`

##### subaccounts

> **subaccounts**: `object`

###### Index signature

 \[`x`: `string`\]: `_ts_rest_core.AppRouter` \| `_ts_rest_core.AppRoute`

#### Source

packages/core/dist/index.d.ts:37

***

### customers

> `get` **customers**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### create

> **create**: `object`

##### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Address

> **Address**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### city

> **city**: `ZodString`

###### complement

> **complement**: `ZodOptional`\<`ZodString`\>

###### neighborhood

> **neighborhood**: `ZodString`

###### number

> **number**: `ZodString`

###### state

> **state**: `ZodString`

###### street

> **street**: `ZodString`

###### zipCode

> **zipCode**: `ZodString`

###### document

> **document**: `ZodString`

###### emails

> **emails**: `ZodArray`\<`ZodString`, `"many"`\>

###### invoiceHoldIss

> **invoiceHoldIss**: `ZodOptional`\<`ZodBoolean`\>

###### municipalDocument

> **municipalDocument**: `ZodOptional`\<`ZodString`\>

###### myId

> **myId**: `ZodString`

###### name

> **name**: `ZodString`

###### phones

> **phones**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

##### create.method

> **method**: `"POST"`

##### create.path

> **path**: `"/customers/"`

##### create.responses

> **responses**: `object`

##### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### delete

> **delete**: `object`

##### delete.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### delete.method

> **method**: `"DELETE"`

##### delete.path

> **path**: `"/customers/:customerId/:typeId"`

##### delete.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### customerId

> **customerId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### delete.responses

> **responses**: `object`

##### delete.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### type

> **type**: `ZodBoolean`

##### list

> **list**: `object`

##### list.method

> **method**: `"GET"`

##### list.path

> **path**: `"/customers/"`

##### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

###### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

###### createdOrUpdatedFrom

> **createdOrUpdatedFrom**: `ZodOptional`\<`ZodString`\>

###### createdOrUpdatedTo

> **createdOrUpdatedTo**: `ZodOptional`\<`ZodString`\>

###### documents

> **documents**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### emails

> **emails**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### limit

> **limit**: `ZodNumber`

###### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"updatedAt.asc"`, `"updatedAt.desc"`]\>\>

###### startAt

> **startAt**: `ZodOptional`\<`ZodNumber`\>

###### status

> **status**: `ZodOptional`\<`ZodEnum`\<[`"active"`, `"delayed"`, `"inactive"`, `"withoutSubscriptionOrCharge"`]\>\>

##### list.responses

> **responses**: `object`

##### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Customers

> **Customers**: `ZodArray`\<`ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

##### update

> **update**: `object`

##### update.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Address

> **Address**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### city

> **city**: `ZodString`

###### complement

> **complement**: `ZodOptional`\<`ZodString`\>

###### neighborhood

> **neighborhood**: `ZodString`

###### number

> **number**: `ZodString`

###### state

> **state**: `ZodString`

###### street

> **street**: `ZodString`

###### zipCode

> **zipCode**: `ZodString`

###### document

> **document**: `ZodString`

###### emails

> **emails**: `ZodArray`\<`ZodString`, `"many"`\>

###### invoiceHoldIss

> **invoiceHoldIss**: `ZodOptional`\<`ZodBoolean`\>

###### municipalDocument

> **municipalDocument**: `ZodOptional`\<`ZodString`\>

###### myId

> **myId**: `ZodString`

###### name

> **name**: `ZodString`

###### phones

> **phones**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

##### update.method

> **method**: `"PUT"`

##### update.path

> **path**: `"/customers/:customerId/:typeId"`

##### update.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### customerId

> **customerId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### update.responses

> **responses**: `object`

##### update.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

#### Source

packages/core/dist/index.d.ts:42

***

### pix

> `get` **pix**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### payment

> **payment**: `object`

##### payment.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### desc

> **desc**: `ZodOptional`\<`ZodString`\>

###### key

> **key**: `ZodString`

###### type

> **type**: `ZodEnum`\<[`"cpf"`, `"cnpj"`, `"email"`, `"mobilePhone"`, `"random"`]\>

###### value

> **value**: `ZodNumber`

##### payment.method

> **method**: `"POST"`

##### payment.path

> **path**: `"/pix/payment"`

##### payment.responses

> **responses**: `object`

##### payment.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Payment

> **Payment**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### createdAt

> **createdAt**: `ZodString`

###### desc

> **desc**: `ZodOptional`\<`ZodString`\>

###### endToEnd

> **endToEnd**: `ZodString`

###### galaxPayId

> **galaxPayId**: `ZodNumber`

###### key

> **key**: `ZodString`

###### status

> **status**: `ZodEnum`\<[`"efectivated"`, `"error"`, `"confirm"`]\>

###### taxValue

> **taxValue**: `ZodNumber`

###### value

> **value**: `ZodNumber`

###### type

> **type**: `ZodBoolean`

#### Source

packages/core/dist/index.d.ts:38

***

### plans

> `get` **plans**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### create

> **create**: `object`

##### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### PlanPrices

> **PlanPrices**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### myId

> **myId**: `ZodString`

###### name

> **name**: `ZodString`

###### periodicity

> **periodicity**: `ZodEnum`\<[`"weekly"`, `"biweekly"`, `"monthly"`, `"bimonthly"`, `"quarterly"`, `"biannual"`, `"yearly"`]\>

###### quantity

> **quantity**: `ZodNumber`

##### create.method

> **method**: `"POST"`

##### create.path

> **path**: `"/plans/"`

##### create.responses

> **responses**: `object`

##### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Plan

> **Plan**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### delete

> **delete**: `object`

##### delete.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### delete.method

> **method**: `"DELETE"`

##### delete.path

> **path**: `"/plans/:planId/:typeId"`

##### delete.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### planId

> **planId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### delete.responses

> **responses**: `object`

##### delete.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### type

> **type**: `ZodBoolean`

##### list

> **list**: `object`

##### list.method

> **method**: `"GET"`

##### list.path

> **path**: `"/plans/"`

##### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

###### createdAtOrUpdatedAtFrom

> **createdAtOrUpdatedAtFrom**: `ZodOptional`\<`ZodString`\>

###### createdAtOrUpdatedAtTo

> **createdAtOrUpdatedAtTo**: `ZodOptional`\<`ZodString`\>

###### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

###### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### limit

> **limit**: `ZodNumber`

###### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"updatedAt.asc"`, `"updatedAt.desc"`]\>\>

###### startAt

> **startAt**: `ZodNumber`

###### status

> **status**: `ZodOptional`\<`ZodEnum`\<[`"active"`, `"inactive"`]\>\>

##### list.responses

> **responses**: `object`

##### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Plans

> **Plans**: `ZodArray`\<`ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

##### update

> **update**: `object`

##### update.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### PlanPrices

> **PlanPrices**: `ZodOptional`\<`ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>\>

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodOptional`\<`ZodString`\>\>

###### myId

> **myId**: `ZodOptional`\<`ZodString`\>

###### name

> **name**: `ZodOptional`\<`ZodString`\>

###### periodicity

> **periodicity**: `ZodOptional`\<`ZodEnum`\<[`"weekly"`, `"biweekly"`, `"monthly"`, `"bimonthly"`, `"quarterly"`, `"biannual"`, `"yearly"`]\>\>

###### quantity

> **quantity**: `ZodOptional`\<`ZodNumber`\>

##### update.method

> **method**: `"PUT"`

##### update.path

> **path**: `"/plans/:planId/:typeId"`

##### update.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### planId

> **planId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### update.responses

> **responses**: `object`

##### update.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Plan

> **Plan**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

#### Source

packages/core/dist/index.d.ts:41

***

### subscriptions

> `get` **subscriptions**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### cancel

> **cancel**: `object`

##### cancel.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### cancel.method

> **method**: `"DELETE"`

##### cancel.path

> **path**: `"/subscriptions/:subscriptionId/:typeId"`

##### cancel.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### cancel.responses

> **responses**: `object`

##### cancel.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### type

> **type**: `ZodBoolean`

##### create

> **create**: `object`

##### create.manual

> **manual**: `object`

##### create.manual.body

> **body**: `ZodObject`\<`Omit`\<`object`, `"planMyId"` \| `"planGalaxPayId"` \| `"firstPayDayDate"`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### create.manual.method

> **method**: `"POST"`

##### create.manual.path

> **path**: `"/subscriptions/manual"`

##### create.manual.responses

> **responses**: `object`

##### create.manual.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### create.withPlan

> **withPlan**: `object`

##### create.withPlan.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

###### myId

> **myId**: `ZodString`

###### planGalaxPayId

> **planGalaxPayId**: `ZodNumber`

###### planMyId

> **planMyId**: `ZodString`

##### create.withPlan.method

> **method**: `"POST"`

##### create.withPlan.path

> **path**: `"/subscriptions/"`

##### create.withPlan.responses

> **responses**: `object`

##### create.withPlan.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### create.withoutPlan

> **withoutPlan**: `object`

##### create.withoutPlan.body

> **body**: `ZodObject`\<`extendShape`\<`Omit`\<`object`, `"planMyId"` \| `"planGalaxPayId"`\>, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### create.withoutPlan.method

> **method**: `"POST"`

##### create.withoutPlan.path

> **path**: `"/subscriptions/"`

##### create.withoutPlan.responses

> **responses**: `object`

##### create.withoutPlan.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### list

> **list**: `object`

##### list.method

> **method**: `"GET"`

##### list.path

> **path**: `"/subscriptions/"`

##### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

###### createdAtOrUpdatedAtFrom

> **createdAtOrUpdatedAtFrom**: `ZodOptional`\<`ZodString`\>

###### createdAtOrUpdatedAtTo

> **createdAtOrUpdatedAtTo**: `ZodOptional`\<`ZodString`\>

###### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

###### customerGalaxPayIds

> **customerGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### customerMyIds

> **customerMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### limit

> **limit**: `ZodNumber`

###### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"updatedAt.asc"`, `"updatedAt.desc"`]\>\>

###### planGalaxPayIds

> **planGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### planMyIds

> **planMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### startAt

> **startAt**: `ZodNumber`

###### status

> **status**: `ZodOptional`\<`ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"stopped"`, `"waitingPayment"`, `"inactive"`]\>\>

##### list.responses

> **responses**: `object`

##### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscriptions

> **Subscriptions**: `ZodArray`\<`ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

##### update

> **update**: `object`

##### update.info

> **info**: `object`

##### update.info.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### ExtraFields

> **ExtraFields**: `ZodOptional`\<`ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>\>

###### InvoiceConfig

> **InvoiceConfig**: `ZodOptional`\<`ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>\>

###### Split

> **Split**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### myId

> **myId**: `ZodOptional`\<`ZodString`\>

###### planGalaxPayId

> **planGalaxPayId**: `ZodOptional`\<`ZodNumber`\>

###### planMyId

> **planMyId**: `ZodOptional`\<`ZodString`\>

##### update.info.method

> **method**: `"PUT"`

##### update.info.path

> **path**: `"/subscriptions/:subscriptionId/:typeId"`

##### update.info.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### update.info.responses

> **responses**: `object`

##### update.info.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### update.payment

> **payment**: `object`

##### update.payment.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### PaymentMethodBoleto

> **PaymentMethodBoleto**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### PaymentMethodPix

> **PaymentMethodPix**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Split

> **Split**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### mainPaymentMethodId

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\>

###### value

> **value**: `ZodNumber`

##### update.payment.method

> **method**: `"PUT"`

##### update.payment.path

> **path**: `"/subscriptions/:subscriptionId/:typeId"`

##### update.payment.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### update.payment.responses

> **responses**: `object`

##### update.payment.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

#### Source

packages/core/dist/index.d.ts:43

***

### transactions

> `get` **transactions**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### add

> **add**: `object`

##### add.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### InvoiceConfig

> **InvoiceConfig**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

###### myId

> **myId**: `ZodString`

###### payday

> **payday**: `ZodOptional`\<`ZodString`\>

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

###### value

> **value**: `ZodOptional`\<`ZodNumber`\>

##### add.method

> **method**: `"POST"`

##### add.path

> **path**: `"/transactions/:subscriptionId/:typeId/add"`

##### add.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### add.responses

> **responses**: `object`

##### add.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### Transaction

> **Transaction**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### cancel

> **cancel**: `object`

##### cancel.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### cancel.method

> **method**: `"DELETE"`

##### cancel.path

> **path**: `"/transactions/:transactionId/:typeId"`

##### cancel.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### transactionId

> **transactionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### cancel.responses

> **responses**: `object`

##### cancel.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### type

> **type**: `ZodBoolean`

##### capture

> **capture**: `object`

##### capture.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### capture.method

> **method**: `"PUT"`

##### capture.path

> **path**: `"/transactions/:transactionId/:typeId/capture"`

##### capture.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### transactionId

> **transactionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### capture.responses

> **responses**: `object`

##### capture.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### Transaction

> **Transaction**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### create

> **create**: `object`

##### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### InvoiceConfig

> **InvoiceConfig**: `ZodOptional`\<`ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>\>

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### myId

> **myId**: `ZodString`

###### payday

> **payday**: `ZodString`

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodBoolean`

###### value

> **value**: `ZodNumber`

##### create.method

> **method**: `"POST"`

##### create.path

> **path**: `"/transactions/:subscriptionId/:typeId/add"`

##### create.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### create.responses

> **responses**: `object`

##### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### Transaction

> **Transaction**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### list

> **list**: `object`

##### list.method

> **method**: `"GET"`

##### list.path

> **path**: `"/transactions/"`

##### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### chargeGalaxPayIds

> **chargeGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### chargeMyIds

> **chargeMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

###### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

###### customerGalaxPayIds

> **customerGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### customerMyIds

> **customerMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### limit

> **limit**: `ZodNumber`

###### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

###### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"payday.asc"`, `"payday.desc"`]\>\>

###### payDayFrom

> **payDayFrom**: `ZodOptional`\<`ZodString`\>

###### payDayTo

> **payDayTo**: `ZodOptional`\<`ZodString`\>

###### startAt

> **startAt**: `ZodNumber`

###### status

> **status**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodEnum`\<[..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...]\>, `ZodArray`\<`ZodEnum`\<...\>, `"many"`\>]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `"captured"` \| `"payedBoleto"` \| `"payedPix"` \| `"payExternal"` \| `"cancel"` \| `"noSend"` \| `"authorized"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"unavailablePix"` \| `"cancelByContract"` \| `"free"` \| (`"captured"` \| `"payedBoleto"` \| `"payedPix"` \| `"payExternal"` \| `"cancel"` \| `"noSend"` \| `"authorized"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"unavailablePix"` \| `"cancelByContract"` \| `"free"`)[]\>

###### subscriptionGalaxPayIds

> **subscriptionGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

###### updateStatusFrom

> **updateStatusFrom**: `ZodOptional`\<`ZodString`\>

###### updateStatusTo

> **updateStatusTo**: `ZodOptional`\<`ZodString`\>

##### list.responses

> **responses**: `object`

##### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Transactions

> **Transactions**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

##### retry

> **retry**: `object`

##### retry.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

##### retry.method

> **method**: `"PUT"`

##### retry.path

> **path**: `"/transactions/:transactionId/:typeId/retry"`

##### retry.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### transactionId

> **transactionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### retry.responses

> **responses**: `object`

##### retry.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

###### Transaction

> **Transaction**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### AbecsReasonDenied

> **AbecsReasonDenied**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### code

> **code**: `ZodString`

###### message

> **message**: `ZodString`

###### Antifraud

> **Antifraud**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Boleto

> **Boleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Card**: `ZodObject`\<..., ..., ..., ..., ...\>

###### Invoice

> **Invoice**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### description

> **description**: `ZodString`

###### number

> **number**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### status

> **status**: `ZodEnum`\<...\>

###### statusDate

> **statusDate**: `ZodString`

###### statusDescription

> **statusDescription**: `ZodString`

###### xml

> **xml**: `ZodString`

###### Pix

> **Pix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Subscription**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **mainPaymentMethodId**: `ZodEnum`\<...\>

###### myId

> **myId**: `ZodString`

###### paymentLink

> **paymentLink**: `ZodOptional`\<...\>

###### periodicity

> **periodicity**: `ZodEnum`\<...\>

###### planGalaxPayId

> **planGalaxPayId**: `ZodNumber`

###### planMyId

> **planMyId**: `ZodString`

###### status

> **status**: `ZodEnum`\<...\>

###### value

> **value**: `ZodNumber`

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### authorizationCode

> **authorizationCode**: `ZodOptional`\<`ZodString`\>

###### cardOperatorId

> **cardOperatorId**: `ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>

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

> **status**: `ZodEnum`\<[`"noSend"`, `"authorized"`, `"captured"`, `"denied"`, `"reversed"`, `"chargeback"`, `"pendingBoleto"`, `"payedBoleto"`, `"notCompensated"`, `"lessValueBoleto"`, `"moreValueBoleto"`, `"paidDuplicityBoleto"`, `"pendingPix"`, `"payedPix"`]\>

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

##### reverse

> **reverse**: `object`

##### reverse.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### valueToReverse

> **valueToReverse**: `ZodOptional`\<`ZodNumber`\>

##### reverse.method

> **method**: `"PUT"`

##### reverse.path

> **path**: `"/transactions/:transactionId/:typeId/reverse"`

##### reverse.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### transactionId

> **transactionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### reverse.responses

> **responses**: `object`

##### reverse.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### PaymentMethodCreditCard

> **PaymentMethodCreditCard**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antifraud

> **Antifraud**: `ZodOptional`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>\>

###### Card

> **Card**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### cardOperatorId

> **cardOperatorId**: `ZodOptional`\<`ZodEnum`\<[..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ...]\>\>

###### preAuthorize

> **preAuthorize**: `ZodOptional`\<`ZodBoolean`\>

###### Transaction

> **Transaction**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### AbecsReasonDenied

> **AbecsReasonDenied**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### code

> **code**: `ZodString`

###### message

> **message**: `ZodString`

###### Antifraud

> **Antifraud**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Boleto

> **Boleto**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Card**: `ZodObject`\<..., ..., ..., ..., ...\>

###### Invoice

> **Invoice**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### description

> **description**: `ZodString`

###### number

> **number**: `ZodString`

###### pdf

> **pdf**: `ZodString`

###### status

> **status**: `ZodEnum`\<...\>

###### statusDate

> **statusDate**: `ZodString`

###### statusDescription

> **statusDescription**: `ZodString`

###### xml

> **xml**: `ZodString`

###### Pix

> **Pix**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **Subscription**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

> **mainPaymentMethodId**: `ZodEnum`\<...\>

###### myId

> **myId**: `ZodString`

###### paymentLink

> **paymentLink**: `ZodOptional`\<...\>

###### periodicity

> **periodicity**: `ZodEnum`\<...\>

###### planGalaxPayId

> **planGalaxPayId**: `ZodNumber`

###### planMyId

> **planMyId**: `ZodString`

###### status

> **status**: `ZodEnum`\<...\>

###### value

> **value**: `ZodNumber`

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodString`\>

###### authorizationCode

> **authorizationCode**: `ZodOptional`\<`ZodString`\>

###### cardOperatorId

> **cardOperatorId**: `ZodEnum`\<[`"bin"`, `"cielo"`, `"getnet"`, `"getnetNew"`, `"globalpayments"`, `"pagseguro"`, `"rede"`, `"zoop"`, `"galaxpay"`, `"adyen"`, `"stone"`]\>

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

> **status**: `ZodEnum`\<[`"noSend"`, `"authorized"`, `"captured"`, `"denied"`, `"reversed"`, `"chargeback"`, `"pendingBoleto"`, `"payedBoleto"`, `"notCompensated"`, `"lessValueBoleto"`, `"moreValueBoleto"`, `"paidDuplicityBoleto"`, `"pendingPix"`, `"payedPix"`]\>

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

##### update

> **update**: `object`

##### update.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### additionalInfo

> **additionalInfo**: `ZodOptional`\<`ZodOptional`\<`ZodString`\>\>

###### myId

> **myId**: `ZodString`

###### payday

> **payday**: `ZodOptional`\<`ZodString`\>

###### payedOutsideGalaxPay

> **payedOutsideGalaxPay**: `ZodOptional`\<`ZodBoolean`\>

###### value

> **value**: `ZodOptional`\<`ZodNumber`\>

##### update.method

> **method**: `"PUT"`

##### update.path

> **path**: `"/transactions/:subscriptionId/:typeId"`

##### update.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### update.responses

> **responses**: `object`

##### update.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Split

> **Split**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

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

###### Transaction

> **Transaction**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

#### Source

packages/core/dist/index.d.ts:40

***

### transfer

> `get` **transfer**(): `RecursiveProxyObj`\<`object`, `object`\>

#### Returns

`RecursiveProxyObj`\<`object`, `object`\>

##### internal

> **internal**: `object`

##### internal.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### companyAccount

> **companyAccount**: `ZodNumber`

###### companyDocument

> **companyDocument**: `ZodString`

###### value

> **value**: `ZodNumber`

##### internal.method

> **method**: `"POST"`

##### internal.path

> **path**: `"/transfer/internal"`

##### internal.responses

> **responses**: `object`

##### internal.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### type

> **type**: `ZodBoolean`

#### Source

packages/core/dist/index.d.ts:39

## Methods

### getCachedAccessToken()

> `protected` **getCachedAccessToken**(): `Promise`\<`null` \| `string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Overrides

`CelCashServiceContract.getCachedAccessToken`

#### Source

[packages/nest/src/cel\_cash.service.ts:39](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/nest/src/cel_cash.service.ts#L39)

***

### onModuleInit()

> **onModuleInit**(): `void`

#### Returns

`void`

#### Implementation of

`OnModuleInit.onModuleInit`

#### Source

[packages/nest/src/cel\_cash.service.ts:35](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/nest/src/cel_cash.service.ts#L35)

***

### setCachedAccessToken()

> `protected` **setCachedAccessToken**(`value`, `expiresIn`): `Promise`\<`void`\>

#### Parameters

• **value**: `string`

• **expiresIn**: `number`

#### Returns

`Promise`\<`void`\>

#### Overrides

`CelCashServiceContract.setCachedAccessToken`

#### Source

[packages/nest/src/cel\_cash.service.ts:46](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/nest/src/cel_cash.service.ts#L46)
