import { Request, Response, NextFunction } from "express";
export declare function setCreatedByFromToken(req: Request, _res: Response, next: NextFunction): void;
export declare function mustBeOwnerOrAdmin(req: Request<{
    id: string;
}>, res: Response, next: NextFunction): void | Response<any, Record<string, any>>;
//# sourceMappingURL=course.middleware.d.ts.map