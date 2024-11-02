import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { DxAutocompleteModule } from 'devextreme-angular';
import { MeAutocompleteDirective } from '../../lib/directives/me-autocomplete/me-autocomplete.directive';

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
    minSearchLength: {
      control: { type: 'number', min: 0, max: 10 },
    },
    dataSource: {
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;

type Story = StoryObj<MeAutocompleteDirective>;

export const Default: Story = {
  args: {
    size: 'medium',
    showScrollbar: 'always',
    minSearchLength: 1,
    dataSource: ['Apple', 'Banana', 'Orange', 'Grape', 'Watermelon'],
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-autocomplete
        id="autocomplete-element"
        meAutocomplete
        [size]="size"
				label='label'
				labelMode="outside"
        [showScrollbar]="showScrollbar"
        [dataSource]="dataSource"
        [minSearchLength]="minSearchLength"
        [placeholder]="placeholder"
        [dropDownOptions]="{
          position: {
            of: '#autocomplete-element',
            my: 'top left',
            at: 'bottom left',
            offset: { y: 4 },
            collision: 'fit flip'
          }
        }"
      ></dx-autocomplete>
    `,
  }),
};

export const Small: Story = {
  args: {
    size: 'small',
    showScrollbar: 'always',
    minSearchLength: 1,
    dataSource: ['Apple', 'Banana', 'Orange', 'Grape', 'Watermelon'],
  },
  render: Default.render,
};

export const Large: Story = {
  args: {
    size: 'large',
    showScrollbar: 'always',
    minSearchLength: 1,
    dataSource: ['Apple', 'Banana', 'Orange', 'Grape', 'Watermelon'],
  },
  render: Default.render,
};

export const ScrollOnHover: Story = {
  args: {
    size: 'medium',
    showScrollbar: 'onHover',
    minSearchLength: 1,
    dataSource: ['Apple', 'Banana', 'Orange', 'Grape', 'Watermelon'],
  },
  render: Default.render,
};
