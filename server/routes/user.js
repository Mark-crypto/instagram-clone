import { Router } from "express";

const router = Router();

router.get("/user/:id/likes", (req, res) => {
  res.send("User likes");
});

export default router;
