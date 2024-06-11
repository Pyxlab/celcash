[**@cel_cash/nestjs v2.2.0**](../README.md) • **Docs**

***

[CelCash](../../../packages.md) / [@cel\_cash/nestjs](../README.md) / CelCashModuleAsyncOptions

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

[packages/nest/src/interfaces/cel\_cash-module-options.interface.ts:44](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/nest/src/interfaces/cel_cash-module-options.interface.ts#L44)

***

### isGlobal?

> `optional` **isGlobal**: `boolean`

#### Source

[packages/nest/src/interfaces/cel\_cash-module-options.interface.ts:42](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/nest/src/interfaces/cel_cash-module-options.interface.ts#L42)

***

### useFactory

> **useFactory**: [`CelcashUseFactory`](../type-aliases/CelcashUseFactory.md)

#### Source

[packages/nest/src/interfaces/cel\_cash-module-options.interface.ts:43](https://github.com/Pyxlab/celcash/blob/b57c7034bd65dcd5b083f272f9cfe6cc4ff73f7b/packages/nest/src/interfaces/cel_cash-module-options.interface.ts#L43)
