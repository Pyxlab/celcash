[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [types](../README.md) / InvoiceConfig

# Type alias: InvoiceConfig

> **InvoiceConfig**: `object`

## Type declaration

### createOn

> **createOn**: `"payment"` \| `"daysBeforePayDay"` \| `"notificationSend"` \| `"daysAfterPayment"`

### description

> **description**: `string`

### galaxPaySubAccountId?

> `optional` **galaxPaySubAccountId**: `number`

### qtdDaysAfterPay?

> `optional` **qtdDaysAfterPay**: `number`

### qtdDaysBeforePayDay?

> `optional` **qtdDaysBeforePayDay**: `number`

### type

> **type**: `"onePerTransaction"` \| `"onlyOne"` = `invoiceConfigTypeSchema`

## Source

[packages/core/src/types.ts:102](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/core/src/types.ts#L102)
