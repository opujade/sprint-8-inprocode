import { createContext, useContext, useState } from "react";
import { calculateBalance } from "../utils/calculateBalance";
import {
  BalanceContextInterface,
  ProviderProps,
  arrayData,
} from "../types/types";
import generateEarningsData from "../data/generateEarningsData";
import generateExpensesData from "../data/generateExpensesData";
import { calculatePercentageFirstTwoElements } from "../utils/calculatePercentageFirstTwoElements";
import { formatChartData } from "../utils/formatChartData";

const BalanceContext = createContext<BalanceContextInterface | undefined>(
  undefined
);

export const useBalanceContext = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalanceContext must be used within a BalanceProvider");
  }
  return context;
};

export const BalanceProvider = ({ children }: ProviderProps) => {
  const [earningsMock] = useState<arrayData>(generateEarningsData());
  const [expensesMock] = useState<arrayData>(generateExpensesData());
  console.log(expensesMock);
  console.log(earningsMock);
  const balance = calculateBalance(earningsMock, expensesMock);
  const todaysExpenses = expensesMock[0].amount;
  const percentageYesterdayToday =
    calculatePercentageFirstTwoElements(expensesMock);
  const amountExpenses = expensesMock.map((expense) => expense.amount);
  const dates = expensesMock.map((expense) => expense.date);
  const expensesChartData = formatChartData(amountExpenses, dates, "Expenses");

  return (
    <BalanceContext.Provider
      value={{
        balance,
        todaysExpenses,
        percentageYesterdayToday,
        expensesChartData,
      }}
    >
      {children}
    </BalanceContext.Provider>
  );
};
