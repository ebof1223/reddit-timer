import addHours from 'date-fns/addHours';
import isSameDay from 'date-fns/isSameDay';
import subSeconds from 'date-fns/subSeconds';

import { getEpoch } from './getDateInterval';
import generate24HrPostTimes from './getGridHeaderInterval';
import lastWeekDays from './getDaysOfTheWeek';

const getHourlyIntervalsPerDay = (increment = 2, day) => {
  const hourlyIntervals = generate24HrPostTimes(increment, true);

  var hourToHourIntervals = [];

  let startIdx = 0;
  let endIdx = 1;
  let startTime = lastWeekDays[day][startIdx];
  let endTime = lastWeekDays[day][endIdx];

  while (startTime.EPOCH < endTime.EPOCH) {
    let temp = {};

    const subIntervalHour1 = [
      startTime.UTC,
      addHours(startTime.UTC, increment),
    ];
    const subIntervalHour1_EPOCH = subIntervalHour1.map((hour) =>
      getEpoch(hour)
    );
    const subIntervalHour2 = [
      subIntervalHour1[1],
      addHours(subIntervalHour1[1], increment),
    ];
    const subIntervalHour2_EPOCH = subIntervalHour2.map((hour) =>
      getEpoch(hour)
    );

    temp[hourlyIntervals[startIdx]] = {
      UTC: subIntervalHour1,
      EPOCH: subIntervalHour1_EPOCH,
    };

    temp[hourlyIntervals[endIdx]] = {
      UTC: subIntervalHour2,
      EPOCH: subIntervalHour2_EPOCH,
    };

    hourToHourIntervals.push(temp);

    startTime.UTC = addHours(startTime.UTC, increment);
    startTime.EPOCH = getEpoch(startTime.UTC);
    startIdx++;
    endIdx++;
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
