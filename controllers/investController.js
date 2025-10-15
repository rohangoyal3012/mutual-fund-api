import { invest } from "../services/investService.js";

export const investInFund = async (req, res) => {
  try {
    const { fundId, amount } = req.body;
    const userId = req.user.id;

    const investment = await invest(userId, fundId, amount);

    res.json({ message: "Investment successful", investment });
  } catch (err) {
    res.status(400).json({ message: "Investment failed", error: err.message });
  }
};
