[**@cel_cash/adonisjs v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/adonisjs](../../README.md) / [index](../README.md) / CelCashService

# Class: CelCashService

## Extends

- `CelCashServiceContract`

## Constructors

### new CelCashService()

> **new CelCashService**(`config`, `logger`, `redis`): [`CelCashService`](CelCashService.md)

#### Parameters

• **config**: [`ResolvedConfig`](../../src/types/interfaces/ResolvedConfig.md)

• **logger**: `LoggerService`

• **redis**: `RedisService`

#### Returns

[`CelCashService`](CelCashService.md)

#### Overrides

`CelCashServiceContract.constructor`

#### Source

[packages/adonis/src/client.ts:24](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/adonis/src/client.ts#L24)

## Properties

### #private

> `private` **#private**: `any`

#### Inherited from

`CelCashServiceContract.#private`

#### Source

packages/core/dist/index.d.ts:33

***

### #redis

> `private` `readonly` **#redis**: `RedisService`

#### Source

[packages/adonis/src/client.ts:14](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/adonis/src/client.ts#L14)

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

packages/core/dist/index.d.ts:34

## Accessors

### antecipation

> `get` **antecipation**(): `object`

#### Returns

`object`

##### create()

> **create**: (`args`) => `Promise`\<`object` \| `object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.antecipationUuid**: `string`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object` \| `object`\>

##### simulate

> **simulate**: `RecursiveProxyObj`\<`object`, `object`\>

###### Type declaration

###### create

> **create**: `object`

###### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### brands

> **brands**: `ZodEffects`\<`ZodArray`\<`ZodEnum`\<[`"discover"`, `"mastercard"`, `"elo"`, `"hipercard"`, `"amex"`, `"visa"`]\>, `"many"`\>, `undefined` \| `string` \| `number`, (`"discover"` \| `"mastercard"` \| `"elo"` \| `"hipercard"` \| `"amex"` \| `"visa"`)[]\>

###### transactionGalaxPayIds

> **transactionGalaxPayIds**: `ZodEffects`\<`ZodArray`\<`ZodNumber`, `"many"`\>, `undefined` \| `string` \| `number`, `number`[]\>

###### value

> **value**: `ZodNumber`

###### create.method

> **method**: `"POST"`

###### create.path

> **path**: `"/antecipation/simulate/"`

###### create.responses

> **responses**: `object`

###### create.responses.200

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

###### create.responses.507

> **507**: `ContractPlainType`\<`ZodError`\<`any`\>\>

###### create.summary

> **summary**: `"Simula antecipação"`

###### getByFilters

> **getByFilters**: `object`

###### getByFilters.method

> **method**: `"GET"`

###### getByFilters.path

> **path**: `"/antecipation/simulate/get-by-filters"`

###### getByFilters.query

> **query**: `ZodEffects`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `object`, `object`\>

###### getByFilters.responses

> **responses**: `object`

###### getByFilters.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Antecipation

> **Antecipation**: `ZodArray`\<`ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

###### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

###### getByFilters.responses.507

> **507**: `ContractPlainType`\<`ZodError`\<`any`\>\>

###### getByFilters.summary

> **summary**: `"Lista as simulações antecipação de transações"`

#### Source

packages/core/dist/index.d.ts:41

***

### cards

> `get` **cards**(): `object`

#### Returns

`object`

##### create()

> **create**: (`args`) => `Promise`\<`object` \| `object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.cvv**: `string`

• **args.body.expiresAt**: `string`

• **args.body.holder**: `string`

• **args.body.myId**: `string`

• **args.body.number**: `string`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.customerId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object` \| `object`\>

##### delete()

> **delete**: (`args`) => `Promise`\<`object` \| `object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.cardId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object` \| `object`\>

##### list()

> **list**: (`args`) => `Promise`\<`object` \| `object` \| `object`\>

###### Parameters

• **args**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.query**

• **args.query.createdAtFrom?**: `string`

• **args.query.createdAtTo?**: `string`

• **args.query.customerGalaxPayIds?**: `number` \| `number`[]

• **args.query.customerMyIds?**: `string` \| `string`[]

• **args.query.galaxPayIds?**: `number` \| `number`[]

• **args.query.limit**: `number`

• **args.query.myIds?**: `string` \| `string`[]

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"`

• **args.query.startAt**: `number`

• **args.query.status?**: `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]

###### Returns

`Promise`\<`object` \| `object` \| `object`\>

#### Source

packages/core/dist/index.d.ts:42

***

### chargebacks

> `get` **chargebacks**(): `object`

#### Returns

`object`

#### Source

packages/core/dist/index.d.ts:44

***

### charges

> `get` **charges**(): `object`

#### Returns

`object`

##### cancel()

> **cancel**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.chargeId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### capture()

> **capture**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.chargeId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### create()

> **create**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.Customer**

• **args.body.Customer.Address?**

• **args.body.Customer.Address.city?**: `string`

• **args.body.Customer.Address.complement?**: `string`

• **args.body.Customer.Address.neighborhood?**: `string`

• **args.body.Customer.Address.number?**: `string`

• **args.body.Customer.Address.state?**: `string`

• **args.body.Customer.Address.street?**: `string`

• **args.body.Customer.Address.zipCode?**: `string`

• **args.body.Customer.createdAt?**: `string`

• **args.body.Customer.document?**: `string`

• **args.body.Customer.emails?**: `string`[]

• **args.body.Customer.galaPayId?**: `number`

• **args.body.Customer.invoiceHoldIss?**: `boolean`

• **args.body.Customer.municipalDocument?**: `string`

• **args.body.Customer.myId?**: `string`

• **args.body.Customer.name?**: `string`

• **args.body.Customer.phones?**: `number`[]

• **args.body.Customer.status?**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"`

• **args.body.Customer.updatedAt?**: `string`

• **args.body.PaymentMethodBoleto?**

• **args.body.PaymentMethodBoleto.Aggrement?**

• **args.body.PaymentMethodBoleto.Aggrement.document?**: `string`

• **args.body.PaymentMethodBoleto.Aggrement.name?**: `string`

• **args.body.PaymentMethodBoleto.deadlineDays?**: `number`

• **args.body.PaymentMethodBoleto.documentNumber?**: `string`

• **args.body.PaymentMethodBoleto.fine?**: `number`

• **args.body.PaymentMethodBoleto.instructions?**: `string`

• **args.body.PaymentMethodBoleto.interest?**: `number`

• **args.body.PaymentMethodCreditCard?**

• **args.body.PaymentMethodCreditCard.Antifraud?**

• **args.body.PaymentMethodCreditCard.Antifraud.ip**: `string`

• **args.body.PaymentMethodCreditCard.Antifraud.sessionId**: `string`

• **args.body.PaymentMethodCreditCard.Card**

• **args.body.PaymentMethodCreditCard.Card.Brand?**

• **args.body.PaymentMethodCreditCard.Card.Brand.id?**: `string`

• **args.body.PaymentMethodCreditCard.Card.Brand.maxInstallment?**: `number`

• **args.body.PaymentMethodCreditCard.Card.Brand.name?**: `string`

• **args.body.PaymentMethodCreditCard.Card.Brand.operatorIds?**: `string`

• **args.body.PaymentMethodCreditCard.Card.createdAt?**: `string`

• **args.body.PaymentMethodCreditCard.Card.customerGalaxPayId?**: `number`

• **args.body.PaymentMethodCreditCard.Card.customerMyId?**: `string`

• **args.body.PaymentMethodCreditCard.Card.cvv?**: `string`

• **args.body.PaymentMethodCreditCard.Card.expiresAt?**: `string`

• **args.body.PaymentMethodCreditCard.Card.galaxPayId?**: `number`

• **args.body.PaymentMethodCreditCard.Card.holder?**: `string`

• **args.body.PaymentMethodCreditCard.Card.myId?**: `string`

• **args.body.PaymentMethodCreditCard.Card.number?**: `string`

• **args.body.PaymentMethodCreditCard.Card.updatedAt?**: `string`

• **args.body.PaymentMethodCreditCard.cardOperatorId?**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`

• **args.body.PaymentMethodCreditCard.preAuthorize?**: `boolean`

• **args.body.PaymentMethodPix?**

• **args.body.PaymentMethodPix.Deadline?**

• **args.body.PaymentMethodPix.Deadline.type?**: `"days"`

• **args.body.PaymentMethodPix.Deadline.value?**: `number`

• **args.body.PaymentMethodPix.fine?**: `number`

• **args.body.PaymentMethodPix.instructions?**: `string`

• **args.body.PaymentMethodPix.interest?**: `number`

• **args.body.additionalInfo?**: `string`

• **args.body.mainPaymentMethodId**: `"pix"` \| `"creditcard"` \| `"boleto"`

• **args.body.myId**: `string`

• **args.body.payday**: `string`

• **args.body.payedOutsideGalaxPay?**: `boolean`

• **args.body.planMyId?**: `string`

• **args.body.value**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object`\>

##### list()

> **list**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.query**

• **args.query.createdAtFrom?**: `string`

• **args.query.createdAtTo?**: `string`

• **args.query.customerGalaxPayIds?**: `number` \| `number`[]

• **args.query.customerMyIds?**: `string` \| `string`[]

• **args.query.galaxPayIds?**: `number` \| `number`[]

• **args.query.limit**: `number`

• **args.query.myIds?**: `string` \| `string`[]

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"`

• **args.query.startAt**: `number`

• **args.query.status?**: `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]

###### Returns

`Promise`\<`object` \| `object`\>

##### retry()

> **retry**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.chargeId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### reverse()

> **reverse**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.body.valueToReverse?**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.chargeId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### update()

> **update**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.additionalInfo?**: `string`

• **args.body.mainPaymentMethodId**: `"pix"` \| `"creditcard"` \| `"boleto"`

• **args.body.myId?**: `string`

• **args.body.payday?**: `string`

• **args.body.payedOutsideGalaxPay?**: `boolean`

• **args.body.planGalaxPayId?**: `string`

• **args.body.planMyId?**: `string`

• **args.body.value?**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.chargeId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

packages/core/dist/index.d.ts:43

***

### companies

> `get` **companies**(): `object`

#### Returns

`object`

##### balance

> **balance**: `RecursiveProxyObj`\<`object`, `object`\>

##### fees

> **fees**: `RecursiveProxyObj`\<`object`, `object`\>

##### subaccounts

> **subaccounts**: `RecursiveProxyObj`\<`object`, `object`\>

#### Source

packages/core/dist/index.d.ts:45

***

### customers

> `get` **customers**(): `object`

#### Returns

`object`

##### create()

> **create**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.Address**

• **args.body.Address.city**: `string`

• **args.body.Address.complement?**: `string`

• **args.body.Address.neighborhood**: `string`

• **args.body.Address.number**: `string`

• **args.body.Address.state**: `string`

• **args.body.Address.street**: `string`

• **args.body.Address.zipCode**: `string`

• **args.body.document**: `string`

• **args.body.emails**: `string`[]

• **args.body.invoiceHoldIss?**: `boolean`

• **args.body.municipalDocument?**: `string`

• **args.body.myId**: `string`

• **args.body.name**: `string`

• **args.body.phones?**: `number`[]

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object`\>

##### delete()

> **delete**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.customerId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### list()

> **list**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.query**

• **args.query.createdAtFrom?**: `string`

• **args.query.createdAtTo?**: `string`

• **args.query.createdOrUpdatedFrom?**: `string`

• **args.query.createdOrUpdatedTo?**: `string`

• **args.query.documents?**: `string` \| `string`[]

• **args.query.emails?**: `string` \| `string`[]

• **args.query.galaxPayIds?**: `number` \| `number`[]

• **args.query.limit**: `number`

• **args.query.myIds?**: `string` \| `string`[]

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"updatedAt.asc"` \| `"updatedAt.desc"`

• **args.query.startAt?**: `number`

• **args.query.status?**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"`

###### Returns

`Promise`\<`object` \| `object`\>

##### update()

> **update**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.Address**

• **args.body.Address.city**: `string`

• **args.body.Address.complement?**: `string`

• **args.body.Address.neighborhood**: `string`

• **args.body.Address.number**: `string`

• **args.body.Address.state**: `string`

• **args.body.Address.street**: `string`

• **args.body.Address.zipCode**: `string`

• **args.body.document**: `string`

• **args.body.emails**: `string`[]

• **args.body.invoiceHoldIss?**: `boolean`

• **args.body.municipalDocument?**: `string`

• **args.body.myId**: `string`

• **args.body.name**: `string`

• **args.body.phones?**: `number`[]

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.customerId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

packages/core/dist/index.d.ts:50

***

### pix

> `get` **pix**(): `object`

#### Returns

`object`

##### payment()

> **payment**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.desc?**: `string`

• **args.body.key**: `string`

• **args.body.type**: `"cpf"` \| `"cnpj"` \| `"email"` \| `"mobilePhone"` \| `"random"`

• **args.body.value**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

packages/core/dist/index.d.ts:46

***

### plans

> `get` **plans**(): `object`

#### Returns

`object`

##### create()

> **create**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.PlanPrices**: `object`[]

• **args.body.additionalInfo?**: `string`

• **args.body.myId**: `string`

• **args.body.name**: `string`

• **args.body.periodicity**: `"weekly"` \| `"biweekly"` \| `"monthly"` \| `"bimonthly"` \| `"quarterly"` \| `"biannual"` \| `"yearly"`

• **args.body.quantity**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object`\>

##### delete()

> **delete**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.planId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### list()

> **list**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.query**

• **args.query.createdAtFrom?**: `string`

• **args.query.createdAtOrUpdatedAtFrom?**: `string`

• **args.query.createdAtOrUpdatedAtTo?**: `string`

• **args.query.createdAtTo?**: `string`

• **args.query.galaxPayIds?**: `string` \| `string`[]

• **args.query.limit**: `number`

• **args.query.myIds?**: `string` \| `string`[]

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"updatedAt.asc"` \| `"updatedAt.desc"`

• **args.query.startAt**: `number`

• **args.query.status?**: `"active"` \| `"inactive"`

###### Returns

`Promise`\<`object` \| `object`\>

##### update()

> **update**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.body.PlanPrices?**: `object`[]

• **args.body.additionalInfo?**: `string`

• **args.body.myId?**: `string`

• **args.body.name?**: `string`

• **args.body.periodicity?**: `"weekly"` \| `"biweekly"` \| `"monthly"` \| `"bimonthly"` \| `"quarterly"` \| `"biannual"` \| `"yearly"`

• **args.body.quantity?**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.planId**: `string` \| `number`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

packages/core/dist/index.d.ts:49

***

### subscriptions

> `get` **subscriptions**(): `object`

#### Returns

`object`

##### cancel()

> **cancel**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.subscriptionId**: `string`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### create

> **create**: `RecursiveProxyObj`\<`object`, `object`\>

###### Type declaration

###### manual

> **manual**: `object`

###### manual.body

> **body**: `ZodObject`\<`Omit`\<`object`, `"planMyId"` \| `"planGalaxPayId"` \| `"firstPayDayDate"`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### manual.method

> **method**: `"POST"`

###### manual.path

> **path**: `"/subscriptions/manual"`

###### manual.responses

> **responses**: `object`

###### manual.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

###### withPlan

> **withPlan**: `object`

###### withPlan.body

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

###### withPlan.method

> **method**: `"POST"`

###### withPlan.path

> **path**: `"/subscriptions/"`

###### withPlan.responses

> **responses**: `object`

###### withPlan.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

###### withoutPlan

> **withoutPlan**: `object`

###### withoutPlan.body

> **body**: `ZodObject`\<`extendShape`\<`Omit`\<`object`, `"planMyId"` \| `"planGalaxPayId"`\>, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### withoutPlan.method

> **method**: `"POST"`

###### withoutPlan.path

> **path**: `"/subscriptions/"`

###### withoutPlan.responses

> **responses**: `object`

###### withoutPlan.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

##### list()

> **list**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.query**

• **args.query.createdAtFrom?**: `string`

• **args.query.createdAtOrUpdatedAtFrom?**: `string`

• **args.query.createdAtOrUpdatedAtTo?**: `string`

• **args.query.createdAtTo?**: `string`

• **args.query.customerGalaxPayIds?**: `string` \| `string`[]

• **args.query.customerMyIds?**: `string` \| `string`[]

• **args.query.galaxPayIds?**: `string` \| `string`[]

• **args.query.limit**: `number`

• **args.query.myIds?**: `string` \| `string`[]

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"updatedAt.asc"` \| `"updatedAt.desc"`

• **args.query.planGalaxPayIds?**: `string` \| `string`[]

• **args.query.planMyIds?**: `string` \| `string`[]

• **args.query.startAt**: `number`

• **args.query.status?**: `"active"` \| `"inactive"` \| `"canceled"` \| `"closed"` \| `"waitingPayment"` \| `"stopped"`

###### Returns

`Promise`\<`object` \| `object`\>

##### update

> **update**: `RecursiveProxyObj`\<`object`, `object`\>

###### Type declaration

###### info

> **info**: `object`

###### info.body

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

###### info.method

> **method**: `"PUT"`

###### info.path

> **path**: `"/subscriptions/:subscriptionId/:typeId"`

###### info.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

###### info.responses

> **responses**: `object`

###### info.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

###### payment

> **payment**: `object`

###### payment.body

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

###### payment.method

> **method**: `"PUT"`

###### payment.path

> **path**: `"/subscriptions/:subscriptionId/:typeId"`

###### payment.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

###### payment.responses

> **responses**: `object`

###### payment.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### type

> **type**: `ZodBoolean`

#### Source

packages/core/dist/index.d.ts:51

***

### transactions

> `get` **transactions**(): `object`

#### Returns

`object`

##### add()

> **add**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.InvoiceConfig**

• **args.body.InvoiceConfig.createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`

• **args.body.InvoiceConfig.description**: `string`

• **args.body.InvoiceConfig.galaxPaySubAccountId?**: `number`

• **args.body.InvoiceConfig.qtdDaysAfterPay?**: `number`

• **args.body.InvoiceConfig.qtdDaysBeforePayDay?**: `number`

• **args.body.InvoiceConfig.type**: `"onePerTransaction"` \| `"onlyOne"`

• **args.body.PaymentMethodCreditCard**

• **args.body.PaymentMethodCreditCard.Antifraud?**

• **args.body.PaymentMethodCreditCard.Antifraud.ip**: `string`

• **args.body.PaymentMethodCreditCard.Antifraud.sessionId**: `string`

• **args.body.PaymentMethodCreditCard.Card**

• **args.body.PaymentMethodCreditCard.Card.Brand?**

• **args.body.PaymentMethodCreditCard.Card.Brand.id?**: `string`

• **args.body.PaymentMethodCreditCard.Card.Brand.maxInstallment?**: `number`

• **args.body.PaymentMethodCreditCard.Card.Brand.name?**: `string`

• **args.body.PaymentMethodCreditCard.Card.Brand.operatorIds?**: `string`

• **args.body.PaymentMethodCreditCard.Card.createdAt?**: `string`

• **args.body.PaymentMethodCreditCard.Card.customerGalaxPayId?**: `number`

• **args.body.PaymentMethodCreditCard.Card.customerMyId?**: `string`

• **args.body.PaymentMethodCreditCard.Card.cvv?**: `string`

• **args.body.PaymentMethodCreditCard.Card.expiresAt?**: `string`

• **args.body.PaymentMethodCreditCard.Card.galaxPayId?**: `number`

• **args.body.PaymentMethodCreditCard.Card.holder?**: `string`

• **args.body.PaymentMethodCreditCard.Card.myId?**: `string`

• **args.body.PaymentMethodCreditCard.Card.number?**: `string`

• **args.body.PaymentMethodCreditCard.Card.updatedAt?**: `string`

• **args.body.PaymentMethodCreditCard.cardOperatorId?**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`

• **args.body.PaymentMethodCreditCard.preAuthorize?**: `boolean`

• **args.body.myId**: `string`

• **args.body.payday?**: `string`

• **args.body.payedOutsideGalaxPay?**: `boolean`

• **args.body.value?**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.subscriptionId**: `string`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### cancel()

> **cancel**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.transactionId**: `string`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### capture()

> **capture**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.transactionId**: `string`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### create()

> **create**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.InvoiceConfig?**

• **args.body.InvoiceConfig.createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`

• **args.body.InvoiceConfig.description**: `string`

• **args.body.InvoiceConfig.galaxPaySubAccountId?**: `number`

• **args.body.InvoiceConfig.qtdDaysAfterPay?**: `number`

• **args.body.InvoiceConfig.qtdDaysBeforePayDay?**: `number`

• **args.body.InvoiceConfig.type**: `"onePerTransaction"` \| `"onlyOne"`

• **args.body.PaymentMethodCreditCard**

• **args.body.PaymentMethodCreditCard.Antifraud?**

• **args.body.PaymentMethodCreditCard.Antifraud.ip**: `string`

• **args.body.PaymentMethodCreditCard.Antifraud.sessionId**: `string`

• **args.body.PaymentMethodCreditCard.Card**

• **args.body.PaymentMethodCreditCard.Card.Brand?**

• **args.body.PaymentMethodCreditCard.Card.Brand.id?**: `string`

• **args.body.PaymentMethodCreditCard.Card.Brand.maxInstallment?**: `number`

• **args.body.PaymentMethodCreditCard.Card.Brand.name?**: `string`

• **args.body.PaymentMethodCreditCard.Card.Brand.operatorIds?**: `string`

• **args.body.PaymentMethodCreditCard.Card.createdAt?**: `string`

• **args.body.PaymentMethodCreditCard.Card.customerGalaxPayId?**: `number`

• **args.body.PaymentMethodCreditCard.Card.customerMyId?**: `string`

• **args.body.PaymentMethodCreditCard.Card.cvv?**: `string`

• **args.body.PaymentMethodCreditCard.Card.expiresAt?**: `string`

• **args.body.PaymentMethodCreditCard.Card.galaxPayId?**: `number`

• **args.body.PaymentMethodCreditCard.Card.holder?**: `string`

• **args.body.PaymentMethodCreditCard.Card.myId?**: `string`

• **args.body.PaymentMethodCreditCard.Card.number?**: `string`

• **args.body.PaymentMethodCreditCard.Card.updatedAt?**: `string`

• **args.body.PaymentMethodCreditCard.cardOperatorId?**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`

• **args.body.PaymentMethodCreditCard.preAuthorize?**: `boolean`

• **args.body.additionalInfo?**: `string`

• **args.body.myId**: `string`

• **args.body.payday**: `string`

• **args.body.payedOutsideGalaxPay**: `boolean`

• **args.body.value**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.subscriptionId**: `string`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### list()

> **list**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.query**

• **args.query.chargeGalaxPayIds?**: `number` \| `number`[]

• **args.query.chargeMyIds?**: `string` \| `string`[]

• **args.query.createdAtFrom?**: `string`

• **args.query.createdAtTo?**: `string`

• **args.query.customerGalaxPayIds?**: `number` \| `number`[]

• **args.query.customerMyIds?**: `string` \| `string`[]

• **args.query.galaxPayIds?**: `number` \| `number`[]

• **args.query.limit**: `number`

• **args.query.myIds?**: `string` \| `string`[]

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"payday.asc"` \| `"payday.desc"`

• **args.query.payDayFrom?**: `string`

• **args.query.payDayTo?**: `string`

• **args.query.startAt**: `number`

• **args.query.status?**: `"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"` \| (`"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"`)[]

• **args.query.subscriptionGalaxPayIds?**: `number` \| `number`[]

• **args.query.updateStatusFrom?**: `string`

• **args.query.updateStatusTo?**: `string`

###### Returns

`Promise`\<`object` \| `object`\>

##### retry()

> **retry**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.transactionId**: `string`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### reverse()

> **reverse**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.body.valueToReverse?**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.transactionId**: `string`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

##### update()

> **update**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.additionalInfo?**: `string`

• **args.body.myId**: `string`

• **args.body.payday?**: `string`

• **args.body.payedOutsideGalaxPay?**: `boolean`

• **args.body.value?**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.subscriptionId**: `string`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

packages/core/dist/index.d.ts:48

***

### transfer

> `get` **transfer**(): `object`

#### Returns

`object`

##### internal()

> **internal**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.companyAccount**: `number`

• **args.body.companyDocument**: `string`

• **args.body.value**: `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

packages/core/dist/index.d.ts:47

## Methods

### getCachedAccessToken()

> `protected` **getCachedAccessToken**(): `Promise`\<`null` \| `string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Overrides

`CelCashServiceContract.getCachedAccessToken`

#### Source

[packages/adonis/src/client.ts:16](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/adonis/src/client.ts#L16)

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

[packages/adonis/src/client.ts:20](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/adonis/src/client.ts#L20)
