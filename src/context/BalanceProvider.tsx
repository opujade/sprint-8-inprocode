import { createContext, useContext } from "react";
import { calculateBalance } from "../utils/calculateBalance";
import { ProviderProps } from "../types/types";
import earningsDataGenerator from "../data/earningsDataGenerator";
import expensesDataGenerator from "../data/expensesDataGenerator";
import { calculatePercentageFirstTwoElements } from "../utils/calculatePercentageFirstTwoElements";

const BalanceContext = createContext({
	balance: 0,
	todaysExpenses: 0,
	percentageYesterdayToday: 0,
});

export const useBalanceContext = () => useContext(BalanceContext);

export const BalanceProvider = ({ children }: ProviderProps) => {
	const expenses = expensesDataGenerator();
	const earnings = earningsDataGenerator();
	const balance = calculateBalance(earnings, expenses);
	const todaysExpenses = expenses[0].amount;
	const percentageYesterdayToday =
		calculatePercentageFirstTwoElements(expenses);

	return (
		<BalanceContext.Provider
			value={{ balance, todaysExpenses, percentageYesterdayToday }}
		>
			{children}
		</BalanceContext.Provider>
	);
};
