import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './../../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  staticDirs: [{ from: '../../../src/assets/bundles', to: '/assets' }],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds',
    '@storybook/manager-api',
    '@storybook/theming',
    '@storybook/addon-themes',
    '@storybook/addon-mdx-gfm',
    'storybook-dark-mode',
    '@storybook/addon-designs',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
};
export default config;
