import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": false
      }
    },
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  framework: {
    "name": "@storybook/react-webpack5",
    "options": {}
  },
  webpackFinal: (config) => {
    config.resolve.modules = [...(config.resolve.modules || []), "./src"]
    config.module.rules = [...(config.module.rules || []), {
      test: /\.svg$/i,
      type: "javascript/auto",
      use: [{ loader: "@svgr/webpack", options: { icon: true } }, "url-loader"]
    }];
    return config;
  }
};
export default config;