import express from "express";
import ConnectDB from "./Database/db.js";
import carRoutes from "./Routes/car.route.js";
import adminRoutes from "./Routes/admin.route.js";
import dashboardRoutes from "./Routes/dashboard.route.js";
import inquiryRoutes from "./Routes/inquiryRoutes.js";
import notificationRoutes from "./Routes/notificationRoute.js";
import contactRoutes from "./Routes/contact.Route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
ConnectDB();

app.use(cors());
app.use(express.json());
app.use("/api/cars", carRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/notifications",notificationRoutes);
app.use("/api/contact", contactRoutes);
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://cars-rental-project-9bip-20uis2tzw-yashshukla011s-projects.vercel.app/"
    ],
    credentials: true,
  })
);
app.get("/", (req, res) => {
    res.send("Car Selling API Running Successfully");
});
console.log("Car Routes Loaded");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});