import React, { createContext, useContext, useEffect, useState } from "react";
import expensesData from "../data/expensesData";
import { ExpensesBalanceProvider } from "../types/interfaces";

const ExpensesBalanceContext = createContext<
  ExpensesBalanceProvider | undefined
>(undefined);

export const useExpensesBalanceContext = useContext(ExpensesBalanceContext);

export const ExpensesBalanceProvider: React.FC = ({ children }) => {
  const [week, setWeek] = useState(0);
  const [expensesBalance, setExpensesBalance] = useState(0);

  useEffect(() => calculateExpensesBalance(), []);

  const calculateExpensesBalance = () => {
    let total = 0;
    for (let i = week * 7; i < week * 7 + 7; i++) {
      total += expensesData[i].amount;
    }
    const expensesBalanceAux = total / 7;
    setExpensesBalance(expensesBalanceAux);
  };

  const handleWeek = (calc: boolean) => {
    if (calc) setWeek(week + 1);
    else setWeek(week - 1);
  };

  return (
    <>
      <ExpensesBalanceContext.Provider
        value={{ expensesBalance, handleWeek, children }}
      >
        {children}
      </ExpensesBalanceContext.Provider>
    </>
  );
};
