import { Meta, StoryObj, argsToTemplate, moduleMetadata } from '@storybook/angular';
import { MeChipComponent } from '../../../../public-api';

export default {
  title: 'Components/Chips/Chip',
  component: MeChipComponent,
  decorators: [
    moduleMetadata({
      imports: [MeChipComponent],
    }),
  ],
  argTypes: {
    label: {
      control: 'text',
      description: 'Текстовое содержимое, отображаемое внутри чипа.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "''" },
      },
    },
    removable: {
      control: 'boolean',
      description: 'Определяет, можно ли удалить чип. При значении `true` отображается иконка удаления.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключает чип, делая его неактивным и недоступным для взаимодействия.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Определяет размер чипа: `small`, `medium` (по умолчанию) или `large`.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"medium"' },
      },
    },
    count: {
      control: 'number',
      description: 'Числовое значение, отображаемое внутри чипа, например, количество элементов.',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: 'null' },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Определяет, находится ли чип в активном (выбранном) состоянии.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    label: 'Chip',
    count: null,
    size: 'medium',
    removable: true,
    disabled: false,
    selected: false,
  },
  render: (args) => ({
    props: args,
    template: `
     <me-chip
        ${argsToTemplate(args)}
      >
    `
  })
} satisfies Meta<MeChipComponent>;

type Story = StoryObj<MeChipComponent>;

export const Default: Story = {
  args: {
    label: 'Default Chip',
  },
};

export const WithCount: Story = {
  args: {
    label: 'Chip with Count',
    count: 5,
  },
};

export const Unremovable: Story = {
  args: {
    label: 'Removable Chip',
    removable: false,
  },
};

export const StateDisabled: Story = {
  args: {
    label: 'Disabled Chip',
    disabled: true,
  },
};

export const StateSelected: Story = {
  args: {
    label: 'Selected Chip',
    selected: true,
  },
};

export const StateDisabledRemovable: Story = {
  args: {
    label: 'Disabled & Removable',
    disabled: true,
    removable: true,
  },
};

export const SizeSmall: Story = {
  args: {
    label: 'Small Chip',
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    label: 'Medium Chip',
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    label: 'Large Chip',
    size: 'large',
  },
};

export const AllVariants: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <me-chip label="Default"></me-chip>
        <me-chip label="Removable" removable="true"></me-chip>
        <me-chip label="Disabled" disabled="true"></me-chip>
        <me-chip label="Selected" selected="true"></me-chip>
        <me-chip label="With Count" [count]="10"></me-chip>
        <me-chip label="Small" size="small"></me-chip>
        <me-chip label="Large" size="large"></me-chip>
        <me-chip label="Disabled & Removable" disabled="true" removable="true"></me-chip>
      </div>
    `,
  }),
};
