/** @format */

import React from 'react';
import '../../styles/index.css';
import { Page } from '../Page/Page';

export function App() {
  return (
    <Page>
      <p data-testid="hello-world">Hello World!</p>
    </Page>
  );
}
