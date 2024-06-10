[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / subscriptions

# Variable: subscriptions

> `const` **subscriptions**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### cancel

> **cancel**: `object`

### cancel.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `emptySchema`

### cancel.method

> **method**: `"DELETE"` = `'DELETE'`

### cancel.path

> **path**: `"/:subscriptionId/:typeId"` = `'/:subscriptionId/:typeId'`

### cancel.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### subscriptionId

> **subscriptionId**: `ZodString`

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### cancel.responses

> **responses**: `object`

### cancel.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `cancelSubscriptionResponseSchema`

#### Type declaration

##### type

> **type**: `ZodBoolean`

### create

> **create**: `RecursivelyApplyOptions`\<`object`, `object`\>

#### Type declaration

##### manual

> **manual**: `object`

##### manual.body

> **body**: `ZodObject`\<`Omit`\<`object`, `"planMyId"` \| `"planGalaxPayId"` \| `"firstPayDayDate"`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createSubscriptionManualBodySchema`

##### manual.method

> **method**: `"POST"` = `'POST'`

##### manual.path

> **path**: `"/manual"` = `'/manual'`

##### manual.responses

> **responses**: `object`

##### manual.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createSubscriptionResponseSchema`

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `subscriptionSchema`

###### type

> **type**: `ZodBoolean`

##### withPlan

> **withPlan**: `object`

##### withPlan.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createSubscriptionWithPlanBodySchema`

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

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

###### myId

> **myId**: `ZodString`

###### planGalaxPayId

> **planGalaxPayId**: `ZodNumber`

###### planMyId

> **planMyId**: `ZodString`

##### withPlan.method

> **method**: `"POST"` = `'POST'`

##### withPlan.path

> **path**: `"/"` = `'/'`

##### withPlan.responses

> **responses**: `object`

##### withPlan.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createSubscriptionResponseSchema`

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `subscriptionSchema`

###### type

> **type**: `ZodBoolean`

##### withoutPlan

> **withoutPlan**: `object`

##### withoutPlan.body

> **body**: `ZodObject`\<`extendShape`\<`Omit`\<`object`, `"planMyId"` \| `"planGalaxPayId"`\>, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createSubscriptionWithotPlanBodySchema`

##### withoutPlan.method

> **method**: `"POST"` = `'POST'`

##### withoutPlan.path

> **path**: `"/"` = `'/'`

##### withoutPlan.responses

> **responses**: `object`

##### withoutPlan.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createSubscriptionResponseSchema`

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `subscriptionSchema`

###### type

> **type**: `ZodBoolean`

### list

> **list**: `object`

### list.method

> **method**: `"GET"` = `'GET'`

### list.path

> **path**: `"/"` = `'/'`

### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listSubscriptionsParamsSchema`

#### Type declaration

##### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

##### createdAtOrUpdatedAtFrom

> **createdAtOrUpdatedAtFrom**: `ZodOptional`\<`ZodString`\>

##### createdAtOrUpdatedAtTo

> **createdAtOrUpdatedAtTo**: `ZodOptional`\<`ZodString`\>

##### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

##### customerGalaxPayIds

> **customerGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### customerMyIds

> **customerMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### limit

> **limit**: `ZodNumber`

##### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"updatedAt.asc"`, `"updatedAt.desc"`]\>\>

##### planGalaxPayIds

> **planGalaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### planMyIds

> **planMyIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### startAt

> **startAt**: `ZodNumber`

##### status

> **status**: `ZodOptional`\<`ZodEnum`\<[`"active"`, `"canceled"`, `"closed"`, `"stopped"`, `"waitingPayment"`, `"inactive"`]\>\>

### list.responses

> **responses**: `object`

### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listSubscriptionsResponseSchema`

#### Type declaration

##### Subscriptions

> **Subscriptions**: `ZodArray`\<`ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

### update

> **update**: `RecursivelyApplyOptions`\<`object`, `object`\>

#### Type declaration

##### info

> **info**: `object`

##### info.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `updateSubscriptionInfoBodySchema`

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

##### info.method

> **method**: `"PUT"` = `'PUT'`

##### info.path

> **path**: `"/:subscriptionId/:typeId"` = `'/:subscriptionId/:typeId'`

##### info.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### info.responses

> **responses**: `object`

##### info.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createSubscriptionResponseSchema`

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `subscriptionSchema`

###### type

> **type**: `ZodBoolean`

##### payment

> **payment**: `object`

##### payment.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `updateSubscriptionPaymentBodySchema`

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

> **mainPaymentMethodId**: `ZodEnum`\<[`"creditcard"`, `"boleto"`, `"pix"`]\> = `mainPaymentMethodIdSchema`

###### value

> **value**: `ZodNumber`

##### payment.method

> **method**: `"PUT"` = `'PUT'`

##### payment.path

> **path**: `"/:subscriptionId/:typeId"` = `'/:subscriptionId/:typeId'`

##### payment.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

###### Type declaration

###### subscriptionId

> **subscriptionId**: `ZodString`

###### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

##### payment.responses

> **responses**: `object`

##### payment.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createSubscriptionResponseSchema`

###### Type declaration

###### Subscription

> **Subscription**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `subscriptionSchema`

###### type

> **type**: `ZodBoolean`

## Source

[packages/core/src/contract/subscriptions.ts:18](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/contract/subscriptions.ts#L18)
