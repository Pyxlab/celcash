import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { listMandatoryDocumentsResponseSchema, sendMandatoryDocumentsResponseSchema, sendMandatoryDocumentsCpfRequestSchema, listSubAccountsResponseSchema, listSubAccountsParamsSchema, createSubAccounResponseSchema, createSubAccountCpfBodySchema, createSubAccountCnpjBodySchema, updateSubAccountResponseSchema, updateSubAccountsBodySchema } from '../../schemas/companies/subaccounts.js';

const c = initContract();

/**
 * Defines the subaccounts router object.
 *
 * @example
 * ```ts
 * import { initClient } from '@ts-rest/core'
 * import { subaccounts } from '@cel_cash/core/contract'
 *
 * const client = initClient(subaccounts, {
 *   baseUrl: 'https://api.celcoin.com.br'
 * })
 *
 * const subaccountsList = await client.list({ ... })
 * const createdSubaccount = await client.createWithCnpj({ ... })
 * const updatedSubaccount = await client.update({ ... })
 * const deletedSubaccount = await client.delete({ ... })
 * ```
 */
export const subaccounts = c.router({
  /**
   * Retrieves a list of mandatory documents.
   * Require access_token to have company.read scope.
   *
   * @method GET
   * @path /company/mandatory-documents
   * @responses 200 - The list of mandatory documents.
   */
  listMandatoryDocuments: {
    method: 'GET',
    path: '/mandatory-documents',
    responses: {
      200: listMandatoryDocumentsResponseSchema,
    },
  },
  /**
   * Sends mandatory documents with CPF.
   * Require access_token to have company.write scope.
   *
   * @method POST
   * @path /company/mandatory-documents
   * @responses 200 - If succeeded or not.
   * @body - The request body for sending mandatory documents.
   */
  sendMandatoryDocumentsCpf: {
    method: 'POST',
    path: '/mandatory-documents',
    responses: {
      200: sendMandatoryDocumentsResponseSchema,
    },
    body: sendMandatoryDocumentsCpfRequestSchema,
  },
  /**
   * Creates a new mandatory documents with CNPJ.
   * Require access_token to have company.write scope.
   *
   * @method POST
   * @path /company/mandatory-documents
   * @responses 200 - If succeeded or not.
   * @body - The request body for sending mandatory documents.
   */
  sendMandatoryDocumentsCnpj: {
    method: 'POST',
    path: '/mandatory-documents',
    responses: {
      200: sendMandatoryDocumentsResponseSchema,
    },
    body: sendMandatoryDocumentsCpfRequestSchema,
  },
  /**
   * Retrieves a list of subAccounts.
   * Require access_token to have company.read scope.
   *
   * @method GET
   * @path /company/subaccount
   * @responses 200 - The list of subAccounts.
   * @query - The query parameters for listing subAccounts.
   */
  list: {
    method: 'GET',
    path: '/subaccounts',
    responses: {
      200: listSubAccountsResponseSchema,
    },
    query: listSubAccountsParamsSchema,
  },
  /**
   * Creates a new subAccount with CPF.
   * Require access_token to have company.write scope.
   *
   * @method POST
   * @path /company/subaccount
   * @responses 200 - The created company subAccount.
   * @body - The request body for creating a subAccount.
   */
  createWithCpf: {
    method: 'POST',
    path: '/subaccount',
    responses: {
      200: createSubAccounResponseSchema,
    },
    body: createSubAccountCpfBodySchema,
  },
  /**
   * Creates a new subAccount with CNPJ.
   * Require access_token to have company.write scope.
   *
   * @method POST
   * @path /company/subaccount
   * @responses 200 - The created company subAccount.
   * @body - The request body for creating a subAccount.
   */
  createWithCnpj: {
    method: 'POST',
    path: '/subaccount',
    responses: {
      200: createSubAccounResponseSchema,
    },
    body: createSubAccountCnpjBodySchema,
  },
  /**
   * Updates a subAccount.
   * Require access_token to have company.write scope.
   *
   * @method PUT
   * @path /company/subaccount/:subAccountId/:typeId
   * @pathParams - The path parameters for updating a subAccount.
   * @responses 200 - The updated subAccount.
   * @body - The request body for updating a subAccount.
   */
  update: {
    method: 'PUT',
    path: '/subaccount/:subAccountId',
    pathParams: z.object({
      subAccountId: z.union([z.coerce.number().positive(), z.coerce.string()]),
    }),
    responses: {
      200: updateSubAccountResponseSchema,
    },
    body: updateSubAccountsBodySchema,
  },
  /**
   * Reactivate a subAccount.
   * Require access_token to have company.write scope.
   *
   * @method PUT
   * @path /company/subaccount/active/:subAccountId
   * @pathParams - The path parameters for updating a subAccount.
   * @responses 200 - The updated subAccount.
   * @body - The request body for updating a subAccount.
   */
  active: {
    method: 'PUT',
    path: '/subaccount/active/:subAccountId',
    pathParams: z.object({
      subAccountId: z.union([z.coerce.number().positive(), z.coerce.string()]),
    }),
    responses: {
      200: updateSubAccountResponseSchema,
    },
    body: updateSubAccountsBodySchema,
  },
  /**
   * Deletes a subAccount.
   * Require access_token to have company.write scope.
   *
   * @method DELETE
   * @path /company/subaccount/:subAccountId/:typeId
   * @pathParams - The path parameters for deleting a subAccount.
   * @responses 200 - The deletion status.
   * @body - An empty object.
   */
  delete: {
    method: 'DELETE',
    path: '/subaccount/:subAccountId',
    pathParams: z.object({
      subAccountId: z.union([z.coerce.number().positive(), z.coerce.string()]),
    }),
    responses: {
      200: z.object({
        type: z.boolean(),
      }),
    },
    body: c.noBody(),
  },
});
