import { initContract } from '@ts-rest/core'

const c = initContract()

export const subaccounts = c.router(
    {
        // Todo: Listar Subcontas
        // Todo: Obter Documentos Necessários
        // Todo: Criar Subconta CPF
        // Todo: Criar Subconta CNPJ
        // Todo: Enviar Documentos Necessários CPF
        // Todo: Enviar Documentos Necessários CNPJ
        // Todo: Editar Subconta
        // Todo: Reativar Subconta
        // Todo: Desativar Subconta
    },
    {
        pathPrefix: '/subaccounts',
    },
)
