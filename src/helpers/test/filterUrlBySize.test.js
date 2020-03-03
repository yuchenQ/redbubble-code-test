/** @format */

import { filterUrlBySize, SIZE } from '../filterUrlBySize';

describe('filterUrlBySize', () => {
  test('should throw error if invalid input', () => {
    expect(() => filterUrlBySize()).toThrowError(
      new Error('Error occurs in filterImageBySize(): Invalid parameter: urls'),
    );
  });

  test('should filter url by size', () => {
    const result = filterUrlBySize([
      { type: SIZE.MEDIUM },
      { type: SIZE.SMALL },
      { type: SIZE.LARGE },
    ]);

    expect(result.type).toBe(SIZE.MEDIUM);
  });
});
