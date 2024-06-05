import { createContext, useContext, useState } from "react";
import { calculateBalance } from "../utils/calculateBalance";
import {
	BalanceContextInterface,
	ProviderProps,
	arrayData,
} from "../types/types";
import generateEarningsData from "../data/generateEarningsData";
import generateExpensesData from "../data/generateExpensesData";
import { calculatePercentageBetweenYesterdayAndToday } from "../utils/calculatePercentageBetweenYesterdayAndToday";
import { calculateDaysToSlice } from "../utils/calculateDaysToSlice";

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
const handleExpensesData = (
	expensesMock: arrayData,
	week: number,
	daysToSlice: number
) => {
	if (Math.floor(expensesMock.length / 7) > week) {
		return expensesMock
			.slice(
				expensesMock.length -
					(week === 0 ? daysToSlice : daysToSlice + week * 7),
				expensesMock.length - (week === 0 ? 0 : daysToSlice + week * 7 - 7)
			)
			.map((e) => e.amount);
	} else {
		return expensesMock.slice(expensesMock[0].amount, 7).map((e) => e.amount);
	}
};

export const BalanceProvider = ({ children }: ProviderProps) => {
	// Generates expenses and earnings
	const [earningsMock] = useState<arrayData>(generateEarningsData());
	const [expensesMock] = useState<arrayData>(generateExpensesData());
	const daysToSlice = calculateDaysToSlice();
	const [week, setWeek] = useState(0);
	const [expensesData, setExpensesData] = useState(
		handleExpensesData(expensesMock, week, daysToSlice)
	);
	console.log(expensesMock);
	// Calculates expenses info
	const balance = calculateBalance(earningsMock, expensesMock);
	const percentageYesterdayToday = calculatePercentageBetweenYesterdayAndToday(
		expensesMock,
		earningsMock
	);

	console.log(expensesData);
	// BarChart

	const handleWeek = (arrow: boolean) => {
		if (arrow && week != 0) {
			const weekAux = week - 1;
			setExpensesData(handleExpensesData(expensesMock, weekAux, daysToSlice));
			setWeek(weekAux);
		} else if (!arrow) {
			const weekAux = week + 1;
			setExpensesData(handleExpensesData(expensesMock, weekAux, daysToSlice));
			setWeek(weekAux);
		}
		console.log(week);
	};

	return (
		<BalanceContext.Provider
			value={{
				balance,
				percentageYesterdayToday,
				expensesData,
				handleWeek,
				expensesMock,
				week,
			}}
		>
			{children}
		</BalanceContext.Provider>
	);
};
