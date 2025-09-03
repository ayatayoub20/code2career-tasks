import { Request, Response, NextFunction } from "express";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                role: "ADMIN" | "COACH" | "STUDENT";
            };
        }
    }
}
export declare function authRequired(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
export declare function allowRoles(...roles: Array<"ADMIN" | "COACH" | "STUDENT">): (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middleware.d.ts.map