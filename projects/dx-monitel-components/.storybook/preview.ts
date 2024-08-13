import '!style-loader!css-loader!sass-loader!./style.css';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { type Preview } from '@storybook/angular';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';
import docJson from '../documentation.json';

setCompodocJson(docJson);

const linkDark = document.createElement('link');
linkDark.setAttribute('id', 'dark');
linkDark.setAttribute('rel', 'stylesheet');
linkDark.setAttribute('type', 'text/css');
linkDark.setAttribute('href', './bundles/dx.dark.css');

// const channel = addons.getChannel();
// const channel = addons.getChannel();
// const withThemes = (Story: () => any, context: any) => {
//   console.log(context.globals);
//   return Story();
// };

const themeWrapper = (Story: () => any, context: any) => {
  const isDark = useDarkMode();
  // const links = document.getElementsByTagName('link');
  const elementDark = document.getElementById('dark');
  // console.log(elementDark);
  if (isDark && elementDark === null) {
    document.body.appendChild(linkDark);
  } else if (!isDark && elementDark !== null) {
    document.body.removeChild(linkDark);
  }
  return Story();
};

export const decorators = [themeWrapper];

const preview: Preview = {
  parameters: {
    controls: {
      // disableSave: true,
      expanded: true,
      // disableSaveFromUI: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // docs: {
    //   theme: themes.dark,
    // },
    // styledComponentsThemes: {
    //   themes: [,],
    // },
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
      classTarget: 'html',
    },

    backgrounds: {
      disable: true,
    },
  },

  // tags: ['autodocs', 'autodocs'],
};

export default preview;
