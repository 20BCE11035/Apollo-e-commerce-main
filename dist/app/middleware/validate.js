"use strict";
// src/app/middleware/validate.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const zod_1 = require("zod");
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({
                success: false,
                message: error.errors.map((error) => error.message).join(", "),
            });
        }
        next(error);
    }
};
exports.validate = validate;
