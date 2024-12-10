import { argsToTemplate, Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { DxAutocompleteModule, DxValidatorModule } from 'devextreme-angular';
import { MeAutocompleteDirective, MeLabelDirective } from '../../public-api';

export default {
  title: 'Components/Autocomplete(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeAutocompleteDirective, MeLabelDirective],
      imports: [DxAutocompleteModule, DxValidatorModule],
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
      options: ['floating', 'outside', 'hidden', 'inside'],
      description: 'Режим отображения label',
    },
    description: {
      control: 'text',
      description: 'Описание для компонента',
		},
		showClearButton: {
			control: 'boolean',
			description: 'Показывать кнопку очистки.',
		},
		isValid: {
			control: 'boolean',
			description: 'Определяет состояние валидности.',
		},
		disabled: {
			control: 'boolean',
		}
	},
  args: {
		size: 'medium',
		label: 'Label*',
		labelMode: 'outside',
		showClearButton: true,
		isValid: true,
		disabled: false,
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
    description: 'description',
  },
	render: (args) => ({
	props: args,
	template: `
		<dx-autocomplete
			id="autocomplete-element"
			meAutocomplete
			${argsToTemplate(args)}
			[dropDownOptions]="{
				position: {
					of: '#autocomplete-element',
					my: 'top left',
					at: 'bottom left',
					offset: { y: 4 },
					collision: 'fit flip'
				}
			}"
		>
					<dx-validator>
        <dxi-validation-rule
            type="required"
            message="Required"
        >
        </dxi-validation-rule>
    </dx-validator>
			</dx-autocomplete>
		<p class='autocomplete-box-desc' *ngIf="description">{{ description }}</p>
	`,
  }),
} as Meta;

export const Default: StoryObj = {};

export const WithLabelRow: StoryObj = {
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
