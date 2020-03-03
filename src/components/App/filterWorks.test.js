/** @format */

import { filterWorks, ALL } from './filterWorks';

describe('filterWorks', () => {
  const works = [
    {
      exif: {
        model: 'model',
        make: 'make',
      },
    },
    {
      exif: {
        model: 'model',
        make: 'makeX',
      },
    },
    {
      exif: {
        model: 'modelY',
        make: 'make',
      },
    },
    {},
  ];

  test('should throw error if invalid input', () => {
    expect(() => filterWorks()).toThrowError(
      new Error('Error occurs in filterWorks(): Invalid parameter: state'),
    );

    expect(() => filterWorks({})).toThrowError(
      new Error('Error occurs in filterWorks(): Invalid parameter: works'),
    );
  });

  test('should filtering by model', () => {
    const arr = filterWorks({ model: 'model', make: ALL }, works);

    expect(arr.length).toBe(2);
  });

  test('should filtering by make', () => {
    const arr = filterWorks({ model: ALL, make: 'make' }, works);

    expect(arr.length).toBe(2);
  });

  test('should filtering by both model and make', () => {
    const arr = filterWorks({ model: 'model', make: 'make' }, works);

    expect(arr.length).toBe(1);
  });

  test('should show all works', () => {
    const arr = filterWorks({ model: ALL, make: ALL }, works);

    expect(arr.length).toBe(4);
  });
});
