import { Router } from "express";
import {
  getComments,
  addComment,
  editComment,
  deleteComment,
} from "../controllers/comments.js";

const router = Router();
router.get("/comments", getComments);
router.post("/comments", addComment);
router.put("/comments/:id", editComment);
router.delete("/comments/:id", deleteComment);

export default router;
