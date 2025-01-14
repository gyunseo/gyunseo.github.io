import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import {
  updateImageLinkNode,
  updateLinkNode,
} from "./src/utils/updateMarkdownASTNodeURLValue";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
// https://astro.build/config
export default defineConfig({
  site: "https://gyunseo.xyz", // replace this with your deployed domain
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkToc,
      // to support a math syntax in markdown
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],

      // update Markdown ImageLink Node URL Value,
      updateImageLinkNode,
      // convert Markdown Link Node URL Value,
      updateLinkNode,
    ],
    // to render math in HTML with KaTex
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  experimental: {
    contentLayer: true,
  },
});
