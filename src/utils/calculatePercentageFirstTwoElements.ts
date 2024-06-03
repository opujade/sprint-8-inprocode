import { arrayData } from "../types/types"

export const calculatePercentageFirstTwoElements = (expenses: arrayData) => {
  const percentage = 100 * (expenses[0].amount - expenses[1].amount) / expenses[1].amount;
  return parseFloat(percentage.toFixed(2))
}