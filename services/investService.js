import Investment from "../models/Investment.js";
import MutualFund from "../models/MatualFund.js";

export const invest = async (userId, fundId, amount) => {
  const fund = await MutualFund.findById(fundId);
  if (!fund) throw new Error("Fund not found");

  if (amount < fund.minInvestment) {
    throw new Error(`Minimum investment is ${fund.minInvestment}`);
  }

  const units = amount / fund.nav;

  const investment = await Investment.create({
    user: userId,
    fund: fundId,
    amount,
    units,
  });

  return investment;
};
