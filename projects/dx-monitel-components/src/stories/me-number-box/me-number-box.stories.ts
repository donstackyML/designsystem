import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxNumberBoxModule, DxValidatorModule } from 'devextreme-angular';
import { MeLabelDirective, MeNumberBoxDirective } from '../../public-api';

export default {
  title: 'Components/NumberBox(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeNumberBoxDirective, MeLabelDirective],
      imports: [DxNumberBoxModule, DxValidatorModule],
    }),
  ],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    format: {
      control: 'text',
      description:
        'Формат отображения числа. Пример: `#`, `#,##0.00`, `#,##0%`, `#0.## kg`, `($ #,##0.##)`.',
    },
    height: {
      control: 'text',
    },
    label: {
      control: 'text',
      description: 'Текст label',
    },
    labelMode: {
      control: 'select',
      options: ['static', 'floating', 'hidden', 'outside'],
      description: 'Режим отображения label',
    },
    max: {
      control: 'number',
      description: 'Максимальное значение',
    },
    min: {
      control: 'number',
      description: 'Минимальное значение',
    },
    placeholder: {
      control: 'text',
    },
    readOnly: {
      control: 'boolean',
    },
    showClearButton: {
      control: 'boolean',
    },
    showSpinButtons: {
      control: 'boolean',
      description: 'Показывать кнопки управления значениями.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер компонента',
    },
    validationMessageMode: {
      control: 'select',
      options: ['auto', 'always'],
      description:
        'Режим отображения сообщения об ошибке. В рамках дизайн системы добывлены позиции: `text`, `icon`.',
    },
    validationMessagePosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description:
        'Режим отображения сообщения об ошибке. В рамках дизайн системы добывлены позиции: `top`, `bottom`, `left`, `right`.',
    },
    width: {
      control: 'text',
    },
    currency: {
      control: 'select',
      options: ['$', '₽', '€'],
      description: 'Валюта',
    },
  },
  args: {
    size: 'small',
    label: 'Label',
    labelMode: 'static',
    disabled: false,
    readOnly: false,
    showClearButton: true,
    showSpinButtons: true,
    placeholder: 'Placeholder',
    format: '#,##0.00',
    max: 100,
    min: 0,
    validationMessageMode: 'auto',
    validationMessagePosition: 'bottom',
    value: null,
    height: null,
    width: null,
    currency: '$'
  },
  render: (args) => ({
    props: { ...args },
    template: `
		<dx-number-box
			meNumberBox
			${argsToTemplate(args)}
    >
		<dx-validator>
        <dxi-validation-rule
            type="required"
            message="Required"
        >
        </dxi-validation-rule>
    </dx-validator>
		</dx-number-box>
		`,
  }),
} as Meta;

export const Default: StoryObj = {};

export const WithLabelRow: StoryObj = {
  args: {
    ...Default.args,
  },
  render: (args) => ({
    props: args,
    template: `
		<label meLabel
		labelDirection="row"
		[size]="size"
		width="250px">
		Label*
			<dx-number-box
			meNumberBox
			${argsToTemplate(args)}
				></dx-number-box>
		</label>
		`,
  }),
};

export const WithDiscription: StoryObj = {
  args: {
    ...Default.args,
    size: 'medium',
  },
  render: (args) => ({
    props: args,
    template: `
			<dx-number-box
			meNumberBox
			${argsToTemplate(args)}
				></dx-number-box>
				<div class="me-text-body2">Description</div>
		`,
    styles: [
      'label { justify-content: flex-start; }',
      'span { font-size: 14px; line-height: 20px; }',
      '.me-text-body2 { height: 20px; margin-top: 4px; color: #808084 }',
    ],
  }),
};
