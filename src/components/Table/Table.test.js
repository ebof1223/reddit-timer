import React from 'react';
import { render, waitForElement, cleanup } from '@testing-library/react';
import axiosMock from 'axios';

import userEvent from '@testing-library/user-event';

import Home from 'pages/Home';
import Table from './';

afterEach(cleanup);

describe('Page content with search', () => {
  test('should parse API fetch data correctly', async () => {
    const { findAllByRole, getByRole, debug, getByTestId } = render(<Home />);
    const searchBtn = getByRole('button', /Get me last week's posts/i);
    // userEvent.click(searchBtn);

    // const table = await waitForElement(() => {
    //   getByTestId('table');
    // });
    // console.log(table);

    // await waitFor(() => expect(axiosMock).toHaveBeenCalledTimes(1));

    // expect(axiosMock.get).toHaveBeenCalledOnce;
  });
});
