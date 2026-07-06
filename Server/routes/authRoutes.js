
import express from "express";
import {
  signup,
  login,
  getMe,
  uploadResume,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// Auth Routes
router.post("/signup", signup);

router.post("/login", login);

// User Routes
router.get("/me", protect, getMe);

router.post(
  "/upload-resume",
  protect,
  upload.single("resume"),
  uploadResume
);

export default router;