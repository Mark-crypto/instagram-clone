import { Router } from "express";
import { getProfile } from "../controllers/profile.js";

const router = Router();
router.get("/profile", getProfile);

export default router;
