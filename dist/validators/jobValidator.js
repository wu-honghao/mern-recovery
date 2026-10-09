import { z } from 'zod';
export const jobQuerySchema = z.object({
    sort: z.enum(['salary_asc', 'salary_desc']).optional(),
    permitSupported: z.enum(['true', 'false']).transform(value => value === 'true').optional(),
    page: z.coerce.number().int().min(1).default(1),
    limit: z.coerce.number().int().min(1).max(100).default(10),
    location: z.string().optional(),
    title: z.string().optional()
});
export const jobSchema = z.object({
    title: z.string().min(1),
    company: z.string().min(1),
    location: z.string().min(1),
    salary: z.number().positive(),
    permitSupported: z.boolean(),
    skills: z.array(z.string()),
});
export const createJobSchema = jobSchema.extend({
    permitSupported: z.boolean().default(false),
    skills: z.array(z.string()).default([]),
});
export const updateJobSchema = jobSchema.partial();
export const getJobByIdSchema = z.object({
    id: z.string().min(1)
});
//# sourceMappingURL=jobValidator.js.map