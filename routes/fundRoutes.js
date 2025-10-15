import express from "express";
import { getAllFunds } from "../controllers/fundController.js";

const router = express.Router();

// Get all mutual funds
router.get("/", getAllFunds);

export default router;
