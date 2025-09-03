import { z } from "zod";
import { Request, Response, NextFunction } from "express";
type Part = "body" | "params" | "query";
export declare function validate(schema: z.ZodTypeAny, part?: Part): (req: Request, _res: Response, next: NextFunction) => void;
export {};
//# sourceMappingURL=validate.d.ts.map