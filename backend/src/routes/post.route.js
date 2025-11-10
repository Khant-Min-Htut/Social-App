import express from "express";
import { getPosts } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:postId", getPost);
router.get("/user/:username", getUserPosts);

export default router;
