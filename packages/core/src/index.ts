export type {
    AuthorizationBody,
    AuthorizationResponse,
    CancelSubscriptionResponse,
    CreateAntifraud,
    CreateCardBody,
    CreateCardResponse,
    CreateCustomerResponse,
    CreatePlanBody,
    CreatePlanResponse,
    CreateSubscriptionManualBody,
    CreateSubscriptionWithPlanBody,
    CreateSubscriptionWithPlanResponse,
    CreateSubscriptionWithoutPlanBody,
    CreateOrUpdateTransactionResponse,
    Empty,
    ListCardsResponse,
    ListCustomersResponse,
    ListPlanResponse,
    ListPlansParams,
    PixPaymentBody,
    PixPaymentResponse,
    TransferInternalBody,
    TransferInternalResponse,
    UpdateTransactionBody,
    UpdateSubscriptionInfoBody,
    UpdateSubscriptionPaymentBody,
} from './schemas/index.js'

export type { Client } from './types.js'
export type { Configure } from './utils/types.js'
export type { Method } from './utils/api.js'
export type { Contract } from './contract/index.js'

export * from './service.js'

export const STATUS_PAGO = [
    'captured',
    'payedBoleto',
    'payedPix',
    'payExternal',
]
