import { setCompodocJson } from '@storybook/addon-docs/angular';
import { type Preview } from '@storybook/angular';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import 'style-loader!css-loader!./style.css';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const linkDark = document.createElement('link');
linkDark.setAttribute('rel', 'stylesheet');
linkDark.setAttribute('type', 'text/css');
linkDark.setAttribute('href', './bundles/dx.dark.css');

linkDark.disabled = true;

document.head.appendChild(linkDark);

function switchTheme(isDark: boolean) {
  linkDark.disabled = !isDark;
}

const themeWrapper = (Story: () => any) => {
  const isDark = useDarkMode();

  switchTheme(isDark);
  return Story();
};

// const channel = addons.getChannel();
// const channel = addons.getChannel();
// const withThemes = (Story: () => any, context: any) => {
//   console.log(context.globals);
//   return Story();
// };

export const decorators = [themeWrapper];

const preview: Preview = {
  parameters: {
    controls: {
      // disableSave: true,
      // expanded: true,
      // disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: {
        ...themes.dark,
        brandImage: './images/Logo1.png',
      },
      light: { ...themes.normal, brandImage: './images/logoSK.png' },
      darkClass: 'lights-out',
      lightClass: 'lights-on',
      current: 'light',
      stylePreview: true,
      classTarget: 'body',
    },

    backgrounds: {
      disable: true,
    },
  },

  // tags: ['autodocs', 'autodocs'],
};

export default preview;
