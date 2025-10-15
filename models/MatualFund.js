import mongoose from "mongoose";

const mutualFundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  minInvestment: { type: Number, required: true }, // Minimum amount to invest
  nav: { type: Number, required: true }, // Current NAV (Net Asset Value)
});

export default mongoose.model("MutualFund", mutualFundSchema);
