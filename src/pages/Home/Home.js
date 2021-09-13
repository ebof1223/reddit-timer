import React, { useState } from 'react';
import Container from '../../components/Container';
import { Section, Headline, Status, TopPosts } from './Home.style';
import Form from './Form';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  const onSearch = async (subreddit) => {
    setStatus('loading');
    const url = `https://www.reddit.com/r/${subreddit}/top.json`;
    const response = await fetch(url);
    const { data } = await response.json();
    setPosts(data.children);
    setStatus('resolved');
  };

  return (
    <Container>
      <Section>
        <Headline>No reactions to your reddit posts?</Headline>
        <p>
          Great timing, great results! Find the best time to post on your
          subreddit.
        </p>
        <Form onSearch={onSearch} />
      </Section>

      {status === 'loading' && <Status>Is loading</Status>}
      {status === 'resolved' && (
        <TopPosts>Number of top posts: {posts.length}</TopPosts>
      )}
    </Container>
  );
};

export default Home;
