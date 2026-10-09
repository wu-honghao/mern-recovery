import { z } from 'zod';
export declare const jobQuerySchema: z.ZodObject<{
    sort: z.ZodOptional<z.ZodEnum<{
        salary_asc: "salary_asc";
        salary_desc: "salary_desc";
    }>>;
    permitSupported: z.ZodOptional<z.ZodPipe<z.ZodEnum<{
        false: "false";
        true: "true";
    }>, z.ZodTransform<boolean, "false" | "true">>>;
    page: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    location: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const jobSchema: z.ZodObject<{
    title: z.ZodString;
    company: z.ZodString;
    location: z.ZodString;
    salary: z.ZodNumber;
    permitSupported: z.ZodBoolean;
    skills: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const createJobSchema: z.ZodObject<{
    title: z.ZodString;
    company: z.ZodString;
    location: z.ZodString;
    salary: z.ZodNumber;
    permitSupported: z.ZodDefault<z.ZodBoolean>;
    skills: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const updateJobSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    company: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    salary: z.ZodOptional<z.ZodNumber>;
    permitSupported: z.ZodOptional<z.ZodBoolean>;
    skills: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const getJobByIdSchema: z.ZodObject<{
    id: z.ZodString;
}, z.core.$strip>;
export type JobGetById = z.infer<typeof getJobByIdSchema>;
export type JobQuery = z.infer<typeof jobQuerySchema>;
export type CreateJob = z.infer<typeof createJobSchema>;
export type UpdateJob = z.infer<typeof updateJobSchema>;
//# sourceMappingURL=jobValidator.d.ts.map