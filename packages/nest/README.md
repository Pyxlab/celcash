# @cel_cash/nestjs

This package provides a NestJS module to interact with the CelCash API.

## Installation

```bash
npm install @cel_cash/core @cel_cash/nestjs
```

## Usage

Import `CelCashModule` from `@cel_cash/nestjs` and initialize the module with base url, ID and HASH.

```typescript
import { Module } from '@nestjs/common'
import { CelCashModule } from '@cel_cash/nestjs'

@Module({
  imports: [
    CelCashModule.forRoot({
      BASE_URL: 'https://api.sandbox.cloud.galaxpay.com.br/v2', // base url
      ID: '5473', // Your client
      HASH: '83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe' // Your secret
    })
  ]
})
export class AppModule {}
```

Now you can inject the `CelCashService` in your services or controllers.

```typescript
import { Injectable } from '@nestjs/common'
import { ListPlansParams } from '@cel_cash/core'
import { CelCashService } from '@cel_cash/nestjs'

@Injectable()
export class PlansService {
  constructor(private readonly cel_cash: CelCashService) {}

  async list(params: ListPlansParams) {
    return this.cel_cash.plans.list({
      query: {
        limit: 10,
        startAt: 0,
        status: 'active',
        order: 'createdAt.desc',
        ...params,
      }
    })
  }
}
```

## Contributing

Thank you for being interested in making this package better. We encourage everyone to help improve this project with new features, bug fixes, or performance improvements. Please take a little bit of your time to read our guide to make this process faster and easier.

### Contribution Guidelines

To understand how to submit an issue, commit and create pull requests, check our [Contribution Guidelines](/.github/CONTRIBUTING.md).

### Code of Conduct

We expect you to follow our [Code of Conduct](/.github/CODE_OF_CONDUCT.md). You can read it to understand what kind of behavior will and will not be tolerated.

## License

MIT License © [Pyxlab](https://github.com/Pyxlab)

<div align="center">
  <sub>Built with ❤︎ by <a href="https://github.com/lncitador">Walaff Fernandes</a>
</div>
