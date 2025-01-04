import { Router } from "express";
import profileRouter from "./profile.js";
import commentsRouter from "./comments.js";
import postsRouter from "./posts.js";
import authRouter from "./auth.js";
import userRouter from "./user.js";

const router = Router();
router.use(profileRouter);
router.use(commentsRouter);
router.use(postsRouter);
router.use(authRouter);
router.use(userRouter);

export default router;
