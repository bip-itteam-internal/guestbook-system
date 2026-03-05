// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [svelte()],

  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  adapter: vercel(),
});
