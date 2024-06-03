import { ChartData } from "chart.js";
import React from "react"

export type ProviderProps = {
  children: React.ReactNode;
}

export type arrayData = data[];
export interface data { id: number; date: string; amount: number };

export interface chartData {
  labels: string[],
  datasets: {}[],
}

export interface BalanceContextInterface {
  balance: number,
  todaysExpenses: number,
  percentageYesterdayToday: number,
  expensesChartData: ChartData,
}