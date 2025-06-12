import type { InlineConfig } from "vite";

import { fileURLToPath } from "node:url";

import core from "vite-plugin-solid";
import tsPaths from "vite-tsconfig-paths";
import { analyzer } from "vite-bundle-analyzer";

import type { VITE_EXPORT_PARAMS } from "./types.config";

export default (params: VITE_EXPORT_PARAMS): InlineConfig => ({
  appType: "spa",
  publicDir: "public",
  plugins: [tsPaths(), core(), params?.mode === "analyse" && analyzer()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("../src", import.meta.url)),
    },
  },
});
