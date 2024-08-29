import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MeChipComponent } from "../../public-api";
import { MeChipsContainerComponent } from "../../public-api";

// Метаинформация для компонента MeChipsContainerComponent
const chipsContainerMeta: Meta<MeChipsContainerComponent> = {
  title: 'Components/MeChipsContainer',
  component: MeChipsContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [MeChipsContainerComponent, MeChipComponent],
    }),
  ],
  argTypes: {
    chips: {
      control: 'object',
      description: 'Массив объектов для отображения в виде чипов. Каждый объект содержит label, size, count, и опции для удаления и активности.',
    },
    chipsChange: { action: 'chipsChange' },
  },
  args: {
    chips: [
      { label: 'Схемы', size: 'medium', count: 1 },
      { label: 'Наборы', size: 'medium', count: 1 },
      { label: 'Прибор', size: 'medium', count: 2 },
    ],
  },
};

export default chipsContainerMeta;

type ChipsContainerStory = StoryObj<MeChipsContainerComponent>;

const ChipsContainerTemplate: ChipsContainerStory = {
  render: (args) => ({
    props: {
      ...args,
      onChipsChange: (e: any) => {
        console.log('Chips changed:', e);
        action('chipsChange')(e);
      },
    },
    template: `
      <me-chips-container
        [chips]="chips"
        (chipsChange)="onChipsChange($event)"
      ></me-chips-container>
    `,
  }),
};

export const Default: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {},
};

export const SingleChip: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Одиночный чип', size: 'medium', count: 1 }
    ],
  },
};

export const DisabledChips: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Отключенный чип', size: 'medium', count: 1, removable: false, disabled: true },
      { label: 'Еще один отключенный чип', size: 'large', count: 2, removable: false, disabled: true }
    ],
  },
};

export const ChipsWithoutRemoval: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Чип без удаления', size: 'small', count: 1, removable: false },
      { label: 'Еще один чип без удаления', size: 'large', count: 2, removable: false }
    ],
  },
};

export const ManyChips: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Чип 1', size: 'medium', count: 1 },
      { label: 'Чип 2', size: 'medium', count: 2 },
      { label: 'Чип 3', size: 'medium', count: 3 },
      { label: 'Чип 4', size: 'medium', count: 4 },
      { label: 'Чип 5', size: 'medium', count: 5 },
      { label: 'Чип 6', size: 'medium', count: 6 },
      { label: 'Чип 7', size: 'medium', count: 7 },
      { label: 'Чип 8', size: 'medium', count: 8 },
      { label: 'Чип 9', size: 'medium', count: 9 },
      { label: 'Чип 10', size: 'medium', count: 10 },
    ],
  },
};

export const LongChipText: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Это очень длинный текст для чипа', size: 'medium', count: 1 },
      { label: 'Короткий чип', size: 'medium', count: 2 },
      { label: 'Еще один длинный текст для чипа', size: 'medium', count: 3 },
    ],
  },
};

export const DifferentSizes: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Small Chip', size: 'small', count: 1 },
      { label: 'Medium Chip', size: 'medium', count: 2 },
      { label: 'Large Chip', size: 'large', count: 3 },
    ],
  },
};

export const MixedStateChips: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Small Chip', size: 'small', count: 1 },
      { label: 'Medium Chip', size: 'medium', count: 2 },
      { label: 'Large Chip', size: 'large', count: 3 },
      { label: 'Очень длинный текст для чипа', size: 'large', count: 4 },
    ],
  },
};
