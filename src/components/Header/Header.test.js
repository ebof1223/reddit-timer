import { MemoryRouter } from 'react-router';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from 'App';

describe('Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
  test('should validate "How it works" links', () => {
    const name = new RegExp('how it works', 'i');
    const howItWorks = screen.getByRole('link', { name });
    userEvent.click(howItWorks);
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });

  test('should validate "About" links', () => {
    const name = new RegExp('about', 'i');
    const about = screen.getByRole('link', { name });
    userEvent.click(about);
    expect(screen.getByRole('heading', { name })).toBeInTheDocument();
  });

  test('should validate logo link', () => {
    const name = new RegExp('logo.svg', 'i');
    const logo = screen.getByRole('link', { name });
    userEvent.click(logo);
    expect(
      screen.getByRole('heading', {
        name: 'No reactions to your reddit posts?',
      })
    ).toBeInTheDocument();
  });
});
