import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import ConnectDB from "./Database/db.js";

import carRoutes from "./Routes/car.route.js";
import adminRoutes from "./Routes/admin.route.js";
import dashboardRoutes from "./Routes/dashboard.route.js";
import inquiryRoutes from "./Routes/inquiryRoutes.js";
import notificationRoutes from "./Routes/notificationRoute.js";
import contactRoutes from "./Routes/contact.Route.js";

dotenv.config();

const app = express();

// Connect Database
ConnectDB();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://cars-rental-project-9bip-20uis2tzw-yashshukla011s-projects.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.status(200).send("Car Selling API Running Successfully");
});

// Routes
app.use("/api/cars", carRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/contact", contactRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server Running on Port ${PORT}`);
});