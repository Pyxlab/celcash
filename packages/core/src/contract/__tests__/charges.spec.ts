import { randomUUID } from 'node:crypto'
import { initClient } from '@ts-rest/core'
import { beforeEach, describe, it } from 'vitest'
import { api } from '../../utils/api'
import { charges } from '../charges'
import { Client, authenticate } from './_utils'

let client: Client<typeof charges>

beforeEach(async () => {
    const { access_token } = await authenticate()
    const authorization = `Bearer ${access_token}`
    client = initClient(charges, {
        baseUrl: 'https://api.sandbox.cel.cash/v2',
        api: args =>
            api({
                ...args,
                headers: {
                    ...args.headers,
                    Authorization: authorization,
                },
            }),
    })
})

describe.concurrent('Charges', () => {
    it('should have the correct methods', ({ expect }) => {
        expect(client).toHaveProperty('list')
        expect(client).toHaveProperty('create')
        expect(client).toHaveProperty('update')
        expect(client).toHaveProperty('retry')
        expect(client).toHaveProperty('reverse')
        expect(client).toHaveProperty('capture')
        expect(client).toHaveProperty('cancel')
    })

    it('should list charges', async ({ expect }) => {
        const response = await client.list({
            query: {
                limit: 10,
                startAt: 10,
                status: 'active',
            },
        })

        expect(response.status).toBe(200)
    })

    it('should create a charge', async ({ expect }) => {
        const response = await client.create({
            body: {
                myId: randomUUID(),
                payday: '2024-06-08',
                value: 1000,
                mainPaymentMethodId: 'creditcard',
                PaymentMethodCreditCard: {
                    Card: {
                        myId: '15935a54-5638-4c6f-a599-57e03bc799ff',
                        number: '4111 1111 1111 1111',
                        holder: 'JOAO J J DA SILVA',
                        expiresAt: '2024-06',
                        cvv: '363',
                    },
                },
                Customer: {
                    myId: '67b9f7e0-5995-4608-b5e0-83bd4db4d127',
                    name: 'Lorem ipsum dolor sit amet.',
                    document: '70932058523',
                    emails: [
                        'teste6446email5323@galaxpay.com.br',
                        'teste7839email8838@galaxpay.com.br',
                    ],
                    phones: [3140201512, 31983890110],
                    Address: {
                        zipCode: '30411330',
                        street: 'Rua platina',
                        number: '1330',
                        complement: '2º andar',
                        neighborhood: 'Prado',
                        city: 'Belo Horizonte',
                        state: 'MG',
                    },
                },
            },
        })

        expect(response.status).toBe(200)
    })

    it('should update a charge', async ({ expect }) => {
        const charge = await client.create({
            body: {
                myId: randomUUID(),
                payday: '2024-06-08',
                value: 1000,
                mainPaymentMethodId: 'creditcard',
                PaymentMethodCreditCard: {
                    Card: {
                        myId: '15935a54-5638-4c6f-a599-57e03bc799ff',
                        number: '4111 1111 1111 1111',
                        holder: 'JOAO J J DA SILVA',
                        expiresAt: '2024-06',
                        cvv: '363',
                    },
                },
                Customer: {
                    myId: '67b9f7e0-5995-4608-b5e0-83bd4db4d127',
                    name: 'Lorem ipsum dolor sit amet.',
                    document: '70932058523',
                    emails: [
                        'teste6446email5323@galaxpay.com.br',
                        'teste7839email8838@galaxpay.com.br',
                    ],
                    phones: [3140201512, 31983890110],
                    Address: {
                        zipCode: '30411330',
                        street: 'Rua platina',
                        number: '1330',
                        complement: '2º andar',
                        neighborhood: 'Prado',
                        city: 'Belo Horizonte',
                        state: 'MG',
                    },
                },
            },
        })

        if (charge.status !== 200) return

        const response = await client.update({
            params: {
                chargeId: charge.body.Charge.myId!,
                typeId: 'myId',
            },
            body: {
                mainPaymentMethodId: 'boleto',
            },
        })

        expect(response.status).toBe(200)
    })

    it('should retry a charge', async ({ expect }) => {
        const charge = await client.create({
            body: {
                myId: randomUUID(),
                payday: '2024-06-08',
                value: 1000,
                mainPaymentMethodId: 'creditcard',
                PaymentMethodCreditCard: {
                    Card: {
                        myId: randomUUID(),
                        number: '4211 1111 1111 1111',
                        holder: 'JOAO J J DA SILVA',
                        expiresAt: '2024-06',
                        cvv: '363',
                    },
                },
                Customer: {
                    myId: '67b9f7e0-5995-4608-b5e0-83bd4db4d127',
                    name: 'Lorem ipsum dolor sit amet.',
                    document: '70932058523',
                    emails: [
                        'teste6446email5323@galaxpay.com.br',
                        'teste7839email8838@galaxpay.com.br',
                    ],
                    phones: [3140201512, 31983890110],
                    Address: {
                        zipCode: '30411330',
                        street: 'Rua platina',
                        number: '1330',
                        complement: '2º andar',
                        neighborhood: 'Prado',
                        city: 'Belo Horizonte',
                        state: 'MG',
                    },
                },
            },
        })


        if (charge.status !== 200) return

        console.log(charge.body.Charge)

        const response = await client.retry({
            params: {
                chargeId: charge.body.Charge.myId!,
                typeId: 'myId',
            },
            body: {},
        })

        expect(response.status).toBe(404)
    })
})
