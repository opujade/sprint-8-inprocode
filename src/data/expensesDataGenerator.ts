type arrayExpenses = expense[];
interface expense { id: number; date: string; amount: number };

const expensesDataGenerator = () => {
  const expenses: arrayExpenses = [];
  const firstDate = new Date('2024-05-01');
  const today = new Date();
  const days = Math.floor((today.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  for (let i = 0; i < days; i++) {
    const actualDate = new Date(firstDate);
    actualDate.setDate(firstDate.getDate() + i);

    const dailyExpense: number = Math.floor(Math.random() * 750) + 50;
    const expenseObj: expense = {
      id: i,
      date: actualDate.toISOString().split('T')[0],
      amount: dailyExpense
    }
    expenses.unshift(expenseObj);
  }
  return expenses;
}

export default expensesDataGenerator;
