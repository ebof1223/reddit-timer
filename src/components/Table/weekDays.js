import weekInterval from './getWeekIntervals';

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let lastWeekDays = {};

for (let day of weekInterval) {
  let dayIndex = day[0].UTC.getDay();
  lastWeekDays[weekDays[dayIndex]] = day;
}
export default lastWeekDays;
