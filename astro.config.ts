import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://moisessegura.github.io',
  base: 'portfolio-moises',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: 'Moises Segura Rojas',
      openGraph: {
        home: {
          title: 'moises portfolio',
          description: 'simple portfolio using astro'
        },
        blog: {
          title: 'Blog',
          description: 'astro blog'
        },
        projects: {
          title: 'Projects'
        }
      },
    
    })
  ],
  adapter: node({
    mode: 'standalone'
  })
});