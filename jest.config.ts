import nextJest from 'next/jest'
import type { Config } from '@jest/types'

export const customJestConfig: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
}

export const createJestConfig = nextJest({
  dir: './',
})

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  return {
    ...nextJestConfig,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/src/__mocks__/svgMock.ts',
      ...nextJestConfig.moduleNameMapper,
    },
  }
}

module.exports = jestConfig
