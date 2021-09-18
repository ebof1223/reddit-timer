import React, { useState } from 'react';

import { Element } from './Table.style';

const Cell = ({ props }) => {
  const [postCount, setPostCount] = useState(props.length || 0);
  return <Element>{postCount}</Element>;
};

export default Cell;
