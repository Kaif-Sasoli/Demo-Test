import express, { Request, Response } from "express";
import { authMiddleware } from "./middleware/auth.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "API running",
    });
});

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

app.get("/profile", authMiddleware, (req: CustomRequest, res: CustomResponse) => {
    if (!req.user) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    res.json({
        user: req.user,
    });
});

export default app;