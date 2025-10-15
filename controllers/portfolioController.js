import { getUserPortfolio } from "../services/portfolioService.js";

export const getPortfolio = async (req, res) => {
  try {
    const userId = req.user.id;

    const portfolio = await getUserPortfolio(userId);

    res.json({
      user: userId,
      totalValue: portfolio.totalValue,
      investments: portfolio.investments,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching portfolio", error: err.message });
  }
};
