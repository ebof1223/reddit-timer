import React, { useState } from 'react';
import Container from '../../components/Container';
import { Section, Headline, Status, TopPosts } from './Home.style';
import Form from './Form';
import Table from '../../components/Table';

import {
  endOfLastSaturdayEPOCH,
  beginningOfSundayEPOCH,
} from './getDateInterval';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  const onSearch = async (subreddit) => {
    setStatus('loading');
    const url = `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}&after=${beginningOfSundayEPOCH}&before=${endOfLastSaturdayEPOCH}&aggs=created_utc&size=500`;
    const response = await fetch(url);
    const { data } = await response.json();
    setPosts(data);
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
        {/* will be passig data in Table */}
        <Table posts={posts} />
      </Section>

      {status === 'loading' && <Status>Is loading</Status>}
      {/* {status === 'resolved' && (
        <TopPosts>Number of top posts: {posts.length}</TopPosts>
      )} */}
    </Container>
  );
};

export default Home;
