import { arrayData } from "../types/types"
import { calculateBalance } from "./calculateBalance";

export const calculatePercentageBetweenYesterdayAndToday = (expenses: arrayData, earnings: arrayData) => {
  const balanceToday = calculateBalance(earnings, expenses);
  const balanceYesterday = balanceToday - earnings[earnings.length - 1].amount + expenses[expenses.length - 1].amount

  const percentage = 100 * ((balanceToday - balanceYesterday) / balanceYesterday);

  return parseFloat(percentage.toFixed(2))
}