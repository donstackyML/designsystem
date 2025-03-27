import { moduleMetadata, type Meta, type StoryObj, argsToTemplate } from '@storybook/angular';
import { DxRadioGroupComponent, DxRadioGroupModule } from 'devextreme-angular';
import { MeIconComponent, MeRadioGroupDirective } from '../../../../public-api';
import { meRadioGroupMockData, meRadioGroupMockDataWithIcons } from './me-radio-group-mock-data';

export default {
  title: 'Components/RadioGroup',
  decorators: [
    moduleMetadata({
      imports: [DxRadioGroupModule, MeIconComponent],
      declarations: [MeRadioGroupDirective],
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
      description: 'Данные для отображения',
      table: {
        type: { summary: 'Array<any>' },
        defaultValue: { summary: '[]' },
      },
    },
    items: {
      description: 'Принимает данные для отображения',
      table: {
        type: { summary: 'Array<any>' },
        defaultValue: { summary: '[]' },
      },
    },
    value: {
      description: 'Значение, которое будет выбрано при инициализации',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
      },
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
        defaultValue: { summary: 'false' },
      },
    },
    readOnly: {
      control: 'boolean',
      description: 'Устанавливает группе радиокнопок в режим только для чтения',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    size: 'medium',
    items: meRadioGroupMockData,
    layout: 'vertical',
    disabled: false,
    readOnly: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-radio-group
        meRadioGroup
        ${argsToTemplate(args)}
      >
      </dx-radio-group>
    `,
  })
} satisfies Meta<DxRadioGroupComponent | MeRadioGroupDirective>;

type Story = StoryObj<DxRadioGroupComponent | MeRadioGroupDirective>;

export const Default: Story = {}

export const SizeSmall: Story = {
  args: {
    size: 'small'
  }
}

export const SizeMedium: Story = {
  args: {
    size: 'medium'
  }
}

export const SizeLarge: Story = {
  args: {
    size: 'large'
  }
}

export const LayoutVertical: Story = {
  args: {
    layout: 'vertical'
  }
}

export const LayoutHorizontal: Story = {
  args: {
    layout: 'horizontal'
  }
}

export const StateReadOnly: Story = {
  args: {
    readOnly: true
  }
}

export const StateDisable: Story = {
  args: {
    disabled: true
  }
}

export const StateReadOnlyAndDisable: Story = {
  args: {
    readOnly: true,
    disabled: true,
  }
}

export const WithInitialValue: Story = {
  args: {
    value: meRadioGroupMockData[0]
  }
}

export const CustomTemplateWithIcons: Story = {
  args: {
    dataSource: meRadioGroupMockDataWithIcons,
  },
  render: (args) => ({
    props: args,
    template: `
      <dx-radio-group
        meRadioGroup
        [dataSource]="dataSource"
        [layout]="layout"
        [size]="size"
        [disabled]="disabled"
        [readOnly]="readOnly"
        itemTemplate="radioTemplate"
      >
        <div *dxTemplate="let item of 'radioTemplate'">
          <div style="display: flex; align-items: end; gap: 4px;">
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
