import { z } from 'zod';
import { addressSchema } from '../common.js';

export const professionalSchema = z.object({
  internalName: z.enum([
    'lawyer',
    'doctor',
    'accountant',
    'realtor',
    'broker',
    'physicalEducator',
    'physiotherapist',
    'others',
  ]),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
});

export const apiAuthSchema = z.object({
  galaxId: z.string(),
  galaxHash: z.string(),
  publicToken: z.string(),
  confirmHashWebhook: z.string(),
});

export const verificationSchema = z.object({
  status: z.string(),
  Reasons: z.array(z.string()),
});

export const configBaseSchema = z.object({
  confirmHashWebhook: z.string(),
  taxWithdraw: z.number(),
  taxPixDone: z.number(),
  taxPixBoleto: z.number(),
  taxPixReceived: z.number(),
  taxPixTransaction: z.number(),
});

export const userBaseSchema = z.object({
  galaxPayId: z.number(),
  master: z.boolean(),
  email: z.string(),
  name: z.string(),
  document: z.string(),
  phone: z.string(),
});

export const companyBaseSchema = z.object({
  galaxPayId: z.number(),
  name: z.string(),
  document: z.string(),
  nameDisplay: z.string(),
  active: z.boolean(),
  emailContact: z.string(),
  urlLogo: z.string(),
  createdAt: z.string(),
  canAccessPlatform: z.boolean(),
  updatedAt: z.string(),
  Address: addressSchema,
  Professional: professionalSchema,
  ApiAuth: apiAuthSchema,
  Verification: verificationSchema,
});
