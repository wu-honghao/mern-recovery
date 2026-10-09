import type { Request, Response } from 'express';
export declare const userRegister: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const userLogin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getMe: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=authController.d.ts.map