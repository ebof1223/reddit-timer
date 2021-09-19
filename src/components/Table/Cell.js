import React, { useEffect, useState } from 'react';

import { Element } from './Table.style';

const Cell = ({ props, setSelectedPost, selectedPost }) => {
  // console.log('render');
  const filteredProps = props.filter((arr) => arr.length);

  useEffect(() => {
    if (!selectedPost.length) return;
    setIsSelectedCell(
      JSON.stringify(selectedPost[0]) === JSON.stringify(filteredProps[0])
    );
  }, [selectedPost, filteredProps]);

  const [isSelectedCell, setIsSelectedCell] = useState(false);

  const postCount = filteredProps.length ? filteredProps[0].length : 0;

  const handleClick = () => {
    if (!postCount) return;
    setIsSelectedCell(true);
    setSelectedPost([...filteredProps]);
  };
  return (
    <Element
      onClick={handleClick}
      postCount={postCount}
      isSelectedCell={isSelectedCell}
    >
      {postCount}
    </Element>
  );
};

export default Cell;
