/** @format */

module.exports = {
  verbose: true,
  roots: ['<rootDir>/src'],
  transform: {
    '\\.(t|j)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(t|j)sx?$',
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'jest-styled-components'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
