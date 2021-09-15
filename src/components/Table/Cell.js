import React, { useState } from 'react';

import { Element } from './Table.style';

const Cell = ({ props }) => {
  const [postCount, setPostCount] = useState(1);
  return <Element onClick={() => console.log(props)}>{postCount}</Element>;
};

export default Cell;
