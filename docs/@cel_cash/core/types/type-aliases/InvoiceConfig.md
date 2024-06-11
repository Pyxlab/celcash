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

[packages/core/src/types.ts:102](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/types.ts#L102)
