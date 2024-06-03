import { useContext } from "react";
import { BalanceContext } from "../context/BalanceProvider";

export const TotalBalance = () => {
	const balance = useContext(BalanceContext);
	return <div>Total Balance: {balance}€</div>;
};
