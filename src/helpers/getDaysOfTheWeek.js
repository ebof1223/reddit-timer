import weekInterval from './getWeekIntervals';

var lastWeekDays = {};

export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

for (let day of weekInterval) {
  const dayIndex = day[0].UTC.getDay();
  lastWeekDays[weekDays[dayIndex]] = day;
}

export default lastWeekDays;
