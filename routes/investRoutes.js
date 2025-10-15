import express from "express";
import { investInFund } from "../controllers/investController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Invest in a mutual fund (protected)
router.post("/", protect, investInFund);

export default router;
