/** @format */

import React from 'react';
import styled from 'styled-components';
import './styles/index.css';

const Header = styled.h1`
  color: red;
`;

export default function App() {
  return <Header data-testid="hello-world">Hello World!</Header>;
}
