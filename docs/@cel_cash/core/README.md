**@cel_cash/core v2.1.5-1** • [**Docs**](modules.md)

***

[Packages Example](../../README.md) / @cel\_cash/core

# @cel_cash/core

This package contains the core logic of the CelCash project built with [ts-rest]("https://ts-rest.com/docs/intro"). It is responsible for managing the business rules and the data access layer.

## Installation

To install this package, you need to run the following command:

```bash
npm install @ts-rest/core @cel_cash/core
```

## Usage

This package contains the contract with the cel_cash api and the validation schemas made with zod and typos.

### Contract

This package contains the contracts with the cel_cash api.

```typescript
import { initClient, initContract } from '@ts-rest/core'
import { 
  antecipation,
  auth,
  cards,
  chargebacks,
  charges,
  companies,
  customers,
  plans,
  subscriptions,
  transactions,
  pix,
  transfer
} from '@cel_cash/contracts'

const c = initContract()

export const contract = c.router(
  {
    subscriptions,
    antecipation,
    chargebacks,
    companies,
    pix,
    transfer,
    customers,
    plans,
    transactions,
    charges,
    auth,
  },
  {
    pathPrefix: '',
  },
)

const client = initClient(contract, {
  baseUrl: baseURL,
  baseHeaders: {},
})

const plans = await client.getPlans({...})
```

### Validation

This package contains the schemas used in the project.

```typescript
import { createCardBodySchema } from '@cel_cash/core/schemas'

const body = {
    myId: "123",
    number: "4111111111111111",
    holder: "John Doe",
    expiresAt: "12/2023",
    cvv: "123",
}

const data = createCardBodySchema.parse(body)
```

### Types

This package also contains the types used in the project.

```typescript
import { Plan } from '@cel_cash/core/types'

const plan: Plan = {
    galaxId: 1,
    myId: "123",
    name: "Plan gold",
    periodicity: 'monthly',
    quantity: 1,
    additionalInfo: "test",
    PlanPrices: [{
      payment: 'boleto',
      value: 10000,
    }],
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
