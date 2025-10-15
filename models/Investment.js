import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fund: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MutualFund",
    required: true,
  },
  amount: { type: Number, required: true }, // Amount invested
  units: { type: Number, required: true }, // Units purchased (amount / nav)
  date: { type: Date, default: Date.now }, // When invested
});

export default mongoose.model("Investment", investmentSchema);
