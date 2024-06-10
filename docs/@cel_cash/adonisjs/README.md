**@cel_cash/adonisjs v2.1.5-1** • [**Docs**](modules.md)

***

[CelCash](../../README.md) / @cel\_cash/adonisjs

# @cel_cash/adonisjs

This package provides an AdonisJS provider to interact with the CelCash API.

## Installation

```bash
node ace add @cel_cash/adonisjs
```

## Configuration

Add the following configuration to your `.env` file:

```bash
CEL_CASH_BASE_URL=https://api.sandbox.cloud.galaxpay.com.br/v2
CEL_CASH_ID=5473
CEL_CASH_HASH=83Mw5u8988Qj6fZqS4Z8K7LzOo1j28S706R0BeFe
```

## Usage

Import service from `@cel_cash/adonisjs/services/main`

```typescript
import celcash from '@cel_cash/adonisjs/services/main'

const plans = await celcash.plans.list({
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
