import React from 'react';
import { Hero, Time, Day, Hour } from './Table.style';
import generate24HrPostTimes from '../../helpers/getGridTimesIntervals';
import lastWeekDays from '../../helpers/getDaysOfTheWeek';
import Cell from './Cell';
// getBlockHourlyIntervals
// can't rename for some reason?
import getHourlyIntervalsPerDay from '../../helpers/getHourlyIntervalsPerDay';
import getSplitInterval from '../../helpers/getSplitInterval';

const Table = ({ posts }) => {
  const tableHeaderIntervals = [null, ...generate24HrPostTimes()];
  // console.log(posts);
  return (
    <Hero>
      {tableHeaderIntervals.map((time) =>
        time ? <Time key={time}>{time}</Time> : <Time key="blank" />
      )}

      {Object.keys(lastWeekDays).map((day) => (
        <React.Fragment key={day}>
          <Day key={day}>{day}</Day>
          {getHourlyIntervalsPerDay(2, day).map((interval) => (
            <Hour key={`${day}-${Object.keys(interval)[0]}`}>
              <Cell
                key={`${day}-${Object.keys(interval)[0]}-hour1`}
                props={
                  getSplitInterval(interval[Object.keys(interval)[0]].UTC[0])[0]
                }
              />
              <Cell
                key={`${day}-${Object.keys(interval)[0]}-hour2`}
                props={
                  getSplitInterval(interval[Object.keys(interval)[0]].UTC[0])[1]
                }
              />
            </Hour>
          ))}
        </React.Fragment>
      ))}
    </Hero>
  );
};

export default Table;
