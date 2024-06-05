import { weekDays } from "../data/weekDays";

export const calculateDaysToSlice = () => {
  const date = new Date();
  const currentDayOfWeek = weekDays[date.getDay()];

  switch (currentDayOfWeek) {
    case 'Monday': return 0;
    case 'Tuesday': return 1;
    case 'Wednesday': return 2;
    case 'Thursday': return 3;
    case 'Friday': return 4;
    case 'Saturday': return 5;
    default: return 6;
  }
}