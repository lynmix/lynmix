import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    passWithNoTests: true,
    threads: true,
    maxThreads: 2,
    minThreads: 1,
    coverage: {
      reporter: ['text', 'clover', 'json'],
    },
  },
});
