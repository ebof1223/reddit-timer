import addHours from 'date-fns/addHours';

import { getEpoch } from './getDateInterval';

const getSplitInterval = (interval) => {
  var splitInterval = [];

  const hour1 = interval;

  const startingIntervals = [hour1, addHours(hour1, 1)];

  for (let time of startingIntervals) {
    let temp = {};

    let UTC = [time, addHours(time, 1)];
    let EPOCH = UTC.map((time) => getEpoch(time));

    let key = time.getHours();

    temp[key] = {
      UTC,
      EPOCH,
    };

    splitInterval.push(temp);
  }

  return splitInterval;
};

export default getSplitInterval;
