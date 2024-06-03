import { useBalanceContext } from "../context/BalanceProvider";

export const TotalBalance = () => {
	const { balance } = useBalanceContext();
	return <div>Balance: {balance}€</div>;
};
