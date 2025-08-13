import { defineConfig } from 'vite';
import { extensions, classicEmberSupport, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  server: {
    proxy: {
      '/v1': { // Key: Path to be proxied (e.g., requests to /api/users)
        target: 'http://localhost:8200', // Target: URL of your backend server
        changeOrigin: true, // Recommended for virtual hosted sites
        secure: false, // Set to true for HTTPS targets, false for HTTP
      },
    },
  },
  plugins: [
    classicEmberSupport(),
    ember(),
    // extra plugins here
    babel({
      babelHelpers: 'runtime',
      extensions,
    }),
  ],
});
