import React, { useState } from 'react';

import { Element } from './table.styles';

const Cell = () => {
  const [postCount, setPostCount] = useState(1);

  return <Element>{postCount}</Element>;
};

export default Cell;
