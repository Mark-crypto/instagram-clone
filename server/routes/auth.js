import { Router } from "express";
import { getAuth, addAuth, editAuth, deleteAuth } from "../controllers/auth.js";
const router = Router();

router.get("/auth", getAuth);
router.post("/auth", addAuth);
router.put("/auth/:id", editAuth);
router.delete("/auth/:id", deleteAuth);

export default router;
