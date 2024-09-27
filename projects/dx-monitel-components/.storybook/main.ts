import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    './../../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  staticDirs: ['../../../src/assets'],

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
    // '@storybook/addon-controls',
    '@storybook/addon-mdx-gfm',
    'storybook-dark-mode',
    '@storybook/addon-designs',
  ],

  // managerHead: (head) => `
  //   ${head}
  //   <img src="./icons/favicon.ico"/>
  //   <link rel="shortcut icon" href="./icons/favicon.ico"/>
  // `,
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  // webpackFinal: async (config) => {
  //   // Найдите правило, которое обрабатывает CSS-файлы
  //   const rules = config?.module?.rules || [];

  //   // Добавьте правило для обработки CSS-файлов
  //   rules.push({
  //     test: /\.css$/,
  //     use: ['style-loader', 'css-loader'],
  //   });
  // },

  // docs: {},
};
export default config;
