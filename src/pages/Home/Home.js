import React, { useState } from 'react';
import Container from '../../components/Container';
import { Section, Headline, Status } from './Home.style';
import Form from './Form';
import Table from '../../components/Table';
import { lastFullWeek, getEpoch } from './getDateInterval';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  const onSearch = async (subreddit) => {
    setStatus('loading');

    let lastWeekPosts = [];

    for (let dayAfter = 1; dayAfter < lastFullWeek.length; dayAfter++) {
      let dayAfterEpoch = getEpoch(lastFullWeek[dayAfter]);
      let dayBeforeEpoch = getEpoch(lastFullWeek[dayAfter - 1]);

      const url = `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}&after=${dayAfterEpoch}&before=${dayBeforeEpoch}&aggs=created_utc&size=500`;
      const response = await fetch(url);
      const { data } = await response.json();
      lastWeekPosts = [...lastWeekPosts, data];
    }
    setPosts([...lastWeekPosts].reverse());
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
        {/* add loader */}
        {status === 'loading' && <Status>Is loading</Status>}
        {status === 'resolved' && <Table posts={posts} />}
      </Section>
    </Container>
  );
};

export default Home;
