import type { Request, Response } from "express";
export declare const getJobList: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createJob: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
type UpdateJobParams = {
    id: string;
};
export declare const updateJob: (req: Request<UpdateJobParams>, res: Response) => Promise<Response<any, Record<string, any>>>;
type DeleteJobParams = {
    id: string;
};
export declare const deleteJob: (req: Request<DeleteJobParams>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getJobById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export {};
//# sourceMappingURL=jobController.d.ts.map