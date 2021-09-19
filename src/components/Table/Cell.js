import { daysToWeeks } from 'date-fns';
import React, { useState } from 'react';

import { Element } from './Table.style';

const Cell = ({ props }) => {
  const postCount = props.length
    ? props.filter((arr) => arr.length).length
      ? props.filter((arr) => arr.length)[0].length
      : 0
    : 0;

  return <Element>{postCount}</Element>;
};

export default Cell;
