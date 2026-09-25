import { Request, Response, NextFunction } from "express";

interface User {
    id: string;
    name: string;
    email: string;
}

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    console.log("Middleware run")

    // TODO: verify your JWT here
    const user: User = {
        id: "123",
        name: "John Doe",
        email: "john@example.com",
    };

    req.user = user;

    next();
};