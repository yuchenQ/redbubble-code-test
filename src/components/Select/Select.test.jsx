/** @format */

import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import { Select } from './Select';

describe('Select', () => {
  const onSelectSpy = sinon.spy();
  const options = ['option_1', 'option_2', 'option_3'];

  const data = {
    options,
    onSelect: ({ target: { value } }) => onSelectSpy(value),
    value: options[0],
  };

  let getByTestId;
  let getAllByTestId;

  beforeEach(() => {
    ({ getAllByTestId, getByTestId } = render(
      <Select
        options={data.options}
        onSelect={data.onSelect}
        value={data.value}
      />,
    ));
  });

  afterEach(cleanup);

  test('should have all input options', () => {
    getAllByTestId('option').forEach((element, i) => {
      expect(element.value).toBe(data.options[i]);
    });
  });

  test('should see default option first', () => {
    const { value } = getByTestId('select');

    expect(value).toBe(data.value);
  });

  test('should invoke onSelect & value', () => {
    const select = getByTestId('select');

    expect(select.value).toBe(data.value);

    const { value } = getAllByTestId('option')[0];

    fireEvent.change(select, { target: { value } });
    sinon.assert.calledWith(onSelectSpy, data.value);
  });
});
