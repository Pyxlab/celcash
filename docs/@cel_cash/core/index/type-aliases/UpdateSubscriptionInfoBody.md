[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / UpdateSubscriptionInfoBody

# Type alias: UpdateSubscriptionInfoBody

> **UpdateSubscriptionInfoBody**: `object`

## Type declaration

### ExtraFields?

> `optional` **ExtraFields**: `object`[]

### InvoiceConfig?

> `optional` **InvoiceConfig**: `object`

### InvoiceConfig.createOn

> **createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`

### InvoiceConfig.description

> **description**: `string`

### InvoiceConfig.galaxPaySubAccountId?

> `optional` **galaxPaySubAccountId**: `number`

### InvoiceConfig.qtdDaysAfterPay?

> `optional` **qtdDaysAfterPay**: `number`

### InvoiceConfig.qtdDaysBeforePayDay?

> `optional` **qtdDaysBeforePayDay**: `number`

### InvoiceConfig.type

> **type**: `"onePerTransaction"` \| `"onlyOne"` = `invoiceConfigTypeSchema`

### Split?

> `optional` **Split**: `object`

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

### additionalInfo?

> `optional` **additionalInfo**: `string`

### myId?

> `optional` **myId**: `string`

### planGalaxPayId?

> `optional` **planGalaxPayId**: `number`

### planMyId?

> `optional` **planMyId**: `string`

## Source

[packages/core/src/schemas/subscriptions.ts:215](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/schemas/subscriptions.ts#L215)
