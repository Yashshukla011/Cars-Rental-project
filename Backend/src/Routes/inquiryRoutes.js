import express from "express";

import {
  createInquiry,
  getAllInquiries,
  updateInquiryStatus,
  deleteInquiry
} from "../controllers/inquiryController.js";


const router = express.Router();


// User send inquiry
router.post("/", createInquiry);


// Admin get all inquiry
router.get("/", getAllInquiries);


// Admin update status
router.put("/:id", updateInquiryStatus);


// Admin delete inquiry
router.delete("/:id", deleteInquiry);



export default router;