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

export * from './service.js'

export const STATUS_PAGO = [
    'captured',
    'payedBoleto',
    'payedPix',
    'payExternal',
]
