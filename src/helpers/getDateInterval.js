import endOfDay from 'date-fns/endOfDay';
import isSaturday from 'date-fns/isSaturday';
import isSunday from 'date-fns/isSunday';
import startOfDay from 'date-fns/startOfDay';

const today = new Date(Date.now());

const getWeekInterval = (date = today) => {
  var weekInterval = [];

  //finds last saturday
  do {
    date = getYesterday(date);
  } while (!isSaturday(date));

  weekInterval.push(date);

  //finds sunday before that saturday
  do {
    date = getYesterday(date);
    weekInterval.push(date);
  } while (!isSunday(date));

  weekInterval.push(startOfDay(weekInterval[weekInterval.length - 1]));

  return weekInterval;
};

function getYesterday(date) {
  const yesterday = new Date(date.getTime());
  date = endOfDay(new Date(yesterday.setDate(date.getDate() - 1)));
  return date;
}

export const lastFullWeek = getWeekInterval();

export function getEpoch(date) {
  return Math.floor(new Date(date).getTime() / 1000);
}
