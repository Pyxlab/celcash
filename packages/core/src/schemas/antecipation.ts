import { z } from 'zod'
import { transformArrayToString } from '../utils/transform.js'

export const antecipationSchema = z.object({
    galaxPayId: z.coerce.number().describe('Id cel_cash da empresa'),
    companyGalaxPayId: z.coerce.number().describe('ID da empresa'),
    transactionsGalaxPayIds: z
        .union([z.array(z.coerce.number()), z.coerce.number()])
        .transform(transformArrayToString)
        .describe('Transações a serem antecipadas.'),
    totalValue: z.coerce.number().describe('Valor total das transações'),
    totalMdr: z.coerce.number().describe('Valor total das taxas'),
    averageDays: z.coerce
        .number()
        .describe('Média em dias das transações que serão antecipadas.'),
    totalAntecipateTax: z.coerce
        .number()
        .describe('Valor total de taxa de antecipação'),
    netValue: z.coerce.number().describe('Valor líquido'),
    cet: z.coerce
        .number()
        .describe('Custo Efetivo Total. A soma de todas as taxas juntas.'),
    uuid: z.coerce
        .string()
        .describe('Id gerado aleatoriamente para realizar a antecipação.'),
    done: z.enum(['F', 'T']).describe('Status da antecipação'),
    createdAtTo: z.string().describe('Data de criação final'),
    createdAtFrom: z.string().describe('Data de criação inicial'),
})

export const listarAntecipacoesParamsSchema = z
    .object({
        limit: z.coerce
            .number()
            .min(0)
            .max(100)
            .describe('Quantidade de registros por página'),
        startAt: z.coerce.number().optional().describe('Chave de paginação'),
        done: z.enum(['F', 'T']).optional().describe('Status da antecipação'),
        page: z.coerce.number().optional().describe('Número da página'),
        createdAtFrom: z
            .string()
            .optional()
            .describe('Data de criação inicial'),
        createdAtTo: z
            .string()

            .optional()
            .describe('Data de criação final'),
    })
    .refine(
        ({ page, startAt }) => {
            return page ? true : !!startAt
        },
        {
            message: 'page or startAt is required',
        },
    )

export const listarAntecipacoesResponseSchema = z.object({
    totalQtdFoundInPage: z.coerce
        .number()
        .describe('Total de registros encontrados'),
    Antecipation: z.array(antecipationSchema).describe('Lista de antecipações'),
})

export const simulatarAntecipacaoBodySchema = z.object({
    value: z.coerce
        .number()

        .describe(
            'Valor desejado para antecipar. O valor deverá ser em centavos.',
        ),
    transactionGalaxPayIds: z
        .union([z.array(z.coerce.number()), z.coerce.number()])
        .describe('Transações desejadas para antecipar.')
        .transform(transformArrayToString),
    brands: z
        .array(
            z.enum([
                'discover',
                'mastercard',
                'elo',
                'hipercard',
                'amex',
                'visa',
            ]),
        )
        .describe(
            'Bandeira do cartão. Informe apenas bandeiras e separe cada um por vírgula.',
        )
        .transform(transformArrayToString),
})

export const releasesSchema = z.object({
    galaxPayId: z.coerce.number().describe('Id cel_cash da empresa'),
    transactionGalaxPayId: z.coerce.number().describe('ID da transação'),
    createdAt: z.string().describe('Data de criação'),
    installment: z.coerce.number().describe('Número da parcela'),
    netValue: z.coerce.number().describe('Valor líquido'),
    grossValue: z.coerce.number().describe('Valor bruto'),
    expectedDate: z.string().describe('Data de vencimento'),
    daysAntecipation: z.coerce.number().describe('Dias para antecipação'),
    netValueAfterAntecipation: z.coerce
        .number()
        .describe('Valor líquido após antecipação'),
    taxValueAntecipation: z.coerce
        .number()
        .describe('Valor da taxa de antecipação'),
})

export const operationSummarySchema = z.object({
    grossTotal: z.coerce.number().describe('Valor total bruto'),
    mdr: z.coerce.number().describe('Valor total das taxas'),
    mdrTax: z.coerce.number().describe('Valor total das taxas'),
    averageDays: z.coerce
        .number()

        .describe('Média em dias das transações que serão antecipadas'),
    finalTax: z.coerce.number().describe('Valor total da taxa de antecipação'),
    cet: z.coerce
        .number()
        .describe('Custo Efetivo Total. A soma de todas as taxas juntas.'),
    netValue: z.coerce.number().describe('Valor líquido'),
})

export const simulatarAntecipacaoResponseSchema = z
    .object({
        type: z.boolean().describe('Simulação foi realizada com sucesso.'),
        Antecipation: antecipationSchema.describe('Antecipação'),
        Releases: z.array(releasesSchema).describe('Lista de transações'),
        OperationSummary: operationSummarySchema.describe('Resumo da operação'),
    })
    .describe('Simular antecipação Response')

export const anteciparBodySchema = z
    .object({
        antecipationUuid: z
            .string()
            .uuid()
            .describe('Uuid gerado ao simular a antecipação'),
    })
    .describe('Antecipar recebíveis Body')

export const anteciparResponseSchema = z
    .object({
        type: z.boolean(),
    })
    .describe(
        'Antecipar recebíveis Response: indica se a antecipação foi realizada com sucesso.',
    )
