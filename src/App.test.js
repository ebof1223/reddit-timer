/* eslint-disable comma-dangle */
import { screen } from '@testing-library/dom';
import { MemoryRouter } from 'react-router';
import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it('renders dom', () => {
    screen.debug();
  });
});
