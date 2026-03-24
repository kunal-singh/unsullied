// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import config from "@kunal-singh/eslint-config/react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "dist",
      "storybook-static",
      ".storybook",
      "*.config.js",
      ".lintstagedrc.js",
      "*.shims.d.ts",
    ],
  },
  ...config,
  ...storybook.configs["flat/recommended"],
]);
