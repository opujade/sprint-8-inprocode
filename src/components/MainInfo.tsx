import { useBalanceContext } from "../context/BalanceProvider";
import { calculateWeekDays } from "../utils/calculateWeekDays";
import { WeeklyBalanceBarChart } from "./charts/BarsChart";

export const MainInfo = () => {
	const { expensesMock, percentageYesterdayToday, week } = useBalanceContext();
	const expensesWeek = calculateWeekDays(week, expensesMock);

	const todaysExpenses = expensesMock[expensesMock.length - 1].amount;
	return (
		<div className="bg-white rounded-xl p-5 w-full text-black">
			<h2 className="text-xl font-bold">Expenses: {expensesWeek}</h2>
			<WeeklyBalanceBarChart />
			<div className="flex justify-between border-t pt-5">
				<div>
					<p className="text-gray-300 font-semibold text-xs">
						Today's Expenses:
					</p>
					<p className="text-3xl font-bold mb-5">{todaysExpenses}€</p>
				</div>
				<div className="text-end flex flex-col justify-center font-semibold text-xs">
					<p>
						{percentageYesterdayToday > 0 && "+"}
						{percentageYesterdayToday}%
					</p>
					<p>compared to yesterday</p>
				</div>
			</div>
		</div>
	);
};
