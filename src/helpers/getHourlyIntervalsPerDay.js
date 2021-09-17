import addHours from 'date-fns/addHours';
import isSameDay from 'date-fns/isSameDay';
import subSeconds from 'date-fns/subSeconds';

import { getEpoch } from './getDateInterval';
import generate24HrPostTimes from './getGridTimesIntervals';
import lastWeekDays from './getDaysOfTheWeek';

//where hour type = 1 is is the first hour of an interval, and 2 is the second, hour type?
const getHourlyIntervalsPerDay = (increment = 2, day) => {
  const hourlyIntervals = generate24HrPostTimes(increment, true);

  let start = 0;
  let end = 1;
  let hourToHourIntervals = [];
  let startTime = lastWeekDays[day][0];
  let endTime = lastWeekDays[day][1];

  while (startTime.EPOCH < endTime.EPOCH) {
    let temp = {};
    let subIntervalHour1 = [startTime.UTC, addHours(startTime.UTC, increment)];
    let subIntervalHour1_EPOCH = subIntervalHour1.map((hour) => getEpoch(hour));
    let subIntervalHour2 = [
      subIntervalHour1[1],
      addHours(subIntervalHour1[1], increment),
    ];
    let subIntervalHour2_EPOCH = subIntervalHour2.map((hour) => getEpoch(hour));

    temp[hourlyIntervals[start]] = {
      UTC: subIntervalHour1,
      EPOCH: subIntervalHour1_EPOCH,
    };

    temp[hourlyIntervals[end]] = {
      UTC: subIntervalHour2,
      EPOCH: subIntervalHour2_EPOCH,
    };

    hourToHourIntervals.push(temp);

    startTime.UTC = addHours(startTime.UTC, increment);
    startTime.EPOCH = getEpoch(startTime.UTC);
    start++;
    end++;
  }

  const lastInterval = hourToHourIntervals.length - 1;
  if (
    hourToHourIntervals[lastInterval] &&
    hourToHourIntervals[lastInterval]['10:00pm']
  ) {
    const hour1 = hourToHourIntervals[lastInterval]['10:00pm'].UTC[0];
    const hour2 = hourToHourIntervals[lastInterval]['10:00pm'].UTC[1];

    if (!isSameDay(hour1, hour2)) {
      hourToHourIntervals[lastInterval]['10:00pm'].UTC[1] = subSeconds(
        hourToHourIntervals[lastInterval]['10:00pm'].UTC[1],
        1
      );
      hourToHourIntervals[lastInterval]['10:00pm'].EPOCH[1] =
        hourToHourIntervals[lastInterval]['10:00pm'].EPOCH[1] - 1;
    }
    delete hourToHourIntervals[lastInterval]['11:59pm'];
  }

  return hourToHourIntervals;
};

export default getHourlyIntervalsPerDay;
