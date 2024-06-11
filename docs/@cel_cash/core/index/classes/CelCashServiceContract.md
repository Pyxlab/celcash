[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / CelCashServiceContract

# Class: `abstract` CelCashServiceContract

Abstract class representing the CelCash service contract.

## Constructors

### new CelCashServiceContract()

> **new CelCashServiceContract**(`config`, `logger`): [`CelCashServiceContract`](CelCashServiceContract.md)

Constructs a new instance of the CelCashServiceContract class.

#### Parameters

• **config**: [`Configure`](../../utils/type-aliases/Configure.md)

[Configure](https://pyxlab.github.io/celcash/@cel_cash/core/utils/types/Configure.html) - The configuration object for the CelCash service.

• **logger**: [`LoggingInterface`](../interfaces/LoggingInterface.md)

[LoggingInterface](../interfaces/LoggingInterface.md) - The logger object for logging.

#### Returns

[`CelCashServiceContract`](CelCashServiceContract.md)

#### Source

[packages/core/src/service.ts:72](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L72)

## Properties

### #cel\_cash\_base\_url

> `private` `readonly` **#cel\_cash\_base\_url**: `string`

#### Source

[packages/core/src/service.ts:61](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L61)

***

### #cel\_cash\_hash

> `private` `readonly` **#cel\_cash\_hash**: `string`

#### Source

[packages/core/src/service.ts:63](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L63)

***

### #cel\_cash\_id

> `private` `readonly` **#cel\_cash\_id**: `string` \| `number`

#### Source

[packages/core/src/service.ts:62](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L62)

***

### #config

> `private` `readonly` **#config**: [`CelCashServiceConfig`](../interfaces/CelCashServiceConfig.md)

#### Source

[packages/core/src/service.ts:65](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L65)

***

### CACHE

> `static` `readonly` **CACHE**: `object`

Cache constants for CelCash service.

#### ACCESS\_TOKEN

> `readonly` **ACCESS\_TOKEN**: `"cel_cash:access_token"` = `'cel_cash:access_token'`

#### ROOT

> `readonly` **ROOT**: `"cel_cash"` = `'cel_cash'`

#### Source

[packages/core/src/service.ts:56](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L56)

## Accessors

### antecipation

> `get` **antecipation**(): `object`

Gets the antecipation client.

#### Returns

`object`

The antecipation client.

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

[packages/core/src/service.ts:122](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L122)

***

### cards

> `get` **cards**(): `object`

Gets the cards client.

#### Examples

```ts
// List cards
const cards = await service.cards.list({
  query: {
    limit: 10,
    startAt: 0,
  },
})
```

```ts
// Create a card
const card = await service.create({
 body: {
     //...
 }
})
```

```ts
// Delete a card
const result = await service.delete({
      params: {
          cardId: 123,
          typeId: 'galaxPayId'
      }
  })
```

#### Returns

`object`

The cards client.

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

[packages/core/src/service.ts:159](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L159)

***

### chargebacks

> `get` **chargebacks**(): `object`

Gets the chargebacks client.

#### Returns

`object`

The chargebacks client.

#### Source

[packages/core/src/service.ts:175](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L175)

***

### charges

> `get` **charges**(): `object`

Gets the charges client.

#### Returns

`object`

The charges client.

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

[packages/core/src/service.ts:167](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L167)

***

### companies

> `get` **companies**(): `object`

Gets the companies client.

#### Returns

`object`

The companies client.

##### balance

> **balance**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`AppRouter`, `object`\>, `object`\>, `object`\>

##### fees

> **fees**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`AppRouter`, `object`\>, `object`\>, `object`\>

##### subaccounts

> **subaccounts**: `RecursiveProxyObj`\<`RecursivelyApplyOptions`\<`RecursivelyApplyOptions`\<`AppRouter`, `object`\>, `object`\>, `object`\>

#### Source

[packages/core/src/service.ts:183](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L183)

***

### customers

> `get` **customers**(): `object`

Gets the customers client.

#### Returns

`object`

The customers client.

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

[packages/core/src/service.ts:223](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L223)

***

### pix

> `get` **pix**(): `object`

Gets the pix client.

#### Returns

`object`

The pix client.

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

[packages/core/src/service.ts:191](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L191)

***

### plans

> `get` **plans**(): `object`

Gets the plans client.

#### Returns

`object`

The plans client.

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

[packages/core/src/service.ts:215](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L215)

***

### subscriptions

> `get` **subscriptions**(): `object`

Gets the subscriptions client.

#### Returns

`object`

The subscriptions client.

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

[packages/core/src/service.ts:231](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L231)

***

### transactions

> `get` **transactions**(): `object`

Gets the transactions client.

#### Returns

`object`

The transactions client.

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

[packages/core/src/service.ts:207](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L207)

***

### transfer

> `get` **transfer**(): `object`

Gets the transfer client.

#### Returns

`object`

The transfer client.

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

[packages/core/src/service.ts:199](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L199)

## Methods

### #getAccessToken()

> `private` **#getAccessToken**(): `Promise`\<`string`\>

Retrieves the access token.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the access token.

#### Throws

An error if there is an error retrieving the access token.

#### Source

[packages/core/src/service.ts:240](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L240)

***

### getCachedAccessToken()

> `protected` `abstract` **getCachedAccessToken**(): `Promise`\<`null` \| `string`\>

Retrieves the cached access token.

#### Returns

`Promise`\<`null` \| `string`\>

A promise that resolves to the cached access token, or null if not found.

#### Source

[packages/core/src/service.ts:105](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L105)

***

### setCachedAccessToken()

> `protected` `abstract` **setCachedAccessToken**(`value`, `expiresIn`): `Promise`\<`void`\>

Sets the cached access token.

#### Parameters

• **value**: `string`

The access token value to be cached.

• **expiresIn**: `number`

The expiration time of the access token.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the access token is successfully cached.

#### Source

[packages/core/src/service.ts:113](https://github.com/Pyxlab/celcash/blob/f7cdc752c29f8a0dcef033e212602412d2050afc/packages/core/src/service.ts#L113)
