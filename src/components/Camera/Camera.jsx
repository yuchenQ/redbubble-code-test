/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLOR_DUSTY_GRAY } from '../../styles/variables';
import { Url, Exif } from '../../propTypes/Work';
import { mapEmptyToUnknown } from '../../helpers/mapEmptyToUnknown';

const StyledCamera = styled.div`
  --gap: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  position: relative;
  grid-column-gap: var(--gap);

  & ~ & {
    ::before {
      content: '';
      border-top: 1px solid ${COLOR_DUSTY_GRAY};
      position: absolute;
      right: 0;
      left: 0;
      top: calc(var(--gap) * -1);
    }
  }
`;

const PreviewImage = styled.img.attrs(({ imageUrl, caption }) => ({
  alt: caption,
  src: imageUrl,
}))`
  display: block;
  border: 1px solid ${COLOR_DUSTY_GRAY};
`;

const Spec = styled.div`
  justify-self: end;
  align-self: center;
  display: grid;
  grid-row-gap: 16px;
`;

const Item = styled.div`
  min-width: 450px;
  text-align: end;
  display: flex;
  justify-content: space-between;
`;

export function Camera({ url: { link }, exif }) {
  const { model, software, isoSpeedRatings, make } = mapEmptyToUnknown(exif);

  return (
    <StyledCamera>
      <PreviewImage
        imageUrl={link}
        caption="camera preview"
        data-testid="preview-image"
      />
      <Spec>
        <Item data-testid="model">
          <span>Model:</span>&nbsp;<strong>{model}</strong>
        </Item>
        <Item data-testid="software">
          <span>Software:</span>&nbsp;<strong>{software}</strong>
        </Item>
        <Item data-testid="iso-speed-ratings">
          <span>Iso Speed Ratings:</span>&nbsp;
          <strong>{isoSpeedRatings}</strong>
        </Item>
        <Item data-testid="make">
          <span>Make:</span>&nbsp;<strong>{make}</strong>
        </Item>
      </Spec>
    </StyledCamera>
  );
}

Camera.defaultProps = {
  exif: {},
};
Camera.propTypes = {
  url: PropTypes.shape(Url).isRequired,
  exif: PropTypes.shape(Exif),
};
