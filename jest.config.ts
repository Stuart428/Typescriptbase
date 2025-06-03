

import { Config } from 'jest';
import { createDefaultPreset } from 'ts-jest';

export default async (): Promise<Config> => {
  const tsJestPreset = await createDefaultPreset();

  return {
    testEnvironment: 'node',
    transform: {
      ...tsJestPreset.transform,
    },
    testPathIgnorePatterns: ['/dist/'],
  };
};
