import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent } from 'devextreme-angular';
import { MeButtonDirective } from '../../public-api';

export default {
  title: 'Components/Button',
  // tags: ['autodocs'],
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
    // isSelected: {
    //   control: 'boolean',
    //   table: {
    //     defaultValue: { summary: false },
    //   },
    // },
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
    leftIcon: {
      control: 'select',
      options: ['', 'add', 'arrowback', 'arrowforward'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    rightIcon: {
      control: 'select',
      options: ['', 'add', 'arrowback', 'arrowforward'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<dx-button meButton ${argsToTemplate(args)}></dx-button>`,
  }),
} as Meta<MeButtonDirective | DxButtonComponent>;

type Story = StoryObj<MeButtonDirective | DxButtonComponent>;

export const Default: Story = {
  args: {
    type: 'default',
    text: 'Button',
    size: 'medium',
    stylingMode: 'contained',
    // isSelected: false,
  },
};

export const LeftIcon: Story = {
  args: {
    text: 'Button',
    size: 'medium',
    stylingMode: 'contained',
    leftIcon: 'arrowback',
    iconColor: 'black',
  },
};

export const LeftRightIcon: Story = {
  args: {
    type: 'normal',
    text: 'Button',
    size: 'medium',
    stylingMode: 'contained',
    leftIcon: 'arrowback',
    rightIcon: 'arrowforward',
    iconColor: 'black',
  },
};
