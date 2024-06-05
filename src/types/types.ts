import React from "react";

export type ProviderProps = {
  children: React.ReactNode;
};

export interface data {
  id: number;
  date: Date;
  amount: number;
}

export type arrayData = data[];

export interface BalanceContextInterface {
  balance: number;
  percentageYesterdayToday: number;
  expensesData: number[];
  handleWeek: ((arrow: boolean) => void)
  expensesMock: arrayData;
  week: number;
}

export interface ThemeContextInterface {
  theme: string;
  toggleTheme: (() => void) | undefined;
}
