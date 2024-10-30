import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { DxRadioGroupModule } from 'devextreme-angular';
import { MeIconComponent, MeRadioGroupDirective } from '../../public-api';

const data = [
  {
    text: 'Красный',
    icon: 'home',
  },
  {
    text: 'Зеленый',
    icon: 'home',
  },
  {
    text: 'Синий',
    icon: 'home',
  },
];

export default {
  title: 'Components/RadioGroup',
  decorators: [
    moduleMetadata({
      declarations: [MeRadioGroupDirective],
      imports: [DxRadioGroupModule, MeIconComponent],
    }),
  ],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Принимает размер радиокнопки.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    dataSource: {
      description: 'Связывает компонент с данными',
    },
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description:
        'Устанавливает горизонтальное или вертикальное положение группы',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'vertical' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает всю группу радиокнопок',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Устанавливает группу радиокнопок в режим только для чтения',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    size: 'medium',
    dataSource: data,
    layout: 'vertical',
    disabled: false,
    readonly: false,
  },
} as Meta<MeRadioGroupDirective>;

type Story = StoryObj<MeRadioGroupDirective>;

export const WithIcons: Story = {
  render: (args) => ({
    props: args,
    template: `
      <dx-radio-group
        meRadioGroup
        [dataSource]="dataSource"
        [layout]="layout"
        [size]="size"
        [disabled]="disabled"
        [readOnly]="readonly"
        itemTemplate="radioTemplate"
      >
        <div *dxTemplate="let item of 'radioTemplate'">
          <div style="display: flex; align-items: center; gap: 4px;">
            <me-icon
              [icon]="item.icon"
              [size]="size"
              [color]="'currentColor'"
            ></me-icon>
            {{ item.text }}
          </div>
        </div>
      </dx-radio-group>
    `,
  }),
};
