import "dotenv/config";
import express from "express";
import router from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api/users", router);

app.use("/api/auth",
    authRoutes
);

export default app;