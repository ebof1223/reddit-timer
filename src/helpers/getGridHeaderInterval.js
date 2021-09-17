//only for midnight to midnight
const getGridHeaderInterval = (increment = 2, forObj = false) => {
  let start = '12:00';

  let currentTime = start;

  var postTimesArray = [start];

  do {
    if (currentTime === '12:00') {
      currentTime = timeCarryOver(currentTime, 0, increment);
    } else if (currentTime === '08:00') {
      currentTime = timeCarryOver(currentTime, 1, 0);
    } else {
      currentTime = timeCarryOver(
        currentTime,
        Number(currentTime[0]),
        Number(currentTime[1]) + increment
      );
    }

    postTimesArray.push(currentTime);
  } while (currentTime !== start);

  var intervals = [
    ...postTimesArray
      .map((item) => item.concat('am'))
      .slice(0, postTimesArray.length - 1),
    ...postTimesArray
      .slice(0, postTimesArray.length - 1)
      .map((item) => item.concat('pm')),
  ];

  if (forObj) intervals.push('11:59pm');
  return intervals;
};

function timeCarryOver(time, hour1, hour2) {
  time = time.split('');
  time[0] = hour1.toString();
  time[1] = hour2.toString();
  time = time.join('');
  return time;
}

export default getGridHeaderInterval;
