import { Request, Response, NextFunction } from "express";
export declare function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction): Response<any, Record<string, any>>;
export declare function notFound(_req: Request, res: Response): Response<any, Record<string, any>>;
//# sourceMappingURL=error.middleware.d.ts.map