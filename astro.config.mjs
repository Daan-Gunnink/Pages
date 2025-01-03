import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
const env = loadEnv("", process.cwd(), "STORYBLOK");


// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    enableFallbackComponent: true,
    customFallbackComponent: "storyblok/FallBackComponent",
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      blogPost: "storyblok/BlogPost",
      blogPostList: "storyblok/BlogPostList",
      config: "storyblok/Config",
      media: "storyblok/Media",
      page: "storyblok/Page",
      pageLink: "storyblok/PageLink",
      pageLinks: "storyblok/PageLinks",
      screenFillingImage: "storyblok/ScreenFillingImage",
      text: "storyblok/Text",
      gallery: "storyblok/Gallery/Gallery"
    }
  }), tailwind(), icon()],
  output: "server",
  adapter: vercel()
});