import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxAutocompleteModule } from 'devextreme-angular';
import { MeAutocompleteDirective } from '../../public-api';

export default {
  title: 'Components/MeAutocomplete',
  decorators: [
    moduleMetadata({
      declarations: [MeAutocompleteDirective],
      imports: [DxAutocompleteModule],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    showScrollbar: {
      control: 'select',
      options: ['always', 'onHover', 'never'],
    },
  },
  args: {
    size: 'medium',
    showScrollbar: 'always',
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-autocomplete
        meAutocomplete
        [size]="size"
        [showScrollbar]="showScrollbar"
        [dataSource]="dataSource"
        [placeholder]="'Select an option'"
      ></dx-autocomplete>
    `,
  }),
} as Meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    dataSource: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const ScrollOnHover: Story = {
  args: {
    ...Default.args,
    showScrollbar: 'onHover',
  },
};

export const ScrollNever: Story = {
  args: {
    ...Default.args,
    showScrollbar: 'never',
  },
};
