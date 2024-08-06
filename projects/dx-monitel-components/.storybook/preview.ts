// import '!style-loader!css-loader!sass-loader!../../../src/assets/bundles/dx.dark.css';
// import '!style-loader!css-loader!sass-loader!../../../src/assets/bundles/dx.light.css';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const themes = {
  light: 'dx.light',
  dark: 'dx.dark',
};

// const withThemes = (Story, context) => {
//   const theme = context.globals.theme || 'light';
//   document.body.classList.remove(...Object.values(themes));
//   document.body.classList.add(themes[theme]);
//   return Story();
// };

// export const globalTypes = {
//   theme: {
//     name: 'Theme',
//     description: 'Global theme for components',
//     defaultValue: 'light',
//     toolbar: {
//       icon: 'circlehollow',
//       items: [
//         { value: 'light', title: 'Light' },
//         { value: 'dark', title: 'Dark' },
//       ],
//     },
//   },
// };

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    styledComponentsThemes: {
      themes: [,],
    },
  },
};

export default preview;
