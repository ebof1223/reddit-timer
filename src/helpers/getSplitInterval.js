import addHours from 'date-fns/addHours';

import { getEpoch } from './getDateInterval';

const getSplitInterval = (interval) => {
  var splitInterval = [];

  const startingIntervals = [interval, addHours(interval, 1)];

  for (let time of startingIntervals) {
    let temp = {};

    const UTC = [time, addHours(time, 1)];
    const EPOCH = UTC.map((time) => getEpoch(time));

    const key = time.getHours();

    temp[key] = {
      UTC,
      EPOCH,
    };

    splitInterval.push(temp);
  }

  return splitInterval;
};

export default getSplitInterval;
