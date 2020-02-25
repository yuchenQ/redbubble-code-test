/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from './App';

describe('App should be rendered without error', () => {
  afterEach(cleanup);

  test('Hello World', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('hello-world')).toHaveTextContent('Hello World!');
  });
});
