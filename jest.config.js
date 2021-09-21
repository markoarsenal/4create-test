const { defaults } = require('jest-config');

module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|svg)$':
      '<rootDir>/__mocks__/file-mock.js',
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/style-mock.js',
  },
  moduleDirectories: ['node_modules', '<rootDir>/node_modules', '.'],
  collectCoverageFrom: [
    '(pages|components)/**/*.{ts,tsx}',
    '!components/**/*.({d,types}.ts|story.tsx)',
    '!pages/_(app|document).tsx',
    '!tests',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
  transform: {
    '\\.[jt]sx?$': ['babel-jest', { configFile: './mocks/.babel-jestrc' }],
  },
  globals: {
    ...defaults.globals,
    crypto: require('crypto'),
  },
};
