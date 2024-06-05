import { arrayData } from "../types/types"

export const calculatePercentageFirstTwoElements = (expenses: arrayData) => {
  const percentage = 100 * (expenses[expenses.length - 1].amount - expenses[expenses.length - 2].amount) / expenses[expenses.length - 2].amount;
  return parseFloat(percentage.toFixed(2))
}