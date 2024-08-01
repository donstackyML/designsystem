import { setCompodocJson } from '@storybook/addon-docs/angular';
import type { Preview } from '@storybook/angular';
import docJson from '../documentation.json';
// import DocumentationTemplate from './DocumentationTemplate.mdx';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // docs:{
    //   page: DocumentationTemplate
    // }
  },
};

export default preview;
