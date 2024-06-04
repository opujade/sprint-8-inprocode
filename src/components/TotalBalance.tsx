import { useBalanceContext } from "../context/BalanceProvider";

export const TotalBalance = () => {
  const { balance } = useBalanceContext();
  return <h2>Balance: {balance}€</h2>;
};
