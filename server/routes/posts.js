import { Router } from "express";
import {
  getPosts,
  addPost,
  editPost,
  deletePost,
} from "../controllers/posts.js";

const router = Router();

router.get("/posts", getPosts);
router.post("/posts", addPost);
router.put("/posts/:id", editPost);
router.delete("/posts/:id", deletePost);

export default router;
