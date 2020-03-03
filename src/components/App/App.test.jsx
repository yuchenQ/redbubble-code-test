/** @format */

import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, cleanup } from '@testing-library/react';
import { App } from './App';
import { WORKS } from '../../graphql/works';

const mocks = [
  {
    request: {
      query: WORKS,
    },
    result: {
      data: {
        works: [],
      },
    },
  },
];

describe('App', () => {
  afterEach(cleanup);

  it('should render loading state initially', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    expect(getByTestId('loading')).toHaveTextContent('Loading...');
  });

  test('should renders without errors', async () => {
    const { container } = await render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    );

    expect(container).toBeTruthy();
  });
});
