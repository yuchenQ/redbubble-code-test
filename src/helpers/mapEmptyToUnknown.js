/** @format */

const UNKNOWN = {
  MODEL: 'Unknown Model',
  SOFTWARE: 'Unknown Software',
  ISO_SPEED_RATINGS: 'Unknown Iso Speed Ratings',
  MAKE: 'Unknown Make',
};

/**
 * @param {Exif} exif
 * @return {Exif}
 */
export function mapEmptyToUnknown(exif) {
  if (!exif) {
    throw new Error(
      'Error occurs in mapEmptyToUnknown(): Invalid parameter: exif',
    );
  }

  const { model, software, isoSpeedRatings, make, ...rest } = exif;

  return {
    ...rest,
    model: model || UNKNOWN.MODEL,
    software: software || UNKNOWN.SOFTWARE,
    isoSpeedRatings: isoSpeedRatings || UNKNOWN.ISO_SPEED_RATINGS,
    make: make || UNKNOWN.MAKE,
  };
}
