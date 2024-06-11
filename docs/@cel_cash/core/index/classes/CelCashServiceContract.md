[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CelCashServiceContract

# Class: `abstract` CelCashServiceContract

## Constructors

### new CelCashServiceContract()

> **new CelCashServiceContract**(`config`, `logger`): [`CelCashServiceContract`](CelCashServiceContract.md)

#### Parameters

• **config**: [`Configure`](../../utils/type-aliases/Configure.md)

• **logger**: [`loggingInterface`](../interfaces/loggingInterface.md)

#### Returns

[`CelCashServiceContract`](CelCashServiceContract.md)

#### Source

[packages/core/src/service.ts:61](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L61)

## Properties

### #cel\_cash\_base\_url

> `private` `readonly` **#cel\_cash\_base\_url**: `string`

#### Source

[packages/core/src/service.ts:55](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L55)

***

### #cel\_cash\_hash

> `private` `readonly` **#cel\_cash\_hash**: `string`

#### Source

[packages/core/src/service.ts:57](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L57)

***

### #cel\_cash\_id

> `private` `readonly` **#cel\_cash\_id**: `string` \| `number`

#### Source

[packages/core/src/service.ts:56](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L56)

***

### #config

> `private` `readonly` **#config**: [`CelCashServiceConfig`](../interfaces/CelCashServiceConfig.md)

#### Source

[packages/core/src/service.ts:59](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L59)

***

### CACHE

> `static` `readonly` **CACHE**: `object`

#### ACCESS\_TOKEN

> `readonly` **ACCESS\_TOKEN**: `"cel_cash:access_token"` = `'cel_cash:access_token'`

#### ROOT

> `readonly` **ROOT**: `"cel_cash"` = `'cel_cash'`

#### Source

[packages/core/src/service.ts:50](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L50)

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

• **args.body.antecipationUuid**: `string`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object` \| `object`\>

##### simulate

> **simulate**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:96](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L96)

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

• **args.body.cvv**: `string`= `undefined`

• **args.body.expiresAt**: `string`= `undefined`

• **args.body.holder**: `string`= `undefined`

• **args.body.myId**: `string`= `undefined`

• **args.body.number**: `string`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.customerId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

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

• **args.params.cardId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

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

• **args.query.createdAtFrom?**: `string`= `undefined`

• **args.query.createdAtTo?**: `string`= `undefined`

• **args.query.customerGalaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.customerMyIds?**: `string` \| `string`[]= `undefined`

• **args.query.galaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.limit**: `number`= `undefined`

• **args.query.myIds?**: `string` \| `string`[]= `undefined`

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"`= `undefined`

• **args.query.startAt**: `number`= `undefined`

• **args.query.status?**: `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]= `undefined`

###### Returns

`Promise`\<`object` \| `object` \| `object`\>

#### Source

[packages/core/src/service.ts:100](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L100)

***

### chargebacks

> `get` **chargebacks**(): `object`

#### Returns

`object`

#### Source

[packages/core/src/service.ts:108](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L108)

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

• **args.params.chargeId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

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

• **args.params.chargeId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### create()

> **create**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.Customer**= `undefined`

• **args.body.Customer.Address?**= `addressSchema`

• **args.body.Customer.Address.city?**: `string`= `undefined`

• **args.body.Customer.Address.complement?**: `string`= `undefined`

• **args.body.Customer.Address.neighborhood?**: `string`= `undefined`

• **args.body.Customer.Address.number?**: `string`= `undefined`

• **args.body.Customer.Address.state?**: `string`= `undefined`

• **args.body.Customer.Address.street?**: `string`= `undefined`

• **args.body.Customer.Address.zipCode?**: `string`= `undefined`

• **args.body.Customer.createdAt?**: `string`= `undefined`

• **args.body.Customer.document?**: `string`= `undefined`

• **args.body.Customer.emails?**: `string`[]= `undefined`

• **args.body.Customer.galaPayId?**: `number`= `undefined`

• **args.body.Customer.invoiceHoldIss?**: `boolean`= `undefined`

• **args.body.Customer.municipalDocument?**: `string`= `undefined`

• **args.body.Customer.myId?**: `string`= `undefined`

• **args.body.Customer.name?**: `string`= `undefined`

• **args.body.Customer.phones?**: `number`[]= `undefined`

• **args.body.Customer.status?**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"`= `statusCustomerSchema`

• **args.body.Customer.updatedAt?**: `string`= `undefined`

• **args.body.PaymentMethodBoleto?**= `undefined`

• **args.body.PaymentMethodBoleto.Aggrement?**= `undefined`

• **args.body.PaymentMethodBoleto.Aggrement.document?**: `string`= `undefined`

• **args.body.PaymentMethodBoleto.Aggrement.name?**: `string`= `undefined`

• **args.body.PaymentMethodBoleto.deadlineDays?**: `number`= `undefined`

• **args.body.PaymentMethodBoleto.documentNumber?**: `string`= `undefined`

• **args.body.PaymentMethodBoleto.fine?**: `number`= `undefined`

• **args.body.PaymentMethodBoleto.instructions?**: `string`= `undefined`

• **args.body.PaymentMethodBoleto.interest?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard?**= `undefined`

• **args.body.PaymentMethodCreditCard.Antifraud?**= `undefined`

• **args.body.PaymentMethodCreditCard.Antifraud.ip**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Antifraud.sessionId**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card**= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand?**= `brandSchema`

• **args.body.PaymentMethodCreditCard.Card.Brand.id?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.maxInstallment?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.name?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.operatorIds?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.createdAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.customerGalaxPayId?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.customerMyId?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.cvv?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.expiresAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.galaxPayId?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.holder?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.myId?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.number?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.updatedAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.cardOperatorId?**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`= `undefined`

• **args.body.PaymentMethodCreditCard.preAuthorize?**: `boolean`= `undefined`

• **args.body.PaymentMethodPix?**= `undefined`

• **args.body.PaymentMethodPix.Deadline?**= `undefined`

• **args.body.PaymentMethodPix.Deadline.type?**: `"days"`= `undefined`

• **args.body.PaymentMethodPix.Deadline.value?**: `number`= `undefined`

• **args.body.PaymentMethodPix.fine?**: `number`= `undefined`

• **args.body.PaymentMethodPix.instructions?**: `string`= `undefined`

• **args.body.PaymentMethodPix.interest?**: `number`= `undefined`

• **args.body.additionalInfo?**: `string`= `undefined`

• **args.body.mainPaymentMethodId**: `"creditcard"` \| `"boleto"` \| `"pix"`= `mainPaymentMethodIdSchema`

• **args.body.myId**: `string`= `undefined`

• **args.body.payday**: `string`= `undefined`

• **args.body.payedOutsideGalaxPay?**: `boolean`= `undefined`

• **args.body.planMyId?**: `string`= `undefined`

• **args.body.value**: `number`= `undefined`

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

• **args.query.createdAtFrom?**: `string`= `undefined`

• **args.query.createdAtTo?**: `string`= `undefined`

• **args.query.customerGalaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.customerMyIds?**: `string` \| `string`[]= `undefined`

• **args.query.galaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.limit**: `number`= `undefined`

• **args.query.myIds?**: `string` \| `string`[]= `undefined`

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"`= `undefined`

• **args.query.startAt**: `number`= `undefined`

• **args.query.status?**: `"active"` \| `"inactive"` \| (`"active"` \| `"inactive"`)[]= `undefined`

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

• **args.params.chargeId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### reverse()

> **reverse**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.body.valueToReverse?**: `number`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.chargeId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### update()

> **update**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.additionalInfo?**: `string`= `undefined`

• **args.body.mainPaymentMethodId**: `"creditcard"` \| `"boleto"` \| `"pix"`= `mainPaymentMethodIdSchema`

• **args.body.myId?**: `string`= `undefined`

• **args.body.payday?**: `string`= `undefined`

• **args.body.payedOutsideGalaxPay?**: `boolean`= `undefined`

• **args.body.planGalaxPayId?**: `string`= `undefined`

• **args.body.planMyId?**: `string`= `undefined`

• **args.body.value?**: `number`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.chargeId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

[packages/core/src/service.ts:104](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L104)

***

### companies

> `get` **companies**(): `object`

#### Returns

`object`

##### balance

> **balance**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`AppRouter`, `object`\>, `object`\>, `object`\>

##### fees

> **fees**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`AppRouter`, `object`\>, `object`\>, `object`\>

##### subaccounts

> **subaccounts**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`AppRouter`, `object`\>, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:112](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L112)

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

• **args.body.Address**= `addressSchema`

• **args.body.Address.city**: `string`= `undefined`

• **args.body.Address.complement?**: `string`= `undefined`

• **args.body.Address.neighborhood**: `string`= `undefined`

• **args.body.Address.number**: `string`= `undefined`

• **args.body.Address.state**: `string`= `undefined`

• **args.body.Address.street**: `string`= `undefined`

• **args.body.Address.zipCode**: `string`= `undefined`

• **args.body.document**: `string`= `undefined`

• **args.body.emails**: `string`[]= `undefined`

• **args.body.invoiceHoldIss?**: `boolean`= `undefined`

• **args.body.municipalDocument?**: `string`= `undefined`

• **args.body.myId**: `string`= `undefined`

• **args.body.name**: `string`= `undefined`

• **args.body.phones?**: `number`[]= `undefined`

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

• **args.params.customerId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

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

• **args.query.createdAtFrom?**: `string`= `undefined`

• **args.query.createdAtTo?**: `string`= `undefined`

• **args.query.createdOrUpdatedFrom?**: `string`= `undefined`

• **args.query.createdOrUpdatedTo?**: `string`= `undefined`

• **args.query.documents?**: `string` \| `string`[]= `undefined`

• **args.query.emails?**: `string` \| `string`[]= `undefined`

• **args.query.galaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.limit**: `number`= `undefined`

• **args.query.myIds?**: `string` \| `string`[]= `undefined`

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"updatedAt.asc"` \| `"updatedAt.desc"`= `undefined`

• **args.query.startAt?**: `number`= `undefined`

• **args.query.status?**: `"active"` \| `"inactive"` \| `"delayed"` \| `"withoutSubscriptionOrCharge"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### update()

> **update**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.Address**= `addressSchema`

• **args.body.Address.city**: `string`= `undefined`

• **args.body.Address.complement?**: `string`= `undefined`

• **args.body.Address.neighborhood**: `string`= `undefined`

• **args.body.Address.number**: `string`= `undefined`

• **args.body.Address.state**: `string`= `undefined`

• **args.body.Address.street**: `string`= `undefined`

• **args.body.Address.zipCode**: `string`= `undefined`

• **args.body.document**: `string`= `undefined`

• **args.body.emails**: `string`[]= `undefined`

• **args.body.invoiceHoldIss?**: `boolean`= `undefined`

• **args.body.municipalDocument?**: `string`= `undefined`

• **args.body.myId**: `string`= `undefined`

• **args.body.name**: `string`= `undefined`

• **args.body.phones?**: `number`[]= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.customerId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

[packages/core/src/service.ts:136](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L136)

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

• **args.body.desc?**: `string`= `undefined`

• **args.body.key**: `string`= `undefined`

• **args.body.type**: `"cpf"` \| `"cnpj"` \| `"email"` \| `"mobilePhone"` \| `"random"`= `undefined`

• **args.body.value**: `number`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

[packages/core/src/service.ts:116](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L116)

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

• **args.body.PlanPrices**: `object`[]= `undefined`

• **args.body.additionalInfo?**: `string`= `undefined`

• **args.body.myId**: `string`= `undefined`

• **args.body.name**: `string`= `undefined`

• **args.body.periodicity**: `"weekly"` \| `"biweekly"` \| `"monthly"` \| `"bimonthly"` \| `"quarterly"` \| `"biannual"` \| `"yearly"`= `periodicitySchema`

• **args.body.quantity**: `number`= `undefined`

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

• **args.params.planId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

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

• **args.query.createdAtFrom?**: `string`= `undefined`

• **args.query.createdAtOrUpdatedAtFrom?**: `string`= `undefined`

• **args.query.createdAtOrUpdatedAtTo?**: `string`= `undefined`

• **args.query.createdAtTo?**: `string`= `undefined`

• **args.query.galaxPayIds?**: `string` \| `string`[]= `undefined`

• **args.query.limit**: `number`= `undefined`

• **args.query.myIds?**: `string` \| `string`[]= `undefined`

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"updatedAt.asc"` \| `"updatedAt.desc"`= `undefined`

• **args.query.startAt**: `number`= `undefined`

• **args.query.status?**: `"active"` \| `"inactive"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### update()

> **update**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.body.PlanPrices?**: `object`[]= `undefined`

• **args.body.additionalInfo?**: `string`= `undefined`

• **args.body.myId?**: `string`= `undefined`

• **args.body.name?**: `string`= `undefined`

• **args.body.periodicity?**: `"weekly"` \| `"biweekly"` \| `"monthly"` \| `"bimonthly"` \| `"quarterly"` \| `"biannual"` \| `"yearly"`= `periodicitySchema`

• **args.body.quantity?**: `number`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.planId**: `string` \| `number`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

[packages/core/src/service.ts:132](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L132)

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

• **args.params.subscriptionId**: `string`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### create

> **create**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>, `object`\>

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

• **args.query.createdAtFrom?**: `string`= `undefined`

• **args.query.createdAtOrUpdatedAtFrom?**: `string`= `undefined`

• **args.query.createdAtOrUpdatedAtTo?**: `string`= `undefined`

• **args.query.createdAtTo?**: `string`= `undefined`

• **args.query.customerGalaxPayIds?**: `string` \| `string`[]= `undefined`

• **args.query.customerMyIds?**: `string` \| `string`[]= `undefined`

• **args.query.galaxPayIds?**: `string` \| `string`[]= `undefined`

• **args.query.limit**: `number`= `undefined`

• **args.query.myIds?**: `string` \| `string`[]= `undefined`

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"updatedAt.asc"` \| `"updatedAt.desc"`= `undefined`

• **args.query.planGalaxPayIds?**: `string` \| `string`[]= `undefined`

• **args.query.planMyIds?**: `string` \| `string`[]= `undefined`

• **args.query.startAt**: `number`= `undefined`

• **args.query.status?**: `"active"` \| `"inactive"` \| `"canceled"` \| `"closed"` \| `"stopped"` \| `"waitingPayment"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### update

> **update**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`object`, `object`\>, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:140](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L140)

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

• **args.body.InvoiceConfig**= `invoiceConfigSchema`

• **args.body.InvoiceConfig.createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`= `undefined`

• **args.body.InvoiceConfig.description**: `string`= `undefined`

• **args.body.InvoiceConfig.galaxPaySubAccountId?**: `number`= `undefined`

• **args.body.InvoiceConfig.qtdDaysAfterPay?**: `number`= `undefined`

• **args.body.InvoiceConfig.qtdDaysBeforePayDay?**: `number`= `undefined`

• **args.body.InvoiceConfig.type**: `"onePerTransaction"` \| `"onlyOne"`= `invoiceConfigTypeSchema`

• **args.body.PaymentMethodCreditCard**= `paymentMethodCreditCardSchema`

• **args.body.PaymentMethodCreditCard.Antifraud?**= `undefined`

• **args.body.PaymentMethodCreditCard.Antifraud.ip**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Antifraud.sessionId**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card**= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand?**= `brandSchema`

• **args.body.PaymentMethodCreditCard.Card.Brand.id?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.maxInstallment?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.name?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.operatorIds?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.createdAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.customerGalaxPayId?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.customerMyId?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.cvv?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.expiresAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.galaxPayId?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.holder?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.myId?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.number?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.updatedAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.cardOperatorId?**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`= `undefined`

• **args.body.PaymentMethodCreditCard.preAuthorize?**: `boolean`= `undefined`

• **args.body.myId**: `string`= `undefined`

• **args.body.payday?**: `string`= `undefined`

• **args.body.payedOutsideGalaxPay?**: `boolean`= `undefined`

• **args.body.value?**: `number`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.subscriptionId**: `string`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

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

• **args.params.transactionId**: `string`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

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

• **args.params.transactionId**: `string`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### create()

> **create**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.InvoiceConfig?**= `undefined`

• **args.body.InvoiceConfig.createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`= `undefined`

• **args.body.InvoiceConfig.description**: `string`= `undefined`

• **args.body.InvoiceConfig.galaxPaySubAccountId?**: `number`= `undefined`

• **args.body.InvoiceConfig.qtdDaysAfterPay?**: `number`= `undefined`

• **args.body.InvoiceConfig.qtdDaysBeforePayDay?**: `number`= `undefined`

• **args.body.InvoiceConfig.type**: `"onePerTransaction"` \| `"onlyOne"`= `invoiceConfigTypeSchema`

• **args.body.PaymentMethodCreditCard**= `paymentMethodCreditCardSchema`

• **args.body.PaymentMethodCreditCard.Antifraud?**= `undefined`

• **args.body.PaymentMethodCreditCard.Antifraud.ip**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Antifraud.sessionId**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card**= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand?**= `brandSchema`

• **args.body.PaymentMethodCreditCard.Card.Brand.id?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.maxInstallment?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.name?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.Brand.operatorIds?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.createdAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.customerGalaxPayId?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.customerMyId?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.cvv?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.expiresAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.galaxPayId?**: `number`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.holder?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.myId?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.number?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.Card.updatedAt?**: `string`= `undefined`

• **args.body.PaymentMethodCreditCard.cardOperatorId?**: `"bin"` \| `"cielo"` \| `"getnet"` \| `"getnetNew"` \| `"globalpayments"` \| `"pagseguro"` \| `"rede"` \| `"zoop"` \| `"galaxpay"` \| `"adyen"` \| `"stone"`= `undefined`

• **args.body.PaymentMethodCreditCard.preAuthorize?**: `boolean`= `undefined`

• **args.body.additionalInfo?**: `string`= `undefined`

• **args.body.myId**: `string`= `undefined`

• **args.body.payday**: `string`= `undefined`

• **args.body.payedOutsideGalaxPay**: `boolean`= `undefined`

• **args.body.value**: `number`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.subscriptionId**: `string`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

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

• **args.query.chargeGalaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.chargeMyIds?**: `string` \| `string`[]= `undefined`

• **args.query.createdAtFrom?**: `string`= `undefined`

• **args.query.createdAtTo?**: `string`= `undefined`

• **args.query.customerGalaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.customerMyIds?**: `string` \| `string`[]= `undefined`

• **args.query.galaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.limit**: `number`= `undefined`

• **args.query.myIds?**: `string` \| `string`[]= `undefined`

• **args.query.order?**: `"createdAt.asc"` \| `"createdAt.desc"` \| `"payday.asc"` \| `"payday.desc"`= `undefined`

• **args.query.payDayFrom?**: `string`= `undefined`

• **args.query.payDayTo?**: `string`= `undefined`

• **args.query.startAt**: `number`= `undefined`

• **args.query.status?**: `"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"` \| (`"cancel"` \| `"noSend"` \| `"authorized"` \| `"captured"` \| `"denied"` \| `"reversed"` \| `"chargeback"` \| `"pendingBoleto"` \| `"payedBoleto"` \| `"notCompensated"` \| `"lessValueBoleto"` \| `"moreValueBoleto"` \| `"paidDuplicityBoleto"` \| `"pendingPix"` \| `"payedPix"` \| `"unavailablePix"` \| `"payExternal"` \| `"cancelByContract"` \| `"free"`)[]= `undefined`

• **args.query.subscriptionGalaxPayIds?**: `number` \| `number`[]= `undefined`

• **args.query.updateStatusFrom?**: `string`= `undefined`

• **args.query.updateStatusTo?**: `string`= `undefined`

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

• **args.params.transactionId**: `string`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### reverse()

> **reverse**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body?**

• **args.body.valueToReverse?**: `number`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.transactionId**: `string`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

##### update()

> **update**: (`args`) => `Promise`\<`object` \| `object`\>

###### Parameters

• **args**

• **args.body**

• **args.body.additionalInfo**: `undefined` \| `string`

• **args.body.myId**: `string`

• **args.body.payday**: `undefined` \| `string`

• **args.body.payedOutsideGalaxPay**: `undefined` \| `boolean`

• **args.body.value**: `undefined` \| `number`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

• **args.params**

• **args.params.subscriptionId**: `string`= `undefined`

• **args.params.typeId**: `"galaxPayId"` \| `"myId"`= `undefined`

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

[packages/core/src/service.ts:124](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L124)

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

• **args.body.companyAccount**: `number`= `undefined`

• **args.body.companyDocument**: `string`= `undefined`

• **args.body.value**: `number`= `undefined`

• **args.cache?**: `any`

**Deprecated**

Use `fetchOptions.cache` instead

• **args.extraHeaders?**: `Record`\<`string`, `undefined` \| `string`\>

• **args.fetchOptions?**: `FetchOptions`

• **args.overrideClientOptions?**: `Partial`\<`OverrideableClientArgs`\>

###### Returns

`Promise`\<`object` \| `object`\>

#### Source

[packages/core/src/service.ts:120](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L120)

## Methods

### #getAccessToken()

> `private` **#getAccessToken**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Source

[packages/core/src/service.ts:144](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L144)

***

### getCachedAccessToken()

> `protected` `abstract` **getCachedAccessToken**(): `Promise`\<`null` \| `string`\>

#### Returns

`Promise`\<`null` \| `string`\>

#### Source

[packages/core/src/service.ts:90](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L90)

***

### setCachedAccessToken()

> `protected` `abstract` **setCachedAccessToken**(`value`, `expiresIn`): `Promise`\<`void`\>

#### Parameters

• **value**: `string`

• **expiresIn**: `number`

#### Returns

`Promise`\<`void`\>

#### Source

[packages/core/src/service.ts:91](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/service.ts#L91)
