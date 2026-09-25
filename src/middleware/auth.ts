import { Request, Response, NextFunction } from "express";

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    console.log("Middleware is being used")

    // TODO: Verify JWT/token here
    const user: User = {
        id: "123",
        name: "John Doe",
        email: "john@example.com",
    };

    req.user = user;

    next();
};