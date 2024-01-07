import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

import vercel from '@astrojs/vercel/serverless';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        blogPost: 'storyblok/BlogPost',
        page: 'storyblok/Page',
        blogPostList: 'storyblok/BlogPostList'
      },
    })
  ],
  output: 'server',
  adapter: vercel(),
});