import expensesDataGenerator from "../data/expensesDataGenerator"
import earningsDataGenerator from "../data/earningsDataGenerator";

export const calculateBalance = () => {
  const earnings = earningsDataGenerator();
  const expenses = expensesDataGenerator();
  let totalEarnings = 0;
  let totalExpenses = 0;
  for (let i = 0; i < earnings.length; i++) {
    totalEarnings += earnings[i].amount;
    totalExpenses += expenses[i].amount;
  }
  return (totalEarnings - totalExpenses);
}