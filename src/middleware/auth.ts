// src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import "../types/request.type.js";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log("Middleware run");

    req.user = {
        id: "123",
        name: "John Doe",
        email: "john@example.com",
    };

    next();
};
