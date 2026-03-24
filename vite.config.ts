/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";
import { libInjectCss } from "vite-plugin-lib-inject-css";

const dirname =
  typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [libInjectCss(), react()],
  build: {
    outDir: "dist",
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      // React must not be bundled — consumers provide it via peerDependencies.
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: (chunkInfo) => {
          // CSS virtual modules get a .js wrapper — skip them, CSS is extracted separately
          if (chunkInfo.name.endsWith(".css")) return "assets/[name].js";
          return "[name].js";
        },
        assetFileNames: "[name][extname]",
      },
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, ".storybook"),
          }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [
              {
                browser: "chromium",
              },
            ],
          },
        },
      },
    ],
  },
});
