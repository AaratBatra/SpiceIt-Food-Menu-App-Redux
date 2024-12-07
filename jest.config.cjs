module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1', // Adjust alias to point to the src directory
    },
  };
  