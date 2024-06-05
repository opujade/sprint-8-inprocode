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
	const balance = calculateBalance(earningsMock, expensesMock);
	const todaysExpenses = expensesMock[expensesMock.length - 1].amount;
	const percentageYesterdayToday =
		calculatePercentageFirstTwoElements(expensesMock);
	const amountExpenses = expensesMock
		.slice(expensesMock.length - 7, expensesMock.length)
		.map((e) => e.amount);
	console.log(amountExpenses);
	const weekDays = [
		"Monday",
		"Tuesday",
		"Wednesady",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	];
	const expensesChartData = {
		datasets: [
			{
				label: "Expenses",
				data: amountExpenses,
				hoverBackgroundColor: "#75b5be",
				backgroundColor: "#ec765c",
				borderSkipped: false,
				borderRadius: 5,
			},
		],
		labels: weekDays,
	};

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
