import fetchMock from 'jest-fetch-mock';
import { MemoryRouter } from 'react-router';
import mockResponse from './__mocks__/subreddit-react-js-response.json';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

fetchMock.enableMocks();

beforeEach(() => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

describe('Header', () => {
  //how to condense this to a single test
  test('Valid "How it works" links', () => {
    const name = new RegExp('how it works', 'i');
    const howItWorks = screen.getByRole('link', { name });
    userEvent.click(howItWorks);
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });

  test('Valid "About" links', () => {
    const name = new RegExp('about', 'i');
    const about = screen.getByRole('link', { name });
    userEvent.click(about);
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });

  test('Valid logo link', () => {
    const name = new RegExp('logo.svg', 'i');
    const logo = screen.getByRole('link', { name });
    userEvent.click(logo);
    expect(
      screen.getByRole('heading', { name: 'Find the top posts on Reddit' })
    ).toBeInTheDocument();
  });
});

describe('Form', () => {
  test('load posts and renders them on the page', async () => {
    fetch.once(JSON.stringify(mockResponse));

    const subredditInput = screen.getByLabelText('r /');
    userEvent.type(subredditInput, 'reactjs');

    const submitButton = screen.getByRole('button', { name: 'Search' });
    userEvent.click(submitButton);

    const loading = screen.getByText(/is loading/i);
    expect(loading).toBeInTheDocument();

    const numberOfTopPosts = await screen.findByText(
      /Number of top posts: 25/i
    );
    expect(numberOfTopPosts).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledWith(
      'https://www.reddit.com/r/reactjs/top.json'
    );
    screen.debug();
  });
});
