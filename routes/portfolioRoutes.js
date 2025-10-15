import express from "express";
import { getPortfolio } from "../controllers/portfolioController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get user portfolio (protected)
router.get("/", protect, getPortfolio);

export default router;
