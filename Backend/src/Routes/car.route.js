import express from "express";
import {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
  searchCars,
} from "../controllers/car.controller.js";

import protect from "../middilerware/auth.middleware.js";

const router = express.Router();

// Public Routes
router.get("/search", searchCars);
router.get("/", getCars);
router.get("/:id", getCarById);

// Protected Routes
router.post("/", protect, addCar);
router.put("/:id", protect, updateCar);
router.delete("/:id", protect, deleteCar);

export default router;