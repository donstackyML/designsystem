import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxTagBoxModule, DxValidatorModule } from 'devextreme-angular';
import { MeLabelDirective, MeTagBoxDirective } from '../../public-api';

export default {
  title: 'Components/TagBox(RC)',
  decorators: [
    moduleMetadata({
      declarations: [MeTagBoxDirective, MeLabelDirective],
      imports: [DxTagBoxModule, DxValidatorModule],
    }),
  ],
  argTypes: {
    items: {
      control: 'text',
      description: 'Массив данных для отображения',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер компонента',
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
    activeStateEnabled: {
      control: 'boolean',
      defaultValue: true,
      description: 'Определяет состояние при нажатии на компонент',
    },
    pickerType: {
      control: 'select',
      options: ['calendar', 'list', 'native', 'rollers'],
      description: 'Тип пикера для выбора значений',
      defaultValue: 'list',
    },
    applyValueMode: {
      control: 'select',
      options: ['instantly', 'useButtons'],
      description:
        'Режим применения данных. `instantly` - Применяет значения, когда они выбраны. `useButtons` - Применяет значения, когда пользователь нажимает кнопку "ОК".',
    },
    fieldTemplate: {
      control: 'text',
      description: 'Шаблон для отображения.',
    },
    disabled: {
      control: 'boolean',
    },
    hoverStateEnabled: {
      control: 'boolean',
    },
    focusStateEnabled: {
      control: 'boolean',
    },
    isValid: {
      control: 'boolean',
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
    grouped: {
      control: 'boolean',
      description: 'Указывает, следует ли группировать элементы данных',
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    hideSelectedItems: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    readOnly: {
      control: 'boolean',
    },
    searchEnabled: {
      control: 'boolean',
    },
    showClearButton: {
      control: 'boolean',
    },
    showSelectionControls: {
      control: 'boolean',
    },
  },
  args: {
    items: ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'],
    size: 'small',
    width: '400px',
    height: '',
    label: 'Label*',
    labelMode: 'outside',
    applyValueMode: 'instantly',
    grouped: false,
    searchEnabled: true,
    placeholder: 'Выберите...',
    pickerType: 'list',
    showClearButton: false,
    showSelectionControls: false,
    hideSelectedItems: false,
    activeStateEnabled: true,
    hoverStateEnabled: true,
    focusStateEnabled: true,
    disabled: false,
    isValid: true,
    validationMessageMode: 'auto',
    validationMessagePosition: 'top',
    readOnly: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
		<dx-tag-box
			meTagBox
			[items]="items"
			[(size)]="size"
			[(label)]="label"
			[(labelMode)]="labelMode"
			[(activeStateEnabled)]="activeStateEnabled"
			[(applyValueMode)]="applyValueMode"
			[(fieldTemplate)]="fieldTemplate"
			[(disabled)]="disabled"
			[(hoverStateEnabled)]="hoverStateEnabled"
			[(focusStateEnabled)]="focusStateEnabled"
			[(isValid)]="isValid"
			[validationMessageMode]="validationMessageMode"
			[validationMessagePosition]="validationMessagePosition"
			[(grouped)]="grouped"
			[(height)]="height"
			[(width)]="width"
			[(hideSelectedItems)]="hideSelectedItems"
			[(placeholder)]="placeholder"
			[(readOnly)]="readOnly"
			[(searchEnabled)]="searchEnabled"
			[(showClearButton)]="showClearButton"
			[(showSelectionControls)]="showSelectionControls"
    >
		<dx-validator>
        <dxi-validation-rule
            type="required"
            message="Required"
        >
        </dxi-validation-rule>
    </dx-validator>
		</dx-tag-box>
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
			<dx-tag-box
			meTagBox
			[items]="items"
			[(height)]="height"
			[(width)]="width"
			[(size)]="size"
			[(placeholder)]="placeholder"
			[(activeStateEnabled)]="activeStateEnabled"
			[(hoverStateEnabled)]="hoverStateEnabled"
			[(focusStateEnabled)]="focusStateEnabled"
			[(applyValueMode)]="applyValueMode"
			[(disabled)]="disabled"
			[(readOnly)]="readOnly"
			[(grouped)]="grouped"
			[(hideSelectedItems)]="hideSelectedItems"
			[(searchEnabled)]="searchEnabled"
			[(showClearButton)]="showClearButton"
			[(showSelectionControls)]="showSelectionControls"
				></dx-tag-box>
		</label>
		`,
  }),
};
