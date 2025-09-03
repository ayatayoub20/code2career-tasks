import type { Request, Response, NextFunction } from "express";
declare class CourseController {
    list(_req: Request, res: Response, next: NextFunction): void;
    getById(req: Request<{
        id: string;
    }>, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
    create(req: Request<{}, {}, {
        title: string;
        description: string;
        image?: string;
        createdBy: string;
    }>, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
    updateById(req: Request<{
        id: string;
    }, {}, {
        title?: string;
        description?: string;
        image?: string;
    }>, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
    deleteById(req: Request<{
        id: string;
    }>, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
}
declare const _default: CourseController;
export default _default;
//# sourceMappingURL=cousrse.controller.d.ts.map