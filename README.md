# RedBubble Code Test

## Overview

React, GraphQl, Apollo, Storybook, Snapshot Test, Jest Unit Test (@testing-library/react), advanced Webpack and Babel.

Test Coverage: 94%

## Browser Compatibility

- Target: > 0.25%, not dead
- Tested: Chrome, Safari

## Issues

- Some Component is not 100% covered, because of avoiding duplicated test

## Getting Started

### 1. Prerequisites

- Git
- Node(& npm): any 12.x version starting with 12.14.1 or greater

### 2. Installation

1. `npm i` to install the website's npm dependencies

### 3. Running locally

1. `npm run start:dev` to start the hot-reloading development server
2. open http://localhost:8000 to open the site in your favorite browser

- Tool: Webpack, Webpack Dev Server

### 4. Storybook

1. `npm run storybook` to start the hot-reloading storybook server
2. open https://localhost:6006 to open the storybook in your favorite browser

- Tool: Storybook

## Running tests

1. `npm i` to install the website's npm dependencies
2. `npm run test` to run __Lint__, __Unit Test__, __Snapshot Test__, __E2E Test__.

### 1. Linting

ESLint &n StyleLint, check syntax, find problems, and enforce code style.

### 2. Unit Test

`npm run test:unit` to run unit test (`./src/**/*.test.jsx`)

- Tool: Jest, @testing-library/react

### 3. Snapshot Test

`npm run test:snap` to run snapshot test (`./src/components/**/*.stories.jsx`)

- Tool: Jest, Storybook
- Test Config: `./storyshots/storyshots.test.js`
- Snapshots: `./storyshots/__snapshots__/storybook.test.js.snap`

## Deployment

### 1. Build

`npm run build` to build website artifacts

- Tool: Webpack, Babel
- Artifacts: `./build`
