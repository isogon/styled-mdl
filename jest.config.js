module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.spec.js',
    '!src/**/*.style.js',
    '!src/theme/**/*.js',
    '!src/globals/**/*.js',
    '!src/index.js',
    '!src/*/index.js',
  ],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules', 'demo', 'src'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/internals/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/image.js',
    'material-components': '<rootDir>/src',
  },
  setupTestFrameworkScriptFile: '<rootDir>/internals/testing/test-bundler.js',
  testRegex: 'tests/.*\\.spec\\.js$',
};
