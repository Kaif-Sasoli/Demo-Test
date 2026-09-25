import express from "express";
import { authMiddleware } from "./middleware/auth.js";

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "API running",
    });
});

app.get("/profile", authMiddleware, (req, res) => {
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