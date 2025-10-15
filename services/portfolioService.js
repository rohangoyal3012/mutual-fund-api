import Investment from "../models/Investment.js";
// import MutualFund from "../models/MutualFund.js";

export const getUserPortfolio = async (userId) => {
  const investments = await Investment.find({ user: userId }).populate("fund");

  let totalValue = 0;
  const details = investments.map((inv) => {
    const value = inv.units * inv.fund.nav;
    totalValue += value;
    return {
      fundName: inv.fund.name,
      units: inv.units,
      nav: inv.fund.nav,
      value: value.toFixed(2),
    };
  });

  return {
    totalValue: totalValue.toFixed(2),
    investments: details,
  };
};
