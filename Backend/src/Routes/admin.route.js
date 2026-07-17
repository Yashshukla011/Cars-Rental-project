import express from "express";

import {
  registerAdmin,
  loginAdmin,
  logoutAdmin,
  getProfile,
} from "../controllers/admin.controller.js";

import protect from "../middilerware/auth.middleware.js";

const router = express.Router();

// Register
router.post("/register", registerAdmin);

// Login
router.post("/login", loginAdmin);

// Logout
router.post("/logout", logoutAdmin);

// Profile
router.get("/profile", protect, getProfile);

export default router;