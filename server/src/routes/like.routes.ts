import { Router } from "express";
import {toggleLike} from "../controllers/like.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
const router = Router();

router.post("/:articleId/like", authenticate, toggleLike);

export default router;
