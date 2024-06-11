[**@cel_cash/core v2.2.0**](../../README.md) • **Docs**

***

[CelCash](../../../../packages.md) / [@cel\_cash/core](../../README.md) / [contract](../README.md) / auth

# Variable: auth

> `const` **auth**: `RecursivelyApplyOptions`\<`object`, `object`\>

## Type declaration

### token

> **token**: `object`

### token.body

> **body**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `authorizationBodySchema`

#### Type declaration

##### grant\_type

> **grant\_type**: `ZodEnum`\<[`"authorization_code"`, `"refresh_token"`]\>

##### scope

> **scope**: `ZodEffects`\<`ZodArray`\<`ZodEnum`\<[`"customers.read"`, `"customers.write"`, `"plans.read"`, `"plans.write"`, `"cards.read"`, `"cards.write"`, `"subscriptions.read"`, `"subscriptions.write"`, `"charges.read"`, `"charges.write"`, `"transactions.read"`, `"transactions.write"`]\>, `"many"`\>, `string`, (`"customers.read"` \| `"customers.write"` \| `"plans.read"` \| `"plans.write"` \| `"cards.read"` \| `"cards.write"` \| `"subscriptions.read"` \| `"subscriptions.write"` \| `"charges.read"` \| `"charges.write"` \| `"transactions.read"` \| `"transactions.write"` \| `"card-brands.read"` \| `"carnes.read"` \| `"boletos.read"` \| `"payment-methods.read"` \| `"webhooks.read"` \| `"pos.write"` \| `"releases.read"` \| `"antecipation.write"` \| `"antecipation.read"`)[]\>

### token.headers

> **headers**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\>

#### Type declaration

##### Authorization

> **Authorization**: `ZodString`

### token.method

> **method**: `"POST"` = `'POST'`

### token.path

> **path**: `"/token"` = `'/token'`

### token.responses

> **responses**: `object`

### token.responses.200

> **200**: `ZodObject`\<`object`, `"strip"`, `ZodTypeAny`, `object`, `object`\> = `authorizationResponseSchema`

#### Type declaration

##### access\_token

> **access\_token**: `ZodString`

##### expires\_in

> **expires\_in**: `ZodNumber`

##### scope

> **scope**: `ZodString`

##### token\_type

> **token\_type**: `ZodEnum`\<[`"Bearer"`]\>

## Source

[packages/core/src/contract/auth.ts:10](https://github.com/Pyxlab/celcash/blob/9e2eeefc75067a4b86d18d5bb144eb4446f097c2/packages/core/src/contract/auth.ts#L10)
