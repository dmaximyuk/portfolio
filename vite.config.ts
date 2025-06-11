import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  const isProd = command === "build";

  if (isProd) {
    // eslint-disable-next-line no-undef
    return require("./vite/prod.config").default({ mode });
  }

  // eslint-disable-next-line no-undef
  return require("./vite/dev.config").default({ mode });
});
