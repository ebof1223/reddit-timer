import React, { useState, useEffect } from 'react';

import { Element } from './Table.style';

const Cell = ({ props, setSelectedPost, selectedPost }) => {
  var filteredProps;
  if (props.length) filteredProps = props.filter((arr) => arr.length);
  const postCount = props.length
    ? filteredProps.length
      ? filteredProps[0].length
      : 0
    : 0;

  const [selectedCell, setSelectedCell] = useState(false);

  useEffect(() => {
    if (selectedPost.length === 0) return;
    setSelectedCell(
      JSON.stringify(selectedPost) === JSON.stringify(filteredProps)
    );
  }, [selectedPost, filteredProps]);

  const handleClick = () => {
    if (!postCount) return;
    setSelectedCell(true);
    setSelectedPost([...filteredProps]);
  };
  return (
    <Element
      onClick={handleClick}
      postCount={postCount}
      selectedCell={selectedCell}
    >
      {postCount}
    </Element>
  );
};

export default Cell;
