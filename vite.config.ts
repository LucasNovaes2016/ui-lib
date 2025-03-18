import { defineConfig, UserConfig } from 'vite';
import type { InlineConfig } from 'vitest';
import react from '@vitejs/plugin-react';

type ExtendedViteConfig = {
  test: InlineConfig;
} & UserConfig;

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: false,
    setupFiles: './src/test/setup.ts',
  },
} as ExtendedViteConfig);
