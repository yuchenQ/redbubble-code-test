/** @format */

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(t|j)sx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$',
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-styled-components'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
