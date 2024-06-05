import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	BarElement,
	CategoryScale,
	LinearScale,
	Tooltip,
	Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { useBalanceContext } from "../../context/BalanceProvider";
import { options } from "../../data/barOptions";
import { weekDays } from "../../data/weekDays";

export const WeeklyBalanceBarChart = () => {
	const { expensesData } = useBalanceContext();
	const expensesChartData = {
		datasets: [
			{
				label: "Expenses",
				data: expensesData,
				hoverBackgroundColor: "#75b5be",
				backgroundColor: "#ec765c",
				borderSkipped: false,
				borderRadius: 5,
			},
		],
		labels: weekDays,
	};

	return <Bar options={options} data={expensesChartData} />;
};
