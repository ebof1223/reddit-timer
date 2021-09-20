import React, { useEffect, useContext, useState } from 'react';

import { Element } from './Table.style';
import { PostContext } from 'pages/Context/PostContext';

const Cell = ({ props }) => {
  const filteredProps = props.filter((arr) => arr.length);

  const context = useContext(PostContext);

  const { selectedPost, setSelectedPost } = context;

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
