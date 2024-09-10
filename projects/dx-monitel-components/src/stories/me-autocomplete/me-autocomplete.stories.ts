import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { DxAutocompleteModule } from 'devextreme-angular';
import {MeAutocompleteDirective} from "../../lib/directives/me-autocomplete/me-autocomplete.directive";


const meta: Meta<MeAutocompleteDirective> = {
  title: 'Components/Autocomplete',
  component: MeAutocompleteDirective,
  decorators: [
    moduleMetadata({
      imports: [DxAutocompleteModule],
      declarations: [MeAutocompleteDirective],
    }),
  ],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    showScrollbar: {
      options: ['always', 'onHover'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<MeAutocompleteDirective>;

export const Default: Story = {
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
        [dataSource]="['Apple', 'Banana', 'Orange']"
      ></dx-autocomplete>
    `,
  }),
};

export const Small: Story = {
  args: {
    size: 'small',
    showScrollbar: 'always',
  },
  render: Default.render,
};

export const Large: Story = {
  args: {
    size: 'large',
    showScrollbar: 'always',
  },
  render: Default.render,
};

export const ScrollOnHover: Story = {
  args: {
    size: 'medium',
    showScrollbar: 'onHover',
  },
  render: Default.render,
};
