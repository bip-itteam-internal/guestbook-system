// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['tamu.bharatainternasional.com'],
      hmr: {
        host: 'tamu.bharatainternasional.com',
        protocol: 'wss',
        clientPort: 443,
      },
    },
  },

  integrations: [svelte()],

  adapter: node({
    mode: 'standalone',
  }),
});
