import { arrayData, data } from "../types/types";

const generateExpensesData = () => {
  const expenses: arrayData = [];
  const firstDate = new Date("2024-01-01");
  const today = new Date();
  const days =
    Math.floor(
      (today.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;

  for (let i = 0; i < days; i++) {
    const actualDate = new Date(firstDate);
    actualDate.setDate(firstDate.getDate() + i);

    const dailyExpense: number = Math.floor(Math.random() * 950);
    const expenseObj: data = {
      id: i,
      date: actualDate,
      //.toISOString(),
      //.split("T")[0],
      amount: dailyExpense,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};

export default generateExpensesData;
