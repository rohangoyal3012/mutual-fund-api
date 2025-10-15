import { getFunds, seedFunds } from "../services/fundService.js";

// Get all mutual funds
export const getAllFunds = async (req, res) => {
  try {
    // Seed demo funds automatically if DB empty
    await seedFunds();

    const funds = await getFunds();
    res.json(funds);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching funds", error: err.message });
  }
};
