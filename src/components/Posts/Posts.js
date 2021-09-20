import React, { useContext } from 'react';

import {
  Container,
  HeaderRow,
  Label,
  Post,
  PostRow,
  Table,
  Title,
} from './Posts.style';

import getDateConvert from 'helpers/getDateConvert';
import { getUTC } from 'helpers/getDateInterval';
import { PostContext } from 'pages/Context/PostContext';

const Posts = () => {
  const context = useContext(PostContext);

  const { selectedPost } = context;

  return (
    <>
      <Title>Posts</Title>
      <Container as="article">
        <Table>
          <HeaderRow>
            <Label>Title</Label>
            <Label>Posted</Label>
            <Label>Score</Label>
            <Label>Comments</Label>
            <Label>Author</Label>
          </HeaderRow>
          {selectedPost[0].map((item, idx) => (
            <PostRow key={`row-${idx}`}>
              <Post key={`title-${idx}`}>
                <a aria-label="title" href={`${item.full_link}`}>
                  {item.title}
                </a>
              </Post>
              <Post key={`retrieved_on-${idx}`}>
                {getDateConvert(
                  getUTC(item.retrieved_on),
                  'h:m t'
                ).toLowerCase()}
              </Post>
              <Post key={`score-${idx}`}>{item.score}</Post>
              <Post key={`num_comments-${idx}`}>{item.num_comments}</Post>
              <Post key={`author-${idx}`}>
                <a href={`https://www.reddit.com/user/${item.author}/`}>
                  {item.author}
                </a>
              </Post>
            </PostRow>
          ))}
        </Table>
      </Container>
    </>
  );
};

export default Posts;
