**@cel_cash/client v2.2.0** • [**Docs**](globals.md)

***

[CelCash](../../packages.md) / @cel\_cash/client

# @cel_cash/client

This package provides a client to interact with the CelCash API.

## Installation

```bash
npm install @cel_cash/core @cel_cash/client
```

## Usage

Import `initCelCashClient` from `@cel_cash/client` and initialize the client with base url, ID and HASH.

```typescript
import { initCelCashClient } from '@cel_cash/client'

const cel_cash = initCelCashClient({
  BASE_URL: 'https://api.sandbox.cloud.galaxpay.com.br/v2', // base url
  ID: '5473', // Your client
  HASH: '83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe' // Your secret
})

const plans = await cel_cash.plans.list({
  query: {
    limit: 10,
    startAt: 0,
    status: 'active',
    order: 'createdAt.desc'
  }
})
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
