module.exports = {
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/**/*.style.js',
    '!src/theme/**/*.js',
    '!src/globals/**/*.js',
    '!src/index.js',
    '!src/*/index.js',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 90,
      lines: 90,
    },
  },
  moduleDirectories: ['node_modules'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/_setup/test-bundler.js',
  testRegex: 'tests/.*\\.spec\\.js$',
}
