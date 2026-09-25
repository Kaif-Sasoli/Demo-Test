import "express";

declare global {
    interface User {
        id: string;
        name: string;
        email: string;
    }
}

declare module "express-serve-static-core" {
    interface Request {
        user?: User;
    }
}

export { };