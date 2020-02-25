/** @format */

import { addParameters } from '@storybook/react'; // <- or your storybook framework
import { COLOR_CLOUD_BURST_BLUE, COLOR_WHITE } from '../src/styles/variables';

addParameters({
  backgrounds: [
    { name: 'Light', value: COLOR_WHITE, default: true },
    { name: 'Dark', value: COLOR_CLOUD_BURST_BLUE },
  ],
});
