[**@cel_cash/nestjs v2.1.5**](../README.md) • **Docs**

***

[CelCash](../../../README.md) / [@cel\_cash/nestjs](../README.md) / CelCashModuleAsyncOptions

# Interface: CelCashModuleAsyncOptions

## Extends

- `Pick`\<`ModuleMetadata`, `"imports"`\>

## Properties

### imports?

> `optional` **imports**: (`Type`\<`any`\> \| `DynamicModule` \| `Promise`\<`DynamicModule`\> \| `ForwardReference`\<`any`\>)[]

Optional list of imported modules that export the providers which are
required in this module.

#### Inherited from

`Pick.imports`

#### Source

node\_modules/.pnpm/@nestjs+common@10.3.8\_reflect-metadata@0.1.14\_rxjs@7.8.1/node\_modules/@nestjs/common/interfaces/modules/module-metadata.interface.d.ts:18

***

### inject?

> `optional` **inject**: `any`[]

#### Source

[packages/nest/src/interfaces/cel\_cash-module-options.interface.ts:44](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/nest/src/interfaces/cel_cash-module-options.interface.ts#L44)

***

### isGlobal?

> `optional` **isGlobal**: `boolean`

#### Source

[packages/nest/src/interfaces/cel\_cash-module-options.interface.ts:42](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/nest/src/interfaces/cel_cash-module-options.interface.ts#L42)

***

### useFactory

> **useFactory**: [`CelcashUseFactory`](../type-aliases/CelcashUseFactory.md)

#### Source

[packages/nest/src/interfaces/cel\_cash-module-options.interface.ts:43](https://github.com/Pyxlab/celcash/blob/9dbc7013720b05f34ded33140fbf1d827b403eea/packages/nest/src/interfaces/cel_cash-module-options.interface.ts#L43)
