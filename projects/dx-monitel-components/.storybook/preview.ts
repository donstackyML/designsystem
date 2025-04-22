import { setCompodocJson } from '@storybook/addon-docs/angular';
import {
  moduleMetadata,
  type Preview,
  type Decorator,
} from '@storybook/angular';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

import ruMessages from 'devextreme/localization/messages/ru.json';
import { locale, loadMessages } from 'devextreme/localization';

import 'style-loader!css-loader!./style.css';

import { MeIconsRegistry } from '@monitel/me-icons-registry';
import { meIconSet } from '@monitel/me-icons';

import docJson from '../documentation.json';

setCompodocJson(docJson);

loadMessages(ruMessages);
locale(navigator.language);

const linkDark = document.createElement('link');
linkDark.setAttribute('rel', 'stylesheet');
linkDark.setAttribute('type', 'text/css');
linkDark.setAttribute('href', './assets/dx.dark.css');

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

export const registry = new MeIconsRegistry();

export const decorators: Decorator[] = [
  themeWrapper,
  moduleMetadata({
    providers: [
      {
        provide: MeIconsRegistry,
        useFactory: () => {
          registry.registerIcons(meIconSet);
          return registry;
        },
      },
    ],
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: {
        ...themes.dark,
        brandImage: './assets/images/Logo1.png',
      },
      light: { ...themes.normal, brandImage: './assets/images/logoSK.png' },
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
};

export default preview;
