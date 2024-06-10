import { z } from 'zod'
import { transformArrayToString } from '../utils/transform.js'

export const antecipationSchema = z.object({
    galaxPayId: z.number().int().describe('Id cel_cash da empresa'),
    companyGalaxPayId: z.number().int().describe('ID da empresa'),
    transactionsGalaxPayIds: z
        .string()
        .describe('Transações a serem antecipadas.'),
    totalValue: z.number().int().describe('Valor total das transações'),
    totalMdr: z.number().int().describe('Valor total das taxas'),
    averageDays: z
        .number()
        .int()
        .describe('Média em dias das transações que serão antecipadas.'),
    totalAntecipateTax: z
        .number()
        .int()
        .describe('Valor total de taxa de antecipação'),
    netValue: z.number().int().describe('Valor líquido'),
    cet: z
        .number()
        .int()
        .describe('Custo Efetivo Total. A soma de todas as taxas juntas.'),
    uuid: z
        .string()
        .describe('Id gerado aleatoriamente para realizar a antecipação.'),
    done: z.enum(['F', 'T']).describe('Status da antecipação'),
    createdAtTo: z.string().datetime().describe('Data de criação final'),
    createdAtFrom: z.string().datetime().describe('Data de criação inicial'),
})

export const listarAntecipacoesParamsSchema = z
    .object({
        limit: z.coerce
            .number()
            .min(0)
            .max(100)
            .describe('Quantidade de registros por página'),
        startAt: z.number().optional().describe('Chave de paginação'),
        done: z.enum(['F', 'T']).optional().describe('Status da antecipação'),
        page: z.number().int().optional().describe('Número da página'),
        createdAtFrom: z
            .string()
            .datetime()
            .optional()
            .describe('Data de criação inicial'),
        createdAtTo: z
            .string()
            .datetime()
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
    totalQtdFoundInPage: z
        .number()
        .int()
        .describe('Total de registros encontrados'),
    Antecipation: z.array(antecipationSchema).describe('Lista de antecipações'),
})

export const simulatarAntecipacaoBodySchema = z.object({
    value: z
        .number()
        .int()
        .describe(
            'Valor desejado para antecipar. O valor deverá ser em centavos.',
        ),
    transactionGalaxPayIds: z
        .array(z.number().int())
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
    galaxPayId: z.number().int().describe('Id cel_cash da empresa'),
    transactionGalaxPayId: z.number().int().describe('ID da transação'),
    createdAt: z.string().datetime().describe('Data de criação'),
    installment: z.number().int().describe('Número da parcela'),
    netValue: z.number().int().describe('Valor líquido'),
    grossValue: z.number().int().describe('Valor bruto'),
    expectedDate: z.string().datetime().describe('Data de vencimento'),
    daysAntecipation: z.number().int().describe('Dias para antecipação'),
    netValueAfterAntecipation: z
        .number()
        .int()
        .describe('Valor líquido após antecipação'),
    taxValueAntecipation: z
        .number()
        .int()
        .describe('Valor da taxa de antecipação'),
})

export const operationSummarySchema = z.object({
    grossTotal: z.number().int().describe('Valor total bruto'),
    mdr: z.number().int().describe('Valor total das taxas'),
    mdrTax: z.number().int().describe('Valor total das taxas'),
    averageDays: z
        .number()
        .int()
        .describe('Média em dias das transações que serão antecipadas'),
    finalTax: z.number().int().describe('Valor total da taxa de antecipação'),
    cet: z
        .number()
        .int()
        .describe('Custo Efetivo Total. A soma de todas as taxas juntas.'),
    netValue: z.number().int().describe('Valor líquido'),
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
