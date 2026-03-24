import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
  ],
  framework: "@storybook/react-vite",
  viteFinal: (config) => {
    config.build ??= {};
    config.build.rolldownOptions ??= {};
    config.build.rolldownOptions.output ??= {};
    // Vite 8 uses Rolldown which doesn't guarantee module execution order in
    // production builds, causing `PH[e] is not a function` in static deploys.
    (config.build.rolldownOptions.output as Record<string, unknown>).strictExecutionOrder = true;
    return config;
  },
};
export default config;
