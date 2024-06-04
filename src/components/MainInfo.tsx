import { useBalanceContext } from "../context/BalanceProvider";

export const MainInfo = () => {
  const { todaysExpenses, percentageYesterdayToday } = useBalanceContext();
  return (
    <div>
      <p>Today's Expenses: {todaysExpenses}€</p>
      <p>
        {percentageYesterdayToday > 0 && "+"}
        {percentageYesterdayToday}% compared to yesterday
      </p>
    </div>
  );
};
