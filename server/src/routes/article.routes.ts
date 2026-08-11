import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { createArticle, deleteArticle, getArticle, getArticles, publishArticle, updateArticle } from "../controllers/article.controller.js";

const router = Router();

router.post("/", authenticate, createArticle);

router.get("/", getArticles);

router.get("/:id", getArticle);

router.put("/:id", authenticate, updateArticle);

router.delete("/:id", authenticate, deleteArticle)

router.patch("/:id/publish", authenticate, publishArticle)

export default router;