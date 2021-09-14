import React from 'react';

import { Hero, Time, Group, Element, Day } from './table.styles';
import generate24HrPostTimes from './table-times-generate';
import { weekDays } from './weekDays';

const Table = ({ posts }) => {
  const times = [null, ...generate24HrPostTimes()];

  const createdTimes = posts[0]
    .reverse()
    .map((post) => new Date(post.created_utc * 1000));

  console.log(createdTimes);

  return (
    <Hero>
      {times.map((time) => (
        <Time key={time}>{time}</Time>
      ))}

      {weekDays.map((day, index) => (
        <React.Fragment key={day}>
          <Day key={`${day}-${index}`}>{day}</Day>

          {times.slice(1).map((time) => (
            <Group key={`${day}-${time}`}>
              {/* if post is on this day and between time and time + 30, sort in here */}
              <Element key={`${day}-${time}-item-0`}>1</Element>
              {/* if post is on this day and between time + 30 and time + 60, sort in here */}
              <Element key={`${day}-${time}-item-1`}>1</Element>
            </Group>
          ))}
        </React.Fragment>
      ))}
    </Hero>
  );
};

export default Table;
