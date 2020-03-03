/** @format */
/** @format */

import { mapEmptyToUnknown, UNKNOWN } from '../mapEmptyToUnknown';

describe('mapEmptyToUnknown', () => {
  test('should throw error if invalid input', () => {
    expect(() => mapEmptyToUnknown()).toThrowError(
      new Error('Error occurs in mapEmptyToUnknown(): Invalid parameter: exif'),
    );
  });

  test('should fill empty field to unknown', () => {
    const result = mapEmptyToUnknown({});

    expect(result.model).toBe(UNKNOWN.MODEL);
    expect(result.software).toBe(UNKNOWN.SOFTWARE);
    expect(result.isoSpeedRatings).toBe(UNKNOWN.ISO_SPEED_RATINGS);
    expect(result.make).toBe(UNKNOWN.MAKE);
  });
});
