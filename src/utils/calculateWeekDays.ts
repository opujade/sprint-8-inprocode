import { arrayData } from "../types/types";
import { calculateDaysToSlice } from "./calculateDaysToSlice";

export const calculateWeekDays = (week: number, expenses: arrayData) => {
  const daysToSlice = calculateDaysToSlice();
  if (week > 0) {
    return `${expenses[expenses.length - daysToSlice + 1 - week * 7].date.toISOString().split("T")[0]} - ${expenses[expenses.length - daysToSlice - week * 7 + 7].date.toISOString().split("T")[0]}`
    // [expenses.length - daysToSlice - week * 7].date.toISOString().split("T")[0]} - ${expenses[expenses.length - daysToSlice - week * 7].date.toISOString().split("T")[0]} `,
  }
  else {
    return 'This Week'
  }
}