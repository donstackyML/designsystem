import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent } from 'devextreme-angular';
import { MeButtonDirective } from '../../public-api';
// import { MeButtonComponent } from './me-button.component';

export default {
  title: 'Components/meButton',
  // component: MeButtonComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [MeButtonDirective, DxButtonComponent],
    }),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'normal', 'success', 'warning', 'danger'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
    isSelected: {
      control: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
    },
    text: {
      control: 'text',
      table: {
        defaultValue: { summary: '' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    stylingMode: {
      control: 'select',
      options: ['outlined', 'contained', 'text'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contained' },
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<dx-button meButton ${argsToTemplate(args)}></dx-button>`,
  }),
} as Meta<MeButtonDirective | DxButtonComponent>;

type Story = StoryObj<MeButtonDirective | DxButtonComponent>;

/**Дефолтная кнопка
 *
 * Description, можно описывать story прямиком из stories
 */
export const Default: Story = {
  args: {
    type: 'default',
    text: 'Button',
    size: 'medium',
    stylingMode: 'outlined',
    isSelected: false,
  },
};

/**Кнопка success Description*/
export const Success: Story = {
  args: {
    type: 'success',
    text: 'Button Success',
    size: 'medium',
  },
};
