import {
  Meta,
  StoryObj,
  moduleMetadata,
} from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {
  DxTextBoxModule,
  DxNumberBoxModule,
  DxDateBoxModule,
  DxButtonModule,
} from 'devextreme-angular';
import { InputFieldsComponent } from './input-fields.component';

const meta: Meta<InputFieldsComponent> = {
  title: 'Components/InputFields',
  component: InputFieldsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        DxTextBoxModule,
        DxNumberBoxModule,
        DxDateBoxModule,
        DxButtonModule,
        InputFieldsComponent
      ],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер компонентов ввода',
    },
    stylingMode: {
      control: 'select',
      options: ['outlined', 'underlined', 'filled'],
      description: 'Определяет стиль отображения полей ввода',
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает поля ввода',
    },
    readOnly: {
      control: 'boolean',
      description: 'Устанавливает режим только для чтения',
    },
    onPasswordVisibilityChange: { action: 'passwordVisibilityChanged' },
    onCurrencyChange: { action: 'currencyChanged' },
    onValueChange: { action: 'valueChanged' },
  },
  args: {
    size: 'medium',
    stylingMode: 'outlined',
    disabled: false,
    readOnly: false,
    initialValue: '',
    currencyValue: 14500.55,
    dateValue: new Date(),
    onPasswordVisibilityChange: action('passwordVisibilityChanged'),
    onCurrencyChange: action('currencyChanged'),
    onValueChange: action('valueChanged'),
  },
};

export default meta;
type Story = StoryObj<InputFieldsComponent>;

export const Default: Story = {};

export const FilledStyle: Story = {
  args: {
    stylingMode: 'filled',
    size: 'medium',
  },
};

export const WithInitialValues: Story = {
  args: {
    initialValue: 'Initial password',
    currencyValue: 25000.75,
    dateValue: new Date(2024, 0, 1),
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
};
