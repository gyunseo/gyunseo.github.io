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
// https://astro.build/config
export default defineConfig({
  site: "https://gyunseo.xyz", // replace this with your deployed dom:wain
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
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
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
