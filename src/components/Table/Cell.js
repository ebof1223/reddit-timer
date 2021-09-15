import React, { useState } from 'react';

import { Element } from './Table.style';

const Cell = () => {
  const [postCount, setPostCount] = useState(1);

  return <Element>{postCount}</Element>;
};

export default Cell;
