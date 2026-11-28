import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      // Usamos import.meta.dirname en lugar de __dirname
      entry: resolve(import.meta.dirname, 'src/index.js'),
      name: 'CodeBricks',
      fileName: (format) => {
        if (format === 'es') return 'codebricks.js';
        if (format === 'umd') return 'codebricks.umd.js';
        return `codebricks.${format}.js`;
      },
      formats: ['es', 'umd'],
    },
    rollupOptions: {},
    cssCodeSplit: false,
  },
});