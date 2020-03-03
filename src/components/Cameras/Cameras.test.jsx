/** @format */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Cameras } from './Cameras';

describe('Offers', () => {
  let getAllByTestId;

  const data = {
    works: [
      { id: '1', urls: [{ type: 'medium', link: 'link' }], exif: {} },
      { id: '2', urls: [{ type: 'medium', link: 'link' }], exif: {} },
      { id: '3', urls: [{ type: 'medium', link: 'link' }], exif: {} },
    ],
  };

  beforeEach(() => {
    ({ getAllByTestId } = render(<Cameras works={data.works} />));
  });

  afterEach(cleanup);

  test('should render all works', () => {
    expect(getAllByTestId('camera').length).toBe(data.works.length);
  });
});
