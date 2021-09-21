import React from 'react';
import { render } from '@testing-library/react';

import Header from 'components/Header';

describe('Header', () => {
  test('displays logo', () => {
    const { getByRole } = render(<Header />);
    const logo = getByRole('banner');
    expect(logo).toBeTruthy();
  });
});
