import express, { Request, Response } from "express";
import { authMiddleware } from "./middleware/auth.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "API running",
    });
});

app.get(
    "/profile",
    authMiddleware,
    (req: Request, res: Response) => {
        res.json({
            user: req.user,
        });
    }
);

app.listen(8080, () => {
    console.log("Server running on port 8080..");
});