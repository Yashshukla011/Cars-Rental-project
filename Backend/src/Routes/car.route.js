import express from "express";
import {
  getCars,
  getCarById,
  addCar,
  updateCar,
  deleteCar,
  searchCars,
  sellCar,
  getSellRequests,
  approveCar,
  rejectCar,
   getMyCars,  
} from "../controllers/car.controller.js";

import protect from "../middilerware/auth.middleware.js";

const router = express.Router();

// Public Routes
router.get("/search", searchCars);

router.post("/sell",protect, sellCar);
router.get("/my-cars", protect, getMyCars);

router.get("/sell-requests", protect, getSellRequests);

router.put("/approve/:id", protect, approveCar);

router.put("/reject/:id", protect, rejectCar);

router.get("/", getCars);

router.get("/:id", getCarById);

router.post("/", protect, addCar);

router.put("/:id", protect, updateCar);

router.delete("/:id", protect, deleteCar);

export default router;