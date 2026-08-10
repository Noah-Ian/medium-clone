import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { createArticle, getArticles } from "../controllers/article.controller.js";

const router = Router();

router.post("/", authenticate, createArticle);

router.get("/", getArticles);

export default router;