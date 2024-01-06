import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv("", process.cwd(), 'STORYBLOK');
console.log(env.STORYBLOK_TOKEN)

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
});