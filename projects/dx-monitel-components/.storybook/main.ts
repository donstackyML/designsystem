import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './../../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  staticDirs: ['../assets'],
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

  //   <img src="./icons/favicon.ico"/>
  //   <link rel="shortcut icon" href="./icons/favicon.ico"/>
  // `,
};
export default config;
