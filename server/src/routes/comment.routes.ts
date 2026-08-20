import { Router } from "express";
import { createComment, getComments } from "../controllers/comment.controllers.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/:articleId", authenticate, createComment);

router.get("/:articleId", getComments);

export default router;