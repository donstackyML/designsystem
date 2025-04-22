import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxListModule } from 'devextreme-angular';

import { MeListDirective } from '../../../../public-api';
import {
  meListDefaultMockData,
  meListDefaultMockDataWithDividers,
  meListMockDataWithHeaderDescription,
  meListMockDataWithHeaders,
  meListMockDataWithIcons,
  meListMockDataWithImageAndDescription,
} from './me-list-mock-data';

export default {
  title: 'Components/List',
  decorators: [
    moduleMetadata({
      declarations: [MeListDirective],
      imports: [DxListModule],
    }),
  ],
  argTypes: {
    dataSource: {
      description: 'Данные для отображения',
      table: {
        type: { summary: 'Array<any>' },
        defaultValue: { summary: '[]' },
      },
    },
    searchEnabled: {
      description: 'Разрешить поиск',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    searchMode: {
      description: 'Режим поиска',
      control: 'select',
      options: ['contains', 'startswith', 'equals'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'contains' },
      },
    },
    allowItemDeleting: {
      description: 'Разрешить удаление элементов',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    itemDeleteMode: {
      description: 'Режим удаления элементов',
      control: 'select',
      options: [
        'context',
        'slideButton',
        'slideItem',
        'static',
        'swipe',
        'toggle',
      ],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'context' },
      },
    },
    disabled: {
      description: 'Отключить компонент',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectByClick: {
      description: 'Выбрать элемент при клике',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    grouped: {
      description: 'Группировать элементы',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    collapsibleGroups: {
      description: 'Сворачивать группы',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    selectionMode: {
      description: 'Определяет способ выделения элементов',
      control: 'select',
      options: ['multiple', 'single', 'all', 'none'],
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
    showSelectionControls: {
      description: 'Показывать элементы управления выбором',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      description: 'Ширина списка',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      description: 'Высота списка',
      control: 'text',
      table: {
        type: { summary: 'string | number | undefined' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showScrollbar: {
      control: 'select',
      options: ['onHover', 'onScroll', 'always', 'never'],
      description: 'Условия отображения скролла',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'onHover' },
      },
    },
    dividersVisibility: {
      control: 'select',
      options: ['all', 'auto', 'none'],
      description: 'Определяет видимость разделителей у элементов списка.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'all' },
      },
    },
  },
  args: {
    dataSource: meListDefaultMockData,
    selectionMode: 'none',
    selectByClick: false,
    searchEnabled: false,
    searchMode: 'contains',
    showSelectionControls: true,
    allowItemDeleting: false,
    itemDeleteMode: 'static',
    disabled: false,
    grouped: false,
    collapsibleGroups: false,
    width: 436,
    height: undefined,
    showScrollbar: 'onHover',
    dividersVisibility: 'all',
    searchExpr: 'text',
    keyExpr: 'key',
  },
  render: (args) => ({
    props: args,
    template: `<dx-list meList ${argsToTemplate(args)}></dx-list>`,
  }),
} satisfies Meta<MeListDirective | DxListModule>;

type Story = StoryObj<MeListDirective | DxListModule>;

export const Default: Story = {};

export const WithFixedHeight: Story = {
  args: {
    height: 300,
  },
};

export const WithReordering: Story = {
  render: (args) => ({
    props: args,
    template: `
<dx-list meList ${argsToTemplate(args)}>
  <dxo-item-dragging [allowReordering]="true"></dxo-item-dragging>
</dx-list>`,
  }),
};

export const DeletingModeStatic: Story = {
  args: {
    allowItemDeleting: true,
    itemDeleteMode: 'static',
  },
};

export const DeletingModeSlideButton: Story = {
  args: {
    allowItemDeleting: true,
    itemDeleteMode: 'slideButton',
  },
  render: (args) => ({
    props: args,
    template: `
<div class="delete-mode-context-example">
  <p>Удаление элемента через кнопку, изначально спрятанную кнопку. Чтобы вызвать кнопку, зажмите и потяните в сторону элемент, а затем нажмите на кнопку "Удалить".</p>
  <dx-list meList ${argsToTemplate(args)}></dx-list>
</div>`,
    styles: [
      `
    .delete-mode-context-example {
      color: var(--Text-Default);
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  `,
    ],
  }),
};

export const DeletingModeSlideItem: Story = {
  args: {
    allowItemDeleting: true,
    itemDeleteMode: 'slideItem',
  },
  render: (args) => ({
    props: args,
    template: `
<div class="delete-mode-context-example">
  <p>Удаление элемента через кнопку изначально спрятанную кнопку. Чтобы вызвать кнопку, зажмите и потяните в левую сторону элемент, а затем нажмите на кнопку "Удалить".</p>
  <dx-list meList ${argsToTemplate(args)}></dx-list>
</div>`,
    styles: [
      `
    .delete-mode-context-example {
      color: var(--Text-Default);
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  `,
    ],
  }),
};

export const DeletingModeSwipe: Story = {
  args: {
    allowItemDeleting: true,
    itemDeleteMode: 'swipe',
  },
  render: (args) => ({
    props: args,
    template: `
<div class="delete-mode-context-example">
  <p>Удаление элемента через свайп. Зажмите и смахните элемент, чтобы удалить.</p>
  <dx-list meList ${argsToTemplate(args)}></dx-list>
</div>`,
    styles: [
      `
    .delete-mode-context-example {
      color: var(--Text-Default);
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  `,
    ],
  }),
};

export const DeletingModeToggle: Story = {
  args: {
    allowItemDeleting: true,
    itemDeleteMode: 'toggle',
  },
  render: (args) => ({
    props: args,
    template: `
<div class="delete-mode-context-example">
  <p>Удаление элемента через переключатель. Нажмите на кнопку-переключатель, чтобы включить/отключить режим удаления.</p>
  <dx-list meList ${argsToTemplate(args)}></dx-list>
</div>`,
    styles: [
      `
    .delete-mode-context-example {
      color: var(--Text-Default);
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  `,
    ],
  }),
};

export const DeletingModeContext: Story = {
  args: {
    allowItemDeleting: true,
    itemDeleteMode: 'context',
  },
  render: (args) => ({
    props: args,
    template: `
<div class="delete-mode-context-example">
  <p>Удаление элемента через контекстное меню. Нажмите правой кнопкой мыши на элемент, чтобы вызвать контекстное меню.</p>
  <dx-list meList ${argsToTemplate(args)}></dx-list>
</div>`,
    styles: [
      `
    .delete-mode-context-example {
      color: var(--Text-Default);
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
  `,
    ],
  }),
};

export const SelectionModeSingle: Story = {
  args: {
    selectionMode: 'single',
    showSelectionControls: true,
  },
};

export const SelectionModeMultiple: Story = {
  args: {
    selectionMode: 'multiple',
    showSelectionControls: true,
  },
};

export const SelectionModeAll: Story = {
  args: {
    selectionMode: 'all',
    showSelectionControls: true,
  },
};

export const DividersVisibilityNone: Story = {
  args: {
    dividersVisibility: 'none',
  },
};

export const DividersVisibilityAll: Story = {
  args: {
    dividersVisibility: 'all',
  },
};

export const DividersVisibilityByContent: Story = {
  args: {
    dividersVisibility: 'auto',
    dataSource: meListDefaultMockDataWithDividers,
  },
};

export const ContentWithIcons: Story = {
  args: {
    dataSource: meListMockDataWithIcons,
  },
};

export const ContentWithHeader: Story = {
  args: {
    dataSource: meListMockDataWithHeaderDescription,
    grouped: true,
    searchExpr: 'text',
  },
};

export const ContentGroupedWithSearch: Story = {
  args: {
    dataSource: meListMockDataWithHeaders,
    searchEnabled: true,
    collapsibleGroups: true,
    grouped: true,
    height: 300,
    searchExpr: 'text',
  },
};

export const ContentWithCustomTemplateForHeader: Story = {
  args: {
    dataSource: meListMockDataWithHeaderDescription,
    grouped: true,
    searchExpr: 'text',
  },
  render: (args) => ({
    props: args,
    template: `
<dx-list meList ${argsToTemplate(args)}>
  <div *dxTemplate="let group of 'group'">
    <p class="me-title-header2" style="margin: 0">{{ group.key }}</p>
    <p class="me-text-caption" style="margin: 0">{{ group.description }}</p>
  </div>
</dx-list>`,
  }),
};

export const ContentWithCustomTemplateForListItem: Story = {
  args: {
    dataSource: meListMockDataWithImageAndDescription,
  },
  render: (args) => ({
    props: args,
    template: `
<dx-list meList ${argsToTemplate(args)}>
  <div *dxTemplate="let item of 'item'">
    <div class="me-list-item-content">
      <img alt="{{ item.name }}" src="{{ item.image }}" />
      <div>
        <div class="me-text-body2">{{ item.name }}</div>
        <div class="me-text-caption">{{ item.description }}</div>
      </div>
    </div>
  </div>
</dx-list>
`,
  }),
};
