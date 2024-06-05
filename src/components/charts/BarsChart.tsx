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

export const WeeklyBalanceBarChart = () => {
	const { expensesChartData } = useBalanceContext();

	return <Bar options={options} data={expensesChartData} />;
};
