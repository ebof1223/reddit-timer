import React from 'react';

import Cell from './Cell';
import { Day, Hero, Hour, Section, Time } from './Table.style';

import getGridHeaderInterval from 'helpers/getGridHeaderInterval';
import getSplitInterval from 'helpers/getSplitInterval';
import lastWeekDays from 'helpers/getDaysOfTheWeek';
import weekDayWithOneHourIntervals from 'helpers/getHourlyIntervalsPerDay';

const Table = ({ posts }) => {
  const tableHeaderIntervals = [null, ...getGridHeaderInterval()];

  const sortPost = (postTime_EPOCH, interval) => {
    return postTime_EPOCH >= interval[0] && postTime_EPOCH <= interval[1];
  };

  return (
    <>
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
                {/* props are the posts times that within the the respective cells interval*/}
                <Cell
                  key={`${Object.keys(lastWeekDays)[idx]}-${
                    Object.keys(interval)[0]
                  }-hour1`}
                  props={
                    posts.length &&
                    posts.map((dayWithIntervals) =>
                      dayWithIntervals.filter((post) =>
                        sortPost(
                          post.retrieved_on,
                          getSplitInterval(
                            interval[Object.keys(interval)[0]].UTC[0]
                          )[0][
                            Object.keys(
                              getSplitInterval(
                                interval[Object.keys(interval)[0]].UTC[0]
                              )[0]
                            )
                          ].EPOCH
                        )
                      )
                    )
                  }
                />

                <Cell
                  key={`${Object.keys(lastWeekDays)[idx]}-${
                    Object.keys(interval)[0]
                  }-hour2`}
                  props={
                    posts.length &&
                    posts.map((dayWithIntervals) =>
                      dayWithIntervals.filter((post) =>
                        sortPost(
                          post.retrieved_on,
                          getSplitInterval(
                            interval[Object.keys(interval)[0]].UTC[0]
                          )[1][
                            Object.keys(
                              getSplitInterval(
                                interval[Object.keys(interval)[0]].UTC[0]
                              )[1]
                            )
                          ].EPOCH
                        )
                      )
                    )
                  }
                />
              </Hour>
            ))}
          </React.Fragment>
        ))}
      </Hero>
      <Section>
        All times are shown in your timezone:{' '}
        {`${Intl.DateTimeFormat().resolvedOptions().timeZone}`}
      </Section>
    </>
  );
};

export default Table;
