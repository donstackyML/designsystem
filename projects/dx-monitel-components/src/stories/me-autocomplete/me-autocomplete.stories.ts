import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxAutocompleteModule } from 'devextreme-angular';
import { MeAutocompleteDirective } from '../../lib/directives/me-autocomplete/me-autocomplete.directive';
import { MeLabelDirective } from '../../public-api';

const meta: Meta<MeAutocompleteDirective> = {
  title: 'Components/Autocomplete',
  component: MeAutocompleteDirective,
  decorators: [
    moduleMetadata({
      imports: [DxAutocompleteModule],
      declarations: [MeAutocompleteDirective, MeLabelDirective],
      schemas: [NO_ERRORS_SCHEMA],
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
    label: {
      control: 'text',
      description: 'Текст label',
    },
    labelMode: {
      control: 'select',
      options: ['floating', 'outside'],
      description: 'Режим отображения label',
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
    dataSource: [
      'Apple',
      'Banana',
      'Orange',
      'Grape',
      'Watermelon',
      'Ananas',
      'Arbuz',
      'Cat',
      'Dog',
      'Abc',
      'Cba',
      'Bca',
    ],
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-autocomplete
        id="autocomplete-element"
        meAutocomplete
        [size]="size"
        [showScrollbar]="showScrollbar"
        [dataSource]="dataSource"
        [minSearchLength]="minSearchLength"
        [placeholder]="placeholder"
        [(label)]="label"
			  [(labelMode)]="labelMode"
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

export const WithLabelRow: Story = {
  args: {
    size: 'medium',
    showScrollbar: 'always',
    minSearchLength: 1,
    dataSource: [
      'Apple',
      'Banana',
      'Orange',
      'Grape',
      'Watermelon',
      'Ananas',
      'Arbuz',
      'Cat',
      'Dog',
      'Abc',
      'Cba',
      'Bca',
    ],
  },
  render: (args) => ({
    props: args,
    template: `
    <label meLabel
		labelDirection="row"
		[size]="size" 
		min-width="100%">
    Label*
      <dx-autocomplete
        id="autocomplete-element"
        meAutocomplete
        [size]="size"
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
      </label>
    `,
  }),
};

export const Small: Story = {
  args: {
    size: 'small',
    showScrollbar: 'always',
    minSearchLength: 1,
    dataSource: ['Apple', 'Banana', 'Orange', 'Grape', 'Watermelon'],
    label: 'Label*',
    labelMode: 'outside',
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
