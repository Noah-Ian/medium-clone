import "dotenv/config";
import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import articleRoutes from "./routes/article.routes.js";
import commentRoutes from "./routes/comment.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);

app.use("/api/users", userRoutes);

app.use("/api/articles", articleRoutes);

app.use("/api/comments", commentRoutes);

export default app;