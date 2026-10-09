import mongoose, { Schema } from "mongoose";
declare const jobSchema: Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, mongoose.Document<unknown, {}, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const Job: mongoose.Model<{
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, mongoose.Document<unknown, {}, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title: string;
    company: string;
    location: string;
    salary: number;
    permitSupported: boolean;
    skills: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export type JobType = mongoose.InferSchemaType<typeof jobSchema>;
export {};
//# sourceMappingURL=jobModel.d.ts.map