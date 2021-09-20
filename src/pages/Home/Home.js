import React, { useState } from 'react';

import Container from 'components/Container';
import Posts from 'components/Posts';
import Form from './Form';
import { Headline, Loader, Section } from './Home.style';
import Table from 'components/Table';
import { PostContext } from 'pages/Context/PostContext';

import { lastFullWeek, getEpoch } from 'helpers/getDateInterval';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('idle');
  const [selectedPost, setSelectedPost] = useState([]);

  const lastFullWeek_EPOCH = lastFullWeek.map((date) => getEpoch(date));

  const onSearch = async (subreddit) => {
    setPosts([]);
    setStatus('loading');

    var lastWeekPosts = [];

    for (let dayAfter = 1; dayAfter < lastFullWeek_EPOCH.length; dayAfter++) {
      const dayAfterEpoch = lastFullWeek_EPOCH[dayAfter - 1];
      const dayBeforeEpoch = lastFullWeek_EPOCH[dayAfter];

      var postArray = [];

      const url = `https://api.pushshift.io/reddit/search/submission/?subreddit=${subreddit}&after=${dayAfterEpoch}&before=${dayBeforeEpoch}&size=100`;

      const response = await fetch(url);
      const { data } = await response.json();

      for (let item of data) {
        const { retrieved_on, author, title, score, num_comments, full_link } =
          item;
        const postData = {
          retrieved_on,
          author,
          title,
          score,
          num_comments,
          full_link,
        };
        postArray = [...postArray, postData];
      }
      lastWeekPosts.push(postArray);
    }
    setPosts([...lastWeekPosts].reverse());
    setStatus('resolved');
  };

  console.log(selectedPost);
  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      <Container as="article">
        <Section>
          <Headline>Find how active your subreddit is!</Headline>
          <p>Get last week's posts for any subreddit</p>
          <Form onSearch={onSearch} />
          {status === 'loading' && <Loader />}
          {status === 'resolved' && (
            <>
              <Table posts={posts} />
              <Section as="p">
                All times are shown in your timezone:{' '}
                {`${Intl.DateTimeFormat().resolvedOptions().timeZone}`}
              </Section>
            </>
          )}
        </Section>
        {selectedPost.length > 0 && <Posts />}
      </Container>
    </PostContext.Provider>
  );
};

export default Home;
