import { createContext, useContext } from "react";
import { calculateBalance } from "../utils/calculateBalance";
import { BalanceContextInterface, ProviderProps } from "../types/types";
import generateEarningsData from "../data/generateEarningsData";
import generateExpensesData from "../data/generateExpensesData";
import { calculatePercentageFirstTwoElements } from "../utils/calculatePercentageFirstTwoElements";
import { formatChartData } from "../utils/formatChartData";

const BalanceContext = createContext<BalanceContextInterface | undefined>(
	undefined
);

export const useBalanceContext = () => useContext(BalanceContext);

const expensesMock = generateExpensesData();
const earningsMock = generateEarningsData();

export const BalanceProvider = ({ children }: ProviderProps) => {
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
