import React from 'react';

import { Hero, Time, Group, Day } from './table.styles';
import generate24HrPostTimes from './table-times-generate';
import lastWeekDays from './weekDays';
import { lastFullWeek, getEpoch } from '../../pages/Home/getDateInterval';
import addHours from 'date-fns/addHours';
import subSeconds from 'date-fns/subSeconds';
import addSeconds from 'date-fns/addSeconds';
import Cell from './Cell';
import weekInterval from './getWeekIntervals';

const Table = ({ posts }) => {
  const times = [null, ...generate24HrPostTimes()];

  // console.log(weekIntervals);

  // console.log(weekIntervals[0]);
  // const getHourlyIntervals = () => {
  //   let hourlyIntervals = [];

  //   let startTime = weekIntervals[0][0];
  //   let endTime = weekIntervals[1][1];
  //   console.log(weekIntervals);
  //   while (startTime.EPOCH < endTime.EPOCH) {
  //     let temp = {};
  //     let subIntervalHour1 = [startTime.UTC, addHours(startTime.UTC, 1)];
  //     let subIntervalHour1_EPOCH = subIntervalHour1.map((hour) =>
  //       getEpoch(hour)
  //     );
  //     let subIntervalHour2 = [
  //       subIntervalHour1[1],
  //       addHours(subIntervalHour1[1], 1),
  //     ];
  //     let subIntervalHour2_EPOCH = subIntervalHour2.map((hour) =>
  //       getEpoch(hour)
  //     );
  //     temp['12:00am'] = {
  //       UTC: subIntervalHour1,
  //       EPOCH: subIntervalHour1_EPOCH,
  //     };
  //     temp['01:00am'] = {
  //       UTC: subIntervalHour2,
  //       EPOCH: subIntervalHour2_EPOCH,
  //     };

  //     hourlyIntervals.push(temp);
  //   }
  //   return hourlyIntervals;
  // };

  // console.log(getHourlyIntervals());
  // x-axis
  // console.log(times);
  //'"y" axis, (days of the week are hard coded, but could grap them from here',

  // generate hourly interval

  // while (current_EPOCH !== end_EPOCH) {
  // console.log(interval1);
  // console.log(interval2);
  // console.log(current);
  // console.log(end);
  // current = addHours(current, 2);
  // let day = weekInterval[0];
  //this is assigned to cell 1

  // console.log(times);

  return (
    <Hero>
      {times.map((time) => (
        <Time key={time}>{time}</Time>
      ))}

      {Object.keys(lastWeekDays).map((day, index) => (
        <React.Fragment key={day}>
          <Day key={`${day}-${index}`}>{day}</Day>

          {times.slice(1).map((time) => (
            <Group key={`${day}-${time}`}>
              {/* if post is on this day and between time and time + 30, sort in here */}
              <Cell key={`${day}-${time}-item-0`} />
              {/* if post is on this day and between time + 30 and time + 60, sort in here */}
              <Cell key={`${day}-${time}-item-1`} />
            </Group>
          ))}
        </React.Fragment>
      ))}
    </Hero>
  );
};

export default Table;
