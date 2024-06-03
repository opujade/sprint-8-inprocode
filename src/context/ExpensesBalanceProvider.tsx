import React, {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import expensesData from "../data/expensesData";

// Types
type ExpensesBalance = number | null;
interface ExpensesBalanceProvider {
	expensesBalance: ExpensesBalance;
	updateWeek: (calc: boolean) => void;
	children: ReactNode;
}

// Creating Balance Context
const ExpensesBalanceContext = createContext<ExpensesBalanceProvider | null>(
	null
);

const useExpensesBalanceContext = () => {
	const balanceObject = useContext(ExpensesBalanceContext);
	if (!balanceObject) {
		throw new Error("useExpensesBalanceContext must be used within a Provider");
	}
	return balanceObject;
};

export const ExpensesBalanceProvider: React.FC<any> = ({ children }) => {
	const [week, setWeek] = useState(0);
	const [expensesBalance, setExpensesBalance] = useState(0);

	useEffect(() => {
		let total = 0;
		for (let i = week * 7; i < week * 7 + 7; i++) {
			total += expensesData[i].amount;
		}
		const expensesBalanceAux = total / 7;
		setExpensesBalance(expensesBalanceAux);
	}, [week]);

	const updateWeek = (calc: boolean) => {
		if (calc) setWeek(week + 1);
		else setWeek(week - 1);
	};

	return (
		<>
			<ExpensesBalanceContext.Provider
				value={{ expensesBalance, updateWeek, children }}
			>
				{children}
			</ExpensesBalanceContext.Provider>
		</>
	);
};

export default useExpensesBalanceContext();
