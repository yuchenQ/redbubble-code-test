/** @format */

import { distinctBySet } from '../distinctBySet';

describe('distinctBySet', () => {
  test('should remove duplicated elements', () => {
    const arr = distinctBySet([1, 2, 2]);

    expect(arr).toContain(1);
    expect(arr).toContain(2);
    expect(arr.length).toBe(2);
  });
});
