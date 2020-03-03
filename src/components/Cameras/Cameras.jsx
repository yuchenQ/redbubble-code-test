/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Work } from '../../propTypes/Work';
import { Camera } from '../Camera/Camera';
import { filterUrlBySize } from '../../helpers/filterUrlBySize';

const StyledCameras = styled.div`
  display: grid;
  grid-row-gap: 2rem;
`;

export function Cameras({ works }) {
  return (
    <StyledCameras>
      {works.map(({ id, urls, exif }) => (
        <Camera key={id} url={filterUrlBySize(urls)} exif={exif} />
      ))}
    </StyledCameras>
  );
}

Cameras.propTypes = {
  works: PropTypes.arrayOf(PropTypes.shape(Work)).isRequired,
};
