/** @format */

import React from 'react';
import PropTypes from 'prop-types';

export function Select({ options, value, onSelect }) {
  return (
    <select onChange={onSelect} value={value} data-testid="select">
      {options.map(option => (
        <option key={option} value={option} data-testid="option">
          {option}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
