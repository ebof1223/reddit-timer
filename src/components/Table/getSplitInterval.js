import addHours from 'date-fns/addHours';
import { getEpoch } from '../../pages/Home/getDateInterval';
import isSameDay from 'date-fns/isSameDay';
import subSeconds from 'date-fns/subSeconds';

//where hour type = 1 is is the first hour of an interval, and 2 is the second
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

  // handles cases where adding an hour changes the day
  // if (!isSameDay(array[0][23], array[1][23])) {
  //   array[1][23].UTC[1] = subSeconds(array[1][23].UTC[1], 1);
  //   array[1][23].EPOCH[1] = array[1][23].EPOCH[1] - 1;
  // }

  // console.log(array);
  return array;
};

export default getSplitInterval;
