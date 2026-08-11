import { Router } from "express";
import { createComment } from "../controllers/comment.controllers.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/:articleId", authenticate, createComment);

export default router;