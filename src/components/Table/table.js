import React from 'react';
import { Hero, Time, Day, Hour } from './Table.style';
import generate24HrPostTimes from './getGridTimesIntervals';
import lastWeekDays, { weekDays } from './weekDays';
import { lastFullWeek, getEpoch } from '../../pages/Home/getDateInterval';
import Cell from './Cell';
import weekIntervals from './getWeekIntervals';
import getBlockHourlyIntervals from './getBlockHourlyIntervals';
import addHours from 'date-fns/addHours';
import getSplitInterval from './getSplitInterval';

const Table = ({ posts }) => {
  const tableHeaderIntervals = [null, ...generate24HrPostTimes()];

  return (
    <Hero>
      {tableHeaderIntervals.map((time) =>
        time ? <Time key={time}>{time}</Time> : <Time key="blank" />
      )}

      {weekDays.map((day) => (
        <React.Fragment key={day}>
          <Day key={day}>{day}</Day>
          {getBlockHourlyIntervals(2, day)
            // .slice(twoHourIntervals.length - 1)
            .map((interval) => (
              <Hour key={`${day}-${Object.keys(interval)[0]}`}>
                <Cell
                  key={`${day}-${Object.keys(interval)[0]}-item-0`}
                  props={
                    getSplitInterval(
                      interval[Object.keys(interval)[0]].UTC[0]
                    )[0]
                  }
                />

                <Cell
                  key={`${day}-${Object.keys(interval)[0]}-item-1`}
                  props={
                    getSplitInterval(
                      interval[Object.keys(interval)[0]].UTC[0]
                    )[1]
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
