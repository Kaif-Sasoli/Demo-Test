import express, { Request, Response } from "express";
import { authMiddleware } from "./middleware/auth.js";


const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
    res.json({
        message: "API running",
    });
});


app.get("/profile", authMiddleware, (req: Request, res: Response) => {

    if (!req.user) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    res.json({
        user: req.user,
    });
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;