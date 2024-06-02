// src/app/middleware/validate.ts

import { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";

export const validate =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: error.errors.map((error) => error.message).join(", "),
        });
      }
      next(error);
    }
  };
