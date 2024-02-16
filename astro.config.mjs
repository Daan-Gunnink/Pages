import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        config: "storyblok/Config",
        blogPost: "storyblok/BlogPost",
        screenFillingImage: "storyblok/ScreenFillingImage",
        text: "storyblok/Text",
        page: "storyblok/Page",
        blogPostList: "storyblok/BlogPostList",
        tiledGallery: "storyblok/TiledGallery",
      },
    }),
    tailwind(),
  ],
  output: "server",
  adapter: vercel(),
});
