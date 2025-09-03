import type { Request, Response, NextFunction } from "express";
declare class UserController {
    list(_req: Request, res: Response, next: NextFunction): void;
    getById(req: Request<{
        id: string;
    }>, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
    createUser(req: Request<{}, {}, {
        name: string;
        email: string;
        password: string;
    }>, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    createCoach(req: Request<{}, {}, {
        name: string;
        email: string;
        password: string;
    }>, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    updateById(req: Request<{
        id: string;
    }, {}, {
        name?: string;
        email?: string;
        password?: string;
    }>, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
    deleteById(req: Request<{
        id: string;
    }>, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
}
declare const _default: UserController;
export default _default;
//# sourceMappingURL=user.controller.d.ts.map