/** @format */
import React, { useState } from 'react';
import { withKnobs, array } from '@storybook/addon-knobs';
import { Select } from './Select';

export default {
  title: 'Select',
  component: Select,
  decorators: [withKnobs],
  parameters: {
    notes: 'The component provides selecting among options',
  },
  includeStories: ['Default'],
};

const options = ['option_1', 'option_2', 'option_3'];

const DefaultSelect = () => {
  const [value, setValue] = useState(options[0]);

  return (
    <Select
      options={array('options', options)}
      value={value}
      onSelect={({ target: { value: newValue } }) => {
        setValue(newValue);
      }}
    />
  );
};

// TODO: remove workaround for avoid breaking snapshot test when using hook
export const Default = () => <DefaultSelect />;
