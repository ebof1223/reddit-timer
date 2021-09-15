import lastWeekDays from './weekDays';
import addHours from 'date-fns/addHours';
import { getEpoch } from '../../pages/Home/getDateInterval';
import generate24HrPostTimes from './getGridTimesIntervals';
import subSeconds from 'date-fns/subSeconds';

const getBlockHourlyIntervals = (increment = 2) => {
  const hourlyIntervals = generate24HrPostTimes(increment, true);

  let start = 0;
  let end = 1;
  let hourToHourIntervals = [];
  //dynmaically search
  let startTime = lastWeekDays['Sunday'][0];
  let endTime = lastWeekDays['Sunday'][1];

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
  // hourToHourIntervals = hourToHourIntervals.slice(0, lastInterval);
  hourToHourIntervals[lastInterval]['10:00pm'].UTC[1] = subSeconds(
    hourToHourIntervals[lastInterval]['10:00pm'].UTC[1],
    1
  );
  hourToHourIntervals[lastInterval]['10:00pm'].EPOCH[1] = getEpoch(
    hourToHourIntervals[lastInterval]['10:00pm'].UTC[1]
  );

  if (increment === 2) delete hourToHourIntervals[lastInterval]['11:59'];

  return hourToHourIntervals;
};

// getBlockHourlyIntervals();

export default getBlockHourlyIntervals;
