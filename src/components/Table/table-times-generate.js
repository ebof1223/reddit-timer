const timeCarryOver = (time, hour1, hour2) => {
  time = time.split('');
  time[0] = hour1.toString();
  time[1] = hour2.toString();
  time = time.join('');
  return time;
};

//only supports even hours
//does not reliably change midnight and noon
const generate24HrPostTimes = (start = '12:00') => {
  var postTimesArray = [start];

  let currentTime = start;

  do {
    if (currentTime === '12:00') {
      currentTime = timeCarryOver(currentTime, 0, 2);
    } else if (currentTime === '08:00') {
      currentTime = timeCarryOver(currentTime, 1, 0);
    } else {
      currentTime = timeCarryOver(
        currentTime,
        Number(currentTime[0]),
        Number(currentTime[1]) + 2
      );
    }

    postTimesArray.push(currentTime);
  } while (currentTime !== start);

  const intervals = [
    ...postTimesArray
      .map((item) => item.concat('am'))
      .slice(0, postTimesArray.length - 1),
    ...postTimesArray
      .slice(0, postTimesArray.length - 1)
      .map((item) => item.concat('pm')),
  ];
  return intervals;
};
export default generate24HrPostTimes;