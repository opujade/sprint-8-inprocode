import { arrayData, data } from "../types/types";

const earningsDataGenerator = (): arrayData => {
  const earnings: arrayData = [];
  const firstDate = new Date("2024-01-01");
  const today = new Date();
  const days =
    Math.floor(
      (today.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24)
    ) + 1;

  for (let i = 0; i < days; i++) {
    const actualDate = new Date(firstDate);
    actualDate.setDate(firstDate.getDate() + i);

    const dailyEarning: number = Math.floor(Math.random() * 1000);
    const earningObj: data = {
      id: i,
      date: actualDate,
      amount: dailyEarning,
    };
    earnings.push(earningObj);
  }
  return earnings;
};

export default earningsDataGenerator;
