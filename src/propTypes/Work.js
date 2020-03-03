/** @format */

import PropTypes from 'prop-types';

export const Url = {
  type: PropTypes.string,
  link: PropTypes.string,
};

export const Exif = {
  model: PropTypes.string,
  software: PropTypes.string,
  isoSpeedRatings: PropTypes.string,
  make: PropTypes.string,
};

export const Work = {
  id: PropTypes.string,
  urls: PropTypes.arrayOf(PropTypes.shape(Url)),
  exif: PropTypes.shape(Exif),
};
