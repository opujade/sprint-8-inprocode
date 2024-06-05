import { ChartData } from "chart.js";
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
  todaysExpenses: number;
  percentageYesterdayToday: number;
  expensesChartData: ChartData<"bar">;
}

export interface ThemeContextInterface {
  theme: string;
  toggleTheme: (() => void) | undefined;
}
