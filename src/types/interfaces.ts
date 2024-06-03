import { ReactNode } from "react";

type ExpensesBalance = number | null;

export interface ExpensesBalanceProvider {
  expensesBalance: ExpensesBalance;
  handleWeek: (calc: boolean) => void;
  children: ReactNode;
}
