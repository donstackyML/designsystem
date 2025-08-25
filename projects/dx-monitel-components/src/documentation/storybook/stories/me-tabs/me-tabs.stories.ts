import {
  addX20,
  attachFileX20,
  homeX20,
  mailX20,
  publicX20,
} from '@monitel/me-icons';
import { registry } from '../../../../../.storybook/preview';

import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxTabsComponent, DxTabsModule } from 'devextreme-angular';
import { Tab } from '../../../../lib/directives/me-tabs/me-tabs.directive';
import { MeTabsDirective } from '../../../../public-api';

const defaultTabsData: Tab[] = [
  { id: 1, text: 'Tab 1', icon: registry.getIcon(publicX20) },
  { id: 2, text: 'Tab 2', icon: registry.getIcon(mailX20) },
  { id: 3, text: 'Tab 3', icon: registry.getIcon(attachFileX20) },
  { id: 4, text: 'Tab 4', icon: registry.getIcon(homeX20) },
  { id: 5, text: 'Tab 5', icon: registry.getIcon(addX20) },
];

export default {
  title: 'Components/Tabs',
  decorators: [
    moduleMetadata({
      declarations: [DxTabsComponent, MeTabsDirective],
    }),
  ],
  argTypes: {
    position: {
      description:
        'Определяет расположение вкладок относительно содержимого компонента.',
      options: ['top', 'bottom'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'top'" },
      },
    },
    size: {
      description: 'Устанавливает размер вкладок.',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'medium'" },
      },
    },
    stylingMode: {
      description: 'Задает стиль отображения вкладок.',
      options: ['inside', 'outside'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'inside'" },
      },
    },
    orientation: {
      description: 'Определяет ориентацию вкладок.',
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'horizontal'" },
      },
    },
    iconPosition: {
      description: 'Устанавливает положение иконки внутри вкладок.',
      options: ['top', 'start', 'end', 'bottom'],
      control: { type: 'select' },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'start'" },
      },
    },
    showNavButtons: {
      description:
        'Включает отображение кнопок навигации для прокрутки вкладок, если их число превышает доступное пространство.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    scrollByContent: {
      description:
        'Разрешает прокрутку вкладок путем перетаскивания содержимого, что полезно при переполнении области.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    stretchTabs: {
      description:
        'Заставляет вкладки растягиваться на всю ширину контейнера, что может улучшить их визуальное распределение в некоторых макетах.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rtlEnabled: {
      description:
        'Включает режим отображения справа налево (RTL), что полезно для локализаций с языками, использующими RTL, например, иврит или арабский.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description:
        'Отключает вкладки, делая их неактивными для взаимодействия пользователя.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      description:
        'Задает ширину компонента вкладок. Можно указать числовое значение или строку (например, "auto", "100%").',
      control: 'text',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '"auto"' },
      },
    },
    height: {
      description:
        'Задает высоту компонента вкладок. Можно указать числовое значение или строку. Если не задано, используется автоматическая высота.',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    roundedBorders: {
      description: 'Указывает, скруглены ли рамки у табов.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
  args: {
    position: 'top',
    size: 'medium',
    stylingMode: 'inside',
    orientation: 'horizontal',
    iconPosition: 'start',
    showNavButtons: false,
    scrollByContent: false,
    width: 'auto',
    height: 'auto',
    customClass: '',
    dataSource: defaultTabsData,
    rtlEnabled: false,
    disabled: false,
    stretchTabs: false,
    roundedBorders: true,
  },
  render: (args) => ({
    props: args,
    template: `
     <dx-tabs
       meTabs
       ${argsToTemplate(args)}
     ></dx-tabs>
   `,
  }),
} satisfies Meta<DxTabsModule | MeTabsDirective>;

type Story = StoryObj<DxTabsModule | MeTabsDirective>;

export const Default: Story = {};

export const SizeSmall: Story = {
  args: {
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    size: 'large',
  },
};

export const OrientationVertical: Story = {
  args: {
    orientation: 'vertical',
  },
};

export const OrientationHorizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
};

export const NavigationWithButtons: Story = {
  args: {
    showNavButtons: true,
    width: '300px',
  },
};

export const NavigationWithScroll: Story = {
  args: {
    scrollByContent: true,
    width: '300px',
  },
};

export const IconPositionStart: Story = {
  args: {
    iconPosition: 'start',
  },
};

export const IconPositionEnd: Story = {
  args: {
    iconPosition: 'end',
  },
};

export const IconPositionTop: Story = {
  args: {
    iconPosition: 'top',
  },
};

export const IconPositionBottom: Story = {
  args: {
    iconPosition: 'bottom',
  },
};

export const StylingModeOutside: Story = {
  args: {
    stylingMode: 'outside',
  },
};

export const StylingModeInside: Story = {
  args: {
    stylingMode: 'inside',
  },
};

export const RightToLeft: Story = {
  args: {
    rtlEnabled: true,
  },
};

export const StretchTabs: Story = {
  args: {
    stretchTabs: true,
    width: '100vw',
  },
};
