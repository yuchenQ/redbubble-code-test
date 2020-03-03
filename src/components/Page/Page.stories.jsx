/** @format */

import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Page } from './Page';

export default {
  title: 'Page',
  component: Page,
  decorators: [withKnobs],
  parameters: {
    notes: 'The boilerplate of Page format',
  },
  includeStories: ['Default'], // if some data exported as well, or use excludeStories: /.*Data$/,
};

export function Default() {
  return (
    <Page header={text('header', 'header')}>
      {text('children', 'children')}
    </Page>
  );
}
