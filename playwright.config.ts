import 'dotenv/config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/specs',
  use: {
    baseURL: 'http://localhost:3000',
  },
});
