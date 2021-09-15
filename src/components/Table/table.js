import React from 'react';

import { Hero, Time, Day } from './Table.style';
import generate24HrPostTimes from './getGridTimesIntervals';
import lastWeekDays from './weekDays';
import { lastFullWeek, getEpoch } from '../../pages/Home/getDateInterval';
import Cell from './Cell';
import Hour from './Hour';
import weekIntervals from './getWeekIntervals';
import getBlockHourlyIntervals from './getBlockHourlyIntervals';

const Table = ({ posts }) => {
  const everyTwoHoursInterval = getBlockHourlyIntervals();
  const times = [null, ...everyTwoHoursInterval];

  return (
    <Hero>
      {times.map((time) =>
        time ? (
          <Time key={Object.keys(time)[0]}>{Object.keys(time)[0]}</Time>
        ) : (
          <Time key="blank" />
        )
      )}

      {Object.keys(lastWeekDays).map((day) => (
        //run sorting function here using lastWeekDay[day]
        <React.Fragment key={day}>
          <Day key={day}>{day}</Day>
          {times.slice(1).map((time) => (
            // make group its own component that takes the each day interval and passes down the appropriate ones to the cells
            <Hour key={`${day}-${Object.keys(time)[0]}`}>
              {/* if post is on this day and between time and time + 30, sort in here */}
              <Cell key={`${day}-${Object.keys(time)[0]}-item-0`} />
              {/* if post is on this day and between time + 30 and time + 60, sort in here */}
              <Cell key={`${day}-${Object.keys(time)[0]}-item-1`} />
            </Hour>
          ))}
        </React.Fragment>
      ))}
    </Hero>
  );
};

export default Table;
