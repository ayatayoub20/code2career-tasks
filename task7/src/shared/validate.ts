import { z } from "zod";
import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "./error";

type Part = "body" | "params" | "query";

export function validate(schema: z.ZodTypeAny, part: Part = "body") {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[part]);
    if (!result.success) {
      
      return  next(new BadRequestError("Validation error", result.error.errors))
    }
    (req as any)[part] = result.data;
    next();
  };
}
