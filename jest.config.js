// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  modulePaths: ['<rootDir>/src/'],
  collectCoverageFrom: ['src/components/**/*.ts(x)?', '!src/**/stories.tsx'],
  automock: false
}

module.exports = createJestConfig(customJestConfig)
