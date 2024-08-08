import { z } from 'zod'
import {
    addressSchema,
    apiAuthSchema,
    professionalSchema,
    verificationSchema,
} from '../../schemas/common.js'
import { transformArrayToString } from '../../utils/transform.js'
import {
    companyBaseSchema,
    configBaseSchema,
    userBaseSchema,
} from './common.js'
export const listSubAccountsParamsSchema = z.object({
    galaxPayIds: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    documents: z
        .union([z.array(z.coerce.string()), z.coerce.string()])
        .optional()
        .transform(transformArrayToString),
    limit: z.coerce.number().min(0).max(100),
    startAt: z.coerce.number(),
    order: z
        .enum([
            'createdAt.asc',
            'createdAt.desc',
            'galaxPayId.asc',
            'galaxPayId.desc',
        ])
        .optional(),
})

export type ListSubAccountsParams = z.input<typeof listSubAccountsParamsSchema>

export const createSubAccountBaseSchema = z.object({
    name: z.string(),
    document: z.string(),
    phone: z.string(),
    emailContact: z.string(),
    logo: z.string().optional(),
    canAccessPlatform: z.boolean().optional(),
    softDescriptor: z.string(),
    Address: addressSchema,
})

export const createSubAccountCpfBodySchema = createSubAccountBaseSchema.extend({
    Professional: professionalSchema,
})

export const createSubAccountCnpjBodySchema = createSubAccountBaseSchema.extend(
    {
        responsibleDocument: z.string(),
        typeCompany: z.enum([
            'ltda',
            'eireli',
            'association',
            'individualEntrepreneur',
            'mei',
            'sa',
            'slu',
        ]),
        cnae: z.string(),
    },
)

export const createSubAccounResponseSchema = z.object({
    type: z.boolean(),
    Company: z.object({
        galaxPayId: z.number(),
        galaxHash: z.string(),
        name: z.string(),
        document: z.string(),
        nameDisplay: z.string(),
        active: z.boolean(),
        emailContact: z.string(),
        urlLogo: z.string(),
        publicToken: z.string(),
        canAccessPlatform: z.boolean(),
        createdAt: z.string(),
        updatedAt: z.string(),
        Address: addressSchema,
        Professional: professionalSchema,
        ApiAuth: apiAuthSchema,
        Verification: verificationSchema,
    }),
})

export const subAccountsSchema = createSubAccountCpfBodySchema.extend({
    galaxPayId: z.coerce.number(),
})

export const listSubAccountsResponseSchema = z.object({
    totalQtdFoundInPage: z.coerce.number(),
    SubAccounts: z.array(subAccountsSchema),
})

export type ListSubAccountsResponse = z.input<
    typeof listSubAccountsResponseSchema
>

export type CreateSubAccountsCpfBody = z.input<
    typeof createSubAccountCpfBodySchema
>
export type CreateSubAccountsCnpjBody = z.input<
    typeof createSubAccountCnpjBodySchema
>

export type CreateSubAccountsResponse = z.input<
    typeof createSubAccounResponseSchema
>

export const updateSubAccountsBodySchema = z.object({
    Address: addressSchema,
    logo: z.string(),
    canAccessPlatform: z.boolean(),
})

export const updateSubAccountResponseSchema = z.object({
    type: z.boolean(),
    Company: companyBaseSchema.extend({
        galaxHash: z.string(),
        publicToken: z.string(),
        Users: z.array(userBaseSchema),
        BoletoDays: z.array(z.object({ day: z.number(), value: z.number() })),
        Config: configBaseSchema,
    }),
})

export const listMandatoryDocumentsResponseSchema = z.object({
    type: z.boolean(),
    Info: z.object({
        Fields: z.object({ name: z.string(), description: z.string() }),
        Associate: z.array(
            z.object({ name: z.string(), description: z.string() }),
        ),
        Documents: z.object({
            Company: z.object({ name: z.string(), description: z.string() }),
            Personal: z.object({
                CNH: z.array(
                    z.object({ name: z.string(), description: z.string() }),
                ),
                RG: z.array(
                    z.object({ name: z.string(), description: z.string() }),
                ),
            }),
        }),
    }),
})

export const sendMandatoryDocumentsCpfRequestSchema = z.object({
    Fields: z.object({
        motherName: z.string(),
        birthDate: z.string(),
        monthlyIncome: z.number(),
        about: z.string(),
        socialMediaLink: z.string(),
    }),
    Documents: z.object({
        Personal: z.object({
            CNH: z.object({
                selfie: z.string(),
                picture: z.array(z.string()),
                address: z.string(),
            }),
            RG: z.object({
                selfie: z.string(),
                front: z.string(),
                back: z.string(),
                address: z.string(),
            }),
        }),
    }),
})

export const sendMandatoryDocumentsCnpjRequestSchema = z.object({
    Fields: z.object({
        monthlyIncome: z.number(),
        about: z.string(),
        socialMediaLink: z.string(),
    }),
    Associate: z.array(
        z.object({
            document: z.string(),
            name: z.string(),
            motherName: z.string(),
            birthDate: z.string(),
            type: z.string(),
        }),
    ),
    Documents: z.object({
        Company: z.object({
            lastContract: z.string(),
            cnpjCard: z.string(),
            electionRecord: z.string(),
            statute: z.string(),
        }),
        Personal: z.object({
            CNH: z.object({ selfie: z.string(), picture: z.array(z.string()) }),
            RG: z.object({
                selfie: z.string(),
                front: z.string(),
                back: z.string(),
            }),
        }),
    }),
})

export const sendMandatoryDocumentsResponseSchema = z.object({
    type: z.boolean(),
})
