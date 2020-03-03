/** @format */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select } from '../Select/Select';

const HeaderLayout = styled.section`
  display: grid;
  grid-template-columns: 1fr repeat(2, auto);
  align-items: center;
  font-size: 16px;
`;

const FilteredResult = styled.div``;

const FilterLayout = styled.div`
  display: grid;
  grid-template-columns: auto repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 16px;
`;

export function Header({
  filter: { model, make },
  models,
  makes,
  count,
  onFilter,
}) {
  return (
    <HeaderLayout>
      <FilteredResult data-testid="filtered-result">
        <strong>{count}</strong>
        &nbsp;
        <span>cameras were selected</span>
      </FilteredResult>
      <FilterLayout>
        <strong data-testid="label">Sort by</strong>
        <Select
          options={models}
          value={model}
          onSelect={({ target: { value } }) => {
            if (value) onFilter({ type: 'model', payload: { model: value } });
          }}
        />
        <Select
          options={makes}
          value={make}
          onSelect={({ target: { value } }) => {
            if (value) onFilter({ type: 'make', payload: { make: value } });
          }}
        />
      </FilterLayout>
    </HeaderLayout>
  );
}

Header.propTypes = {
  filter: PropTypes.shape({
    model: PropTypes.string,
    make: PropTypes.string,
  }).isRequired,
  models: PropTypes.arrayOf(PropTypes.string).isRequired,
  makes: PropTypes.arrayOf(PropTypes.string).isRequired,
  count: PropTypes.number.isRequired,
  onFilter: PropTypes.func.isRequired,
};
