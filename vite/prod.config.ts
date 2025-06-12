import { defineConfig } from "vite";

import { default as defaultConfig } from "./default.config";

import type { VITE_EXPORT_PARAMS } from "./types.config";

export default (params: VITE_EXPORT_PARAMS) =>
  defineConfig({
    ...defaultConfig(params),
    base: "/",
    build: {
      target: "es2015",
      sourcemap: false,
      cssCodeSplit: false,
      cssMinify: "lightningcss",
      minify: "terser",
      manifest: false,
      terserOptions: {
        maxWorkers: 2,
        compress: {
          drop_debugger: true,
          drop_console: true,
          passes: 3,
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          chunkFileNames: "js/[hash].js",
          entryFileNames: "js/[hash].js",
          assetFileNames: (opt) => {
            const [[, ext]] = Array.from(
              opt!.name!.matchAll(/.([0-9-a-z]+)$/g),
            );
            return `${ext}/[hash].${ext}`;
          },
        },
      },
    },
  });
