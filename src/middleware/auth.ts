import { Request, Response, NextFunction } from "express";

interface User {
    id: string;
    name: string;
    email: string;
}

interface CustomRequest extends Request {
    user?: User;
}
interface CustomResponse extends Response {
    user?: User;
}

export const authMiddleware = (
    req: CustomRequest,
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