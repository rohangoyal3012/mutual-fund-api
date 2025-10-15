// import MutualFund from "../models/MatualFunds";
import MutualFund from "../models/MatualFund.js";

// Fetch all mutual funds
export const getFunds = async () => {
  return await MutualFund.find();
};

// Seed demo funds (optional helper)
export const seedFunds = async () => {
  const existing = await MutualFund.find();
  if (existing.length === 0) {
    await MutualFund.insertMany([
      { name: "Axis Bluechip Fund", minInvestment: 5000, nav: 50 },
      { name: "HDFC Flexi Cap Fund", minInvestment: 1000, nav: 100 },
      { name: "SBI Small Cap Fund", minInvestment: 2000, nav: 30 },
    ]);
  }
};
