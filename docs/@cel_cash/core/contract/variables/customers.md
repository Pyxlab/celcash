[**@cel_cash/core v2.1.5-1**](../../README.md) • **Docs**

***

[Packages Example](../../../../README.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / customers

# Variable: customers

> `const` **customers**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### create

> **create**: `object`

### create.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createCustomerBodySchema`

#### Type declaration

##### Address

> **Address**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `addressSchema`

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

##### document

> **document**: `ZodString`

##### emails

> **emails**: `ZodArray`\<`ZodString`, `"many"`\>

##### invoiceHoldIss

> **invoiceHoldIss**: `ZodOptional`\<`ZodBoolean`\>

##### municipalDocument

> **municipalDocument**: `ZodOptional`\<`ZodString`\>

##### myId

> **myId**: `ZodString`

##### name

> **name**: `ZodString`

##### phones

> **phones**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

### create.method

> **method**: `"POST"` = `'POST'`

### create.path

> **path**: `"/"` = `'/'`

### create.responses

> **responses**: `object`

### create.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createCustomerResponseSchema`

#### Type declaration

##### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `customerSchema`

##### type

> **type**: `ZodBoolean`

### delete

> **delete**: `object`

### delete.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

### delete.method

> **method**: `"DELETE"` = `'DELETE'`

### delete.path

> **path**: `"/:customerId/:typeId"` = `'/:customerId/:typeId'`

### delete.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### customerId

> **customerId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### delete.responses

> **responses**: `object`

### delete.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### type

> **type**: `ZodBoolean`

### list

> **list**: `object`

### list.method

> **method**: `"GET"` = `'GET'`

### list.path

> **path**: `"/"` = `'/'`

### list.query

> **query**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listCustomersParamsSchema`

#### Type declaration

##### createdAtFrom

> **createdAtFrom**: `ZodOptional`\<`ZodString`\>

##### createdAtTo

> **createdAtTo**: `ZodOptional`\<`ZodString`\>

##### createdOrUpdatedFrom

> **createdOrUpdatedFrom**: `ZodOptional`\<`ZodString`\>

##### createdOrUpdatedTo

> **createdOrUpdatedTo**: `ZodOptional`\<`ZodString`\>

##### documents

> **documents**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### emails

> **emails**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### galaxPayIds

> **galaxPayIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodNumber`, `"many"`\>, `ZodNumber`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `number` \| `number`[]\>

##### limit

> **limit**: `ZodNumber`

##### myIds

> **myIds**: `ZodEffects`\<`ZodOptional`\<`ZodUnion`\<[`ZodArray`\<`ZodString`, `"many"`\>, `ZodString`]\>\>, `undefined` \| `string` \| `number`, `undefined` \| `string` \| `string`[]\>

##### order

> **order**: `ZodOptional`\<`ZodEnum`\<[`"createdAt.asc"`, `"createdAt.desc"`, `"updatedAt.asc"`, `"updatedAt.desc"`]\>\>

##### startAt

> **startAt**: `ZodOptional`\<`ZodNumber`\>

##### status

> **status**: `ZodOptional`\<`ZodEnum`\<[`"active"`, `"delayed"`, `"inactive"`, `"withoutSubscriptionOrCharge"`]\>\>

### list.responses

> **responses**: `object`

### list.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `listCustomersResponseSchema`

#### Type declaration

##### Customers

> **Customers**: `ZodArray`\<`ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\>, `"many"`\>

##### totalQtdFoundInPage

> **totalQtdFoundInPage**: `ZodNumber`

### update

> **update**: `object`

### update.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createCustomerBodySchema`

#### Type declaration

##### Address

> **Address**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `addressSchema`

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

##### document

> **document**: `ZodString`

##### emails

> **emails**: `ZodArray`\<`ZodString`, `"many"`\>

##### invoiceHoldIss

> **invoiceHoldIss**: `ZodOptional`\<`ZodBoolean`\>

##### municipalDocument

> **municipalDocument**: `ZodOptional`\<`ZodString`\>

##### myId

> **myId**: `ZodString`

##### name

> **name**: `ZodString`

##### phones

> **phones**: `ZodOptional`\<`ZodArray`\<`ZodNumber`, `"many"`\>\>

### update.method

> **method**: `"PUT"` = `'PUT'`

### update.path

> **path**: `"/:customerId/:typeId"` = `'/:customerId/:typeId'`

### update.pathParams

> **pathParams**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### customerId

> **customerId**: `ZodUnion`\<[`ZodNumber`, `ZodString`]\>

##### typeId

> **typeId**: `ZodEnum`\<[`"galaxPayId"`, `"myId"`]\>

### update.responses

> **responses**: `object`

### update.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `createCustomerResponseSchema`

#### Type declaration

##### Customer

> **Customer**: `ZodObject`\<`extendShape`\<`object`, `object`\>, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `customerSchema`

##### type

> **type**: `ZodBoolean`

## Source

[packages/core/src/contract/customers.ts:12](https://github.com/Pyxlab/celcash/blob/a34e89ae69c9dcb41ba66226cb05c8c8b83b7cf4/packages/core/src/contract/customers.ts#L12)
