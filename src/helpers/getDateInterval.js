import isSaturday from 'date-fns/isSaturday';
import endOfDay from 'date-fns/endOfDay';
import startOfDay from 'date-fns/startOfDay';
import isSunday from 'date-fns/isSunday';

var today = new Date(Date.now());

const getYesterday = (date) => {
  let yesterday = new Date(date.getTime());
  date = endOfDay(new Date(yesterday.setDate(date.getDate() - 1)));
  return date;
};

const getWeekInterval = (date = today) => {
  let weekInterval = [];

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

export const lastFullWeek = getWeekInterval();

export const getEpoch = (date) => {
  return Math.floor(new Date(date).getTime() / 1000);
};
