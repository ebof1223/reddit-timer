import React from 'react';

import { Hero, Times, Time, Group, Element, Day } from './table.styles';
import { intervals } from './table-times-generate';

const Table = () => {
  return (
    <Hero>
      <Times>
        {[null, ...intervals].map((time) => (
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
      </Times>
    </Hero>
  );
};

export default Table;
