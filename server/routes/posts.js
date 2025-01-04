import { Router } from "express";
import {
  getPosts,
  addPost,
  editPost,
  deletePost,
  getPost,
} from "../controllers/posts.js";

const router = Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.post("/posts", addPost);
router.put("/posts/:id", editPost);
router.delete("/posts/:id", deletePost);

export default router;
