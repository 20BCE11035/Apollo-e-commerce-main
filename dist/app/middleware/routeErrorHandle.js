"use strict";
// src/app/middleware/notFoundHandler.ts
Object.defineProperty(exports, "__esModule", { value: true });
const RouteNotFoundHandler = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
};
exports.default = RouteNotFoundHandler;
