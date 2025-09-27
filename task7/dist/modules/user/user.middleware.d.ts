import { Request, Response, NextFunction } from "express";
/** Only self or ADMIN can proceed (for routes with :id) */
export declare function isSelfOrAdmin(req: Request<{
    id: string;
}>, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
//# sourceMappingURL=user.middleware.d.ts.map