import React, { useState } from 'react';

import Form from './Form';
import Posts from 'components/Posts';
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
    setSelectedPost([]);
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

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      <Section>
        <Headline>Find how active your subreddit is!</Headline>
        <p>
          Disclaimer: The API I used capped me at 100 posts per request, so each
          table only lists up to 700 posts in a given week. This likely means
          that only small to moderately sized subreddits will generate an
          accurate heatmap.{' '}
        </p>
        <Form onSearch={onSearch} />
        {status === 'loading' && <Loader />}
        {status === 'resolved' && (
          <>
            <Table posts={posts} />
            <p>
              All times are shown in your timezone:
              <strong>
                {` ${Intl.DateTimeFormat().resolvedOptions().timeZone}`}
              </strong>
            </p>
          </>
        )}
      </Section>
      {selectedPost.length > 0 && status === 'resolved' && <Posts />}
    </PostContext.Provider>
  );
};

export default Home;
