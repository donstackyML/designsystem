import { action } from '@storybook/addon-actions';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeChipComponent, MeChipsComponent } from '../../../../public-api';

export default {
  title: 'Components/Chips/Chips',
  component: MeChipsComponent,
  decorators: [
    moduleMetadata({
      imports: [MeChipsComponent, MeChipComponent],
    }),
  ],
  argTypes: {
    chips: {
      control: 'object',
      description: 'Массив объектов чипов, которые будут отображаться в компоненте.',
      table: {
        type: { summary: 'MeChip[]' },
        defaultValue: { summary: '[]' },
      },
    },
    multiSelect: {
      control: 'boolean',
      description: 'Определяет, можно ли выбрать несколько чипов одновременно.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    chipsChange: {
      action: 'chipsChange',
      description: 'Событие, вызываемое при изменении списка чипов (например, удалении).',
      table: {
        type: { summary: 'EventEmitter<MeChip[]>' },
      },
    },
    selectionChange: {
      action: 'selectionChange',
      description: 'Событие, вызываемое при изменении выбранных чипов.',
      table: {
        type: { summary: 'EventEmitter<MeChip[]>' },
      },
    },
  },
  args: {
    chips: [
      { label: 'Схемы', size: 'medium', selected: false },
      { label: 'Наборы', size: 'medium', selected: false },
      { label: 'Прибор', size: 'medium', selected: false },
    ],
    multiSelect: false,
  },
  render: (args) => ({
    props: {
      ...args,
      onChipsChange: (e: any) => {
        console.log('Chips changed:', e);
        action('chipsChange')(e);
      },
      onSelectionChange: (e: any) => {
        console.log('Selection changed:', e);
        action('selectionChange')(e);
      },
    },
    template: `
    <me-chips
      [chips]="chips"
      [multiSelect]="multiSelect"
      (chipsChange)="onChipsChange($event)"
      (selectionChange)="onSelectionChange($event)"
    >
    </me-chips>`,
  })
} satisfies Meta<MeChipsComponent>;

type Story = StoryObj<MeChipsComponent>;

export const Default: Story = {};

export const MultiSelect: Story = {
  args: {
    multiSelect: true,
  },
};

export const SingleChip: Story = {
  args: {
    chips: [
      { label: 'Одиночный чип', size: 'medium', count: 1 }
    ]
  },
};

export const UnremovableChips: Story = {
  args: {
    chips: [
      { label: 'Первая', size: 'medium', removable: false, selected: false },
      { label: 'Вторая', size: 'medium', removable: false, selected: false },
      { label: 'Третья', size: 'medium', removable: false, selected: false },
    ],
  },
};

export const Preselected: Story = {
  args: {
    chips: [
      { label: 'Схемы', size: 'medium', count: 1, selected: true },
      { label: 'Наборы', size: 'medium', count: 1, selected: false },
      { label: 'Прибор', size: 'medium', count: 2, selected: true },
    ],
  },
};

export const LongNames: Story = {
  args: {
    chips: [
      { label: 'Очень длинное название чипа, которое не помещается', size: 'medium', selected: false },
      { label: 'Еще одно длинное название, превышающее обычную длину', size: 'medium', selected: false },
      { label: 'Короткое', size: 'medium', selected: false },
      { label: 'Чрезвычайно длинное название чипа, которое точно выходит за пределы контейнера', size: 'medium', selected: false },
    ],
  },
};

export const StateVariants: Story = {
  args: {
    chips: [
      { label: 'Обычный', size: 'medium', selected: false },
      { label: 'Выбранный', size: 'medium', selected: true },
      { label: 'Отключенный', size: 'medium', selected: false, disabled: true },
      { label: 'Удаляемый', size: 'medium', removable: true },
    ],
    multiSelect: true,
  },
};

export const SizesVariants: Story = {
  args: {
    chips: [
      { label: 'Small Chip', size: 'small', count: 1, selected: false },
      { label: 'Medium Chip', size: 'medium', count: 2, selected: false },
      { label: 'Large Chip', size: 'large', count: 3, selected: false },
    ]
  }
};
