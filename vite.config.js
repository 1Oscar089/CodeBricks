import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'CodeBricks', // ← nombre global en el navegador: window.CodeBricks
      fileName: (format) => {
        if (format === 'es') return 'codebricks.js';
        if (format === 'umd') return 'codebricks.umd.cjs';
        return `codebricks.${format}.js`;
      },
      formats: ['es', 'umd'], // ES para npm, UMD para script/CDN
    },
    rollupOptions: {},
    cssCodeSplit: false, // extrae todo el CSS en un solo archivo: style.css
  },
});