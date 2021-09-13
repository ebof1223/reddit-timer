import React from 'react';

import { Hero, Time, Group, Element, Day } from './table.styles';
import generate24HrPostTimes from './table-times-generate';

const Table = () => {
  return (
    <Hero>
      {[null, ...generate24HrPostTimes()].map((time) => (
        <Time key={time}>{time}</Time>
      ))}
      <Day>Monday</Day>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
      <Group>
        <Element>1</Element>
        <Element>1</Element>
      </Group>
    </Hero>
  );
};

export default Table;
