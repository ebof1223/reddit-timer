import React from 'react';

import { Hero, Time, Group, Element, Day } from './table.styles';
import generate24HrPostTimes from './table-times-generate';
import { weekDays } from './weekDays';

const Table = () => {
  const times = [null, ...generate24HrPostTimes()];

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
              <Element key={`${day}-${time}-item-0`}>1</Element>
              <Element key={`${day}-${time}-item-1`}>1</Element>
            </Group>
          ))}
        </React.Fragment>
      ))}
    </Hero>
  );
};

export default Table;
