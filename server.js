import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Mutual Fund API is running...");
});

// Import routes
import authRoutes from "./routes/authRoutes.js";
import fundRoutes from "./routes/fundRoutes.js";
import investRoutes from "./routes/investRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/funds", fundRoutes);
app.use("/api/invest", investRoutes);
app.use("/api/portfolio", portfolioRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
