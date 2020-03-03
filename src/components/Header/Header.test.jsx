/** @format */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  const data = {
    filter: { model: 'model', make: 'make' },
    models: [],
    makes: [],
    count: 5,
    onFilter: () => {},
  };

  let getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(<Header {...data} />));
  });

  afterEach(cleanup);

  test('should show result', () => {
    expect(getByTestId('filtered-result')).toHaveTextContent(
      `${data.count} cameras were selected`,
    );
  });

  test('should show label', () => {
    expect(getByTestId('label')).toHaveTextContent('Sort by');
  });
});
