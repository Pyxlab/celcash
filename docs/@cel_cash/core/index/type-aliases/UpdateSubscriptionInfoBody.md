[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [index](../README.md) / UpdateSubscriptionInfoBody

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

[packages/core/src/schemas/subscriptions.ts:211](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/schemas/subscriptions.ts#L211)
