import { MemoryRouter } from 'react-router';
import React from 'react';
import { render, screen } from '@testing-library/react';

import Table from 'components/Table';

import getGridHeaderInterval from 'helpers/getGridHeaderInterval';
import { weekDays } from 'helpers/getDaysOfTheWeek';

describe('Table (initial render)', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );
  });
  test('should display 2 hour interval slots on the row header ', () => {
    var twoHourIntervals = getGridHeaderInterval();

    twoHourIntervals.map((interval) => {
      screen.getByText(`${interval}`);
    });
  });

  test('should display every day of the week on the column header', () => {
    weekDays.map((day) => {
      screen.getByText(`${day}`);
    });
  });

  test('should display correct number of cells', () => {
    const cells = screen.getAllByText(/^[1-9][0-9]?$|^100$/);
    expect(cells.length).toBe(168);
  });
});
