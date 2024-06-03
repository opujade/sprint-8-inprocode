import { arrayData } from "../types/types";

export const calculateBalance = (earnings: arrayData, expenses: arrayData) => {
  let totalEarnings = 0;
  let totalExpenses = 0;
  for (let i = 0; i < earnings.length; i++) {
    totalEarnings += earnings[i].amount;
    totalExpenses += expenses[i].amount;
  }
  return (totalEarnings - totalExpenses);
}