
// export interface User {
//     id: string;
//     name: string;
//     email: string;
// }

// export interface AuthenticatedRequest extends Request {
//     user?: User;
// }
// export interface res extends Response {
//     user?: User;
// }

// src/types/request.type.ts
import { Request, Response } from "express";

export interface User {
    id: string;
    name: string;
    email: string;
}

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}