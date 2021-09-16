import addHours from 'date-fns/addHours';

import { getEpoch } from '../../pages/Home/getDateInterval';

const getSplitInterval = (interval) => {
  var array = [];

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

    array.push(temp);
  }

  return array;
};

export default getSplitInterval;
