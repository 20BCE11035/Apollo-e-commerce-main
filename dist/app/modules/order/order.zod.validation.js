"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllOrdersSchemaValidate = exports.orderSchemaZodValidation = void 0;
const zod_1 = require("zod");
exports.orderSchemaZodValidation = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    productId: zod_1.z.string().min(1, "Product ID is required"),
    price: zod_1.z.number().min(0, "Price must be a positive number"),
    quantity: zod_1.z.number().min(1, "Quantity must be at least 1"),
});
exports.getAllOrdersSchemaValidate = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address").optional(),
});
