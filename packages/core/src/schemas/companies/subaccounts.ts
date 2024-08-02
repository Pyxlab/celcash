import { z } from 'zod';
import { transformArrayToString } from '../../utils';
import { periodicitySchema } from '../_/common';

export const planStatusSchema = z.enum(['active', 'inactive']);

export const listPlansParamsSchema = z.object({
  myIds: z
    .union([z.array(z.coerce.string()), z.coerce.string()])
    .optional()
    .transform(transformArrayToString),
  galaxPayIds: z
    .union([z.array(z.coerce.string()), z.coerce.string()])
    .optional()
    .transform(transformArrayToString),
  createdAtFrom: z.string().optional(),
  createdAtTo: z.string().optional(),
  createdAtOrUpdatedAtFrom: z.string().optional(),
  createdAtOrUpdatedAtTo: z.string().optional(),
  status: z.enum(['active', 'inactive']).optional(),
  startAt: z.coerce.number(),
  limit: z.coerce.number().min(0).max(100),
  order: z
    .enum([
      'createdAt.asc',
      'createdAt.desc',
      'updatedAt.asc',
      'updatedAt.desc',
    ])
    .optional(),
});

export const planPricesSchema = z.object({
  payment: z.enum(['creditcard', 'boleto']),
  value: z.coerce.number(),
});

export type PlanPrices = z.input<typeof planPricesSchema>;

export type ListPlansParams = z.input<typeof listPlansParamsSchema>;

export const createPlanBodySchema = z.object({
  myId: z.string(),
  name: z.string(),
  periodicity: periodicitySchema,
  quantity: z.coerce.number(),
  additionalInfo: z.string().optional(),
  PlanPrices: z.array(planPricesSchema),
});

export const planSchema = createPlanBodySchema.extend({
  galaxPayId: z.coerce.number(),
});

export const listPlansResponseSchema = z.object({
  totalQtdFoundInPage: z.coerce.number(),
  Plans: z.array(planSchema),
});

export type ListPlanResponse = z.input<typeof listPlansResponseSchema>;

export const createPlanResponseSchema = z.object({
  type: z.boolean(),
  Plan: planSchema,
});

export type CreatePlanBody = z.input<typeof createPlanBodySchema>;

export type CreatePlanResponse = z.input<typeof createPlanResponseSchema>;

export const updatePlanBodySchema = createPlanBodySchema.deepPartial();

export type UpdatePlanBody = z.input<typeof updatePlanBodySchema>;
