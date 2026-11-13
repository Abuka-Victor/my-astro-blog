import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";
import { remarkStripHtmlComments } from "./src/utils/remark-strip-html-comments.mjs";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  base: "/",
  output: "static",
  // GitHub Pages has no server-side redirects, so Astro writes a page
  // at the old URL that redirects instantly (meta refresh + canonical).
  redirects: {
    "/posts/my-first-blog-post": "/posts/",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      filter: page =>
        !page.includes("/thanks") && !page.includes("/my-first-blog-post"),
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkStripHtmlComments,
      remarkToc,
      remarkReadingTime,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
