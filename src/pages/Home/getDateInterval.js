import isSaturday from 'date-fns/isSaturday';
import endOfDay from 'date-fns/endOfDay';
import subDays from 'date-fns/subDays';
import startOfDay from 'date-fns/startOfDay';

let today = new Date(Date.now());

const findLastSaturday = (date) => {
  do {
    let yesterday = new Date(date.getTime());

    date = new Date(yesterday.setDate(date.getDate() - 1));
  } while (!isSaturday(date));

  return date;
};

const lastSaturday = findLastSaturday(today);

const endOfLastSaturday = endOfDay(lastSaturday);

const endOfFriday = new Date(endOfLastSaturday.setDate(endOfLastSaturday.getDate() - 1));

//query after endOfFriday, before endOfSaturday 

//fill array with week and export

[1,2,3,4,5,6,7]


export const endOfLastSaturdayEPOCH = Math.floor(
  new Date(endOfLastSaturday).getTime() / 1000
);

const sundayBeforeSaturday = subDays(endOfLastSaturday, 6);

const beginningOfSunday = startOfDay(sundayBeforeSaturday);

export const beginningOfSundayEPOCH = Math.floor(
  new Date(beginningOfSunday).getTime() / 1000
);
