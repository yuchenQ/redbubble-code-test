/** @format */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Camera } from './Camera';

describe('Camera', () => {
  const data = {
    url: { link: 'https://unsplash.it/145/125/?random' },
    exif: {
      model: 'model',
      software: 'software',
      isoSpeedRatings: 'isoSpeedRatings',
      make: 'make',
    },
  };

  let getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(<Camera {...data} />));
  });

  afterEach(cleanup);

  test('should show preview image', () => {
    const previewImage = getByTestId('preview-image');
    expect(previewImage.src).toBe(data.url.link);
  });

  test('should show camera specification', () => {
    const {
      exif: { model, software, isoSpeedRatings, make },
    } = data;

    expect(getByTestId('model')).toHaveTextContent(`Model: ${model}`);
    expect(getByTestId('software')).toHaveTextContent(`Software: ${software}`);
    expect(getByTestId('iso-speed-ratings')).toHaveTextContent(
      `Iso Speed Ratings: ${isoSpeedRatings}`,
    );
    expect(getByTestId('make')).toHaveTextContent(`Make: ${make}`);
  });
});
