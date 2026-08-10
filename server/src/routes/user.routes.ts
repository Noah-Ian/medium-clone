import { Router } from "express";
import {profile} from "../controllers/user.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/profile", authenticate,
    profile);


export default router;