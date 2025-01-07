import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',       // Página principal (botones)
        scroll: 'scroll.html',    // Página secundaria (scroll)
      },
    },
  },
});
