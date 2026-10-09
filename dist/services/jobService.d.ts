import type { QueryFilter } from "mongoose";
import { type JobType } from "../models/jobModel.js";
import type { CreateJob, UpdateJob } from "../validators/jobValidator.js";
export declare const jobAdd: (job: CreateJob) => Promise<import("mongoose").Document<unknown, {}, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>>;
export type JobQueryService = {
    location?: string | undefined;
    permitSupported?: boolean | undefined;
    title?: RegExp;
};
export declare const getJobs: (query: QueryFilter<JobType>, pageNumber: number, limitNumber: number, sortOrder?: 1 | -1) => Promise<{
    data: (import("mongoose").Document<unknown, {}, {
        title: string;
        company: string;
        location: string;
        salary: number;
        permitSupported: boolean;
        skills: string[];
    }, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<{
        title: string;
        company: string;
        location: string;
        salary: number;
        permitSupported: boolean;
        skills: string[];
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & import("mongoose").HydratedDocumentOverrides<{
        id: string;
    }>)[];
    total: number;
}>;
export declare const getJobByIdService: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
export declare const updateJobByIdService: (id: string, updateData: UpdateJob) => Promise<(import("mongoose").Document<unknown, {}, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
export declare const deleteJobServices: (id: string) => Promise<(import("mongoose").Document<unknown, {}, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<{
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & import("mongoose").HydratedDocumentOverrides<{
    id: string;
}>) | null>;
//# sourceMappingURL=jobService.d.ts.map