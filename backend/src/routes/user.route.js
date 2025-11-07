import express from "express";
import {
  getUserProfile,
  updateProfile,
  syncUser,
  getCurrnetUser,
  followUser,
} from "../controllers/user.controller.js";

import { protectRoute } from "./../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/profile/:username", getUserProfile);

router.post("/sync", protectRoute, syncUser);
router.post("/me", protectRoute, getCurrnetUser);
router.put("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser);

export default router;
