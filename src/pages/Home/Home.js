import React, { useState } from 'react';
import Container from '../../components/Container';
import { Section, Headline, Status } from './Home.style';
import Form from './Form';
import Table from '../../components/Table';
import { lastFullWeek, getEpoch } from './getDateInterval';
import lastWeekDays from '../../components/Table/weekDays';
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');

  const lastFullWeek_EPOCH = lastFullWeek.map((date) => getEpoch(date));

  const onSearch = async (subreddit) => {
    setStatus('loading');

    var lastWeekPosts = [];

    for (let dayAfter = 1; dayAfter < lastFullWeek_EPOCH.length; dayAfter++) {
      let dayAfterEpoch = lastFullWeek_EPOCH[dayAfter - 1];
      let dayBeforeEpoch = lastFullWeek_EPOCH[dayAfter];

      const url = `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}&after=${dayAfterEpoch}&before=${dayBeforeEpoch}&size=100`;
      console.log(url);
      const response = await fetch(url);
      const { data } = await response.json();
      console.log(data);
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
