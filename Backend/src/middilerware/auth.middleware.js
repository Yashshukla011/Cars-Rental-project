import jwt from "jsonwebtoken";
import Admin from "../Models/Admin.model.js";

const protect = async (req, res, next) => {
  try {
    let token;

    // Check token from Authorization Header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // If no token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized. No Token",
      });
    }

    // Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find Admin
    req.admin = await Admin.findById(decoded.id).select("-password");

    if (!req.admin) {
      return res.status(401).json({
        success: false,
        message: "Admin not found",
      });
    }

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Token Failed",
    });
  }
};

export default protect;