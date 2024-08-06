import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './../../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds',
    '@storybook/manager-api',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  // managerHead: (head) => `
  //   ${head}

  //   <link rel="shortcut icon" href="https://www.google.com/favicon.ico"/>
  // `,
};
export default config;
