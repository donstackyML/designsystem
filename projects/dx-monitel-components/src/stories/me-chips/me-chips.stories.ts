// me-chips.stories.ts
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { MeChipComponent } from '../../public-api';
import { MeChipsContainerComponent } from '../../public-api';

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
      description:
        'Массив объектов для отображения в виде чипов. Каждый объект содержит label, size, count, и опции для удаления и активности.',
      table: {
        type: {
          summary: 'MeChip[]',
          detail: `{
            label: string;
            size: 'small' | 'medium' | 'large';
            count: number | null;
            removable?: boolean;
            disabled?: boolean;
            selected?: boolean;
          }[]`,
        },
      },
    },
    multiSelect: {
      control: 'boolean',
      description:
        'Режим множественного выбора чипов. При true позволяет выбирать несколько чипов одновременно.',
      table: {
        type: { summary: 'boolean' },
        category: 'Behavior',
      },
    },
    chipsChange: {
      action: 'chipsChange',
      description:
        'Событие, возникающее при изменении массива чипов (удаление)',
      table: {
        category: 'Events',
        type: { summary: 'EventEmitter<MeChip[]>' },
      },
    },
    selectionChange: {
      action: 'selectionChange',
      description: 'Событие, возникающее при изменении выбранных чипов',
      table: {
        category: 'Events',
        type: { summary: 'EventEmitter<MeChip[]>' },
      },
    },
  },
  args: {
    chips: [
      { label: 'Схемы', size: 'medium', count: 1, selected: false },
      { label: 'Наборы', size: 'medium', count: 1, selected: false },
      { label: 'Прибор', size: 'medium', count: 2, selected: false },
    ],
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
Component MeChipsContainer - контейнер для отображения и управления чипами.

## Основные возможности
- Отображение чипов разных размеров
- Поддержка счетчиков
- Возможность удаления чипов
- Одиночный и множественный выбор
- Поддержка отключенного состояния
        `,
      },
    },
  },
};

export default chipsContainerMeta;

type ChipsContainerStory = StoryObj<MeChipsContainerComponent>;

// Базовый шаблон для всех историй
const ChipsContainerTemplate: ChipsContainerStory = {
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
      <me-chips-container
        [chips]="chips"
        [multiSelect]="multiSelect"
        (chipsChange)="onChipsChange($event)"
        (selectionChange)="onSelectionChange($event)"
      ></me-chips-container>
    `,
  }),
};

// Базовый пример
export const Default: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          'Базовый пример использования компонента с чипами среднего размера.',
      },
    },
  },
};

// Один чип
export const SingleChip: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Одиночный чип', size: 'medium', count: 1, selected: false },
    ],
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Пример с одним чипом.',
      },
    },
  },
};

// Отключенные чипы
export const DisabledChips: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      {
        label: 'Отключенный чип',
        size: 'medium',
        count: 1,
        removable: false,
        disabled: true,
        selected: false,
      },
      {
        label: 'Еще один отключенный чип',
        size: 'large',
        count: 2,
        removable: false,
        disabled: true,
        selected: false,
      },
    ],
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Пример отключенных чипов. Они не могут быть выбраны или удалены.',
      },
    },
  },
};

// Неудаляемые чипы
export const ChipsWithoutRemoval: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      {
        label: 'Чип без удаления',
        size: 'small',
        count: 1,
        removable: false,
        selected: false,
      },
      {
        label: 'Еще один чип без удаления',
        size: 'large',
        count: 2,
        removable: false,
        selected: false,
      },
    ],
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Пример чипов без возможности удаления.',
      },
    },
  },
};

// Много чипов
export const ManyChips: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: Array.from({ length: 10 }, (_, i) => ({
      label: `Чип ${i + 1}`,
      size: 'medium',
      count: i + 1,
      selected: false,
    })),
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Пример с большим количеством чипов для демонстрации поведения контейнера.',
      },
    },
  },
};

// Длинный текст
export const LongChipText: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      {
        label: 'Это очень длинный текст для чипа',
        size: 'medium',
        count: 1,
        selected: false,
      },
      {
        label: 'Короткий чип',
        size: 'medium',
        count: 2,
        selected: false,
      },
      {
        label: 'Еще один длинный текст для чипа',
        size: 'medium',
        count: 3,
        selected: false,
      },
    ],
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация поведения чипов с длинным текстом.',
      },
    },
  },
};

// Разные размеры
export const DifferentSizes: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Small Chip', size: 'small', count: 1, selected: false },
      { label: 'Medium Chip', size: 'medium', count: 2, selected: false },
      { label: 'Large Chip', size: 'large', count: 3, selected: false },
    ],
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Демонстрация всех доступных размеров чипов.',
      },
    },
  },
};

// Смешанное состояние
export const MixedStateChips: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'Small Chip', size: 'small', count: 1, selected: false },
      { label: 'Medium Chip', size: 'medium', count: 2, selected: true },
      { label: 'Large Chip', size: 'large', count: 3, selected: false },
      {
        label: 'Очень длинный текст для чипа',
        size: 'large',
        count: 4,
        selected: false,
      },
    ],
    multiSelect: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Пример чипов разных размеров с разными состояниями.',
      },
    },
  },
};

// Мультивыбор
export const MultiSelect: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'JavaScript', size: 'medium', count: 12, selected: false },
      { label: 'TypeScript', size: 'medium', count: 8, selected: true },
      { label: 'Angular', size: 'medium', count: 5, selected: true },
      { label: 'React', size: 'medium', count: 7, selected: false },
      { label: 'Vue', size: 'medium', count: 3, selected: false },
    ],
    multiSelect: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Режим множественного выбора чипов. Позволяет выбирать несколько чипов одновременно.',
      },
    },
  },
};

// Одиночный выбор
export const SingleSelect: ChipsContainerStory = {
  ...ChipsContainerTemplate,
  args: {
    chips: [
      { label: 'JavaScript', size: 'medium', count: 12, selected: false },
      { label: 'TypeScript', size: 'medium', count: 8, selected: true },
      { label: 'Angular', size: 'medium', count: 5, selected: false },
      { label: 'React', size: 'medium', count: 7, selected: false },
      { label: 'Vue', size: 'medium', count: 3, selected: false },
    ],
    multiSelect: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Режим одиночного выбора. Позволяет выбрать только один чип.',
      },
    },
  },
};
