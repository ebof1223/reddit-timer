import React from 'react';

import Cell from './Cell';
import { Day, Hero, Hour, Time } from './Table.style';

import getGridHeaderInterval from 'helpers/getGridHeaderInterval';
import lastWeekDays from 'helpers/getDaysOfTheWeek';
import weekDayWithOneHourIntervals from 'helpers/getHourlyIntervalsPerDay';
import getSplitInterval from 'helpers/getSplitInterval';

const Table = ({ posts }) => {
  const tableHeaderIntervals = [null, ...getGridHeaderInterval()];
  return (
    <Hero>
      {tableHeaderIntervals.map((time) =>
        time ? <Time key={time}>{time}</Time> : <Time key="blank" />
      )}

      {weekDayWithOneHourIntervals.map((pseudoDay, idx) => (
        <React.Fragment key={`${Object.keys(lastWeekDays)[idx]}`}>
          <Day key={`${Object.keys(lastWeekDays)[idx]}-row${idx}`}>
            {Object.keys(lastWeekDays)[idx]}
          </Day>

          {pseudoDay.map((interval) => (
            <Hour
              key={`${Object.keys(lastWeekDays)[idx]}-${
                Object.keys(interval)[0]
              }`}
            >
              <Cell
                key={`${Object.keys(lastWeekDays)[idx]}-${
                  Object.keys(interval)[0]
                }-hour1`}
                props={
                  getSplitInterval(interval[Object.keys(interval)[0]].UTC[0])[0]
                }
              />
              <Cell
                key={`${Object.keys(lastWeekDays)[idx]}-${
                  Object.keys(interval)[0]
                }-hour2`}
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
