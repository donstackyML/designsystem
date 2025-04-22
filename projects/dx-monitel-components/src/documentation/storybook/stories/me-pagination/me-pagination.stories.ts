import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';
import {
  MePaginationComponent,
  MeSelectBoxModule,
} from '../../../../public-api';

export default {
  title: 'Components/Pagination',
  component: MePaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MePaginationComponent,
        DxButtonModule,
        DxSelectBoxModule,
        MeSelectBoxModule,
      ],
    }),
  ],
  argTypes: {
    totalItems: {
      control: { type: 'number', min: 0, max: 1000, step: 1 },
      description: 'Общее количество элементов',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: 'Количество элементов на странице',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '10' },
      },
    },
    currentPage: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: 'Текущая страница',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    itemsPerPageOptions: {
      control: { type: 'object' },
      description: 'Возможные варианты количества элементов на странице',
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: '[10, 50, 100]' },
      },
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 10, step: 1 },
      description: 'Максимальное количество видимых кнопок страниц',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '7' },
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Размер всех элементов управления',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'medium' },
      },
    },
    hasPageSizeControlButtons: {
      control: { type: 'boolean' },
      description: 'Включено ли поле выбора количества элементов на странице',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    useButtons: {
      control: { type: 'boolean' },
      description:
        'Использовать кнопки вместо выпадающего списка для выбора количества элементов на странице',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    transparentBackground: {
      control: { type: 'boolean' },
      description: 'Прозрачный фон для кнопок',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isDarkTheme: {
      control: { type: 'boolean' },
      description: 'Темная тема',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pageChange: {
      action: 'pageChanged',
      description: 'Событие при изменении страницы',
      table: {
        type: { summary: 'function' },
      },
    },
    itemsPerPageChange: {
      action: 'itemsPerPageChanged',
      description: 'Событие при изменении количества элементов на странице',
      table: {
        type: { summary: 'function' },
      },
    },
  },
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    maxVisiblePages: 7,
    itemsPerPageOptions: [10, 50, 100],
    size: 'medium',
    hasPageSizeControlButtons: true,
    useButtons: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <me-pagination ${argsToTemplate(args)}></me-pagination>
    `,
  }),
} satisfies Meta<MePaginationComponent>;

type Story = StoryObj<MePaginationComponent>;

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

export const PageSizeControlWithDropDownButton: Story = {
  args: {
    useButtons: false,
    itemsPerPageOptions: [10, 20, 30],
  },
};

export const PageSizeControlWithButtons: Story = {
  args: {
    useButtons: true,
    itemsPerPageOptions: [10, 20, 30],
  },
};

export const WithoutPageSizeControlButtons: Story = {
  args: {
    hasPageSizeControlButtons: false,
  },
};

export const WithoutBackground: Story = {
  args: {
    transparentBackground: true,
  },
};

export const ManyPages: Story = {
  args: {
    totalItems: 1000,
    itemsPerPage: 20,
    currentPage: 5,
    maxVisiblePages: 7,
  },
};

export const FewItems: Story = {
  args: {
    totalItems: 30,
    itemsPerPage: 10,
    currentPage: 1,
    maxVisiblePages: 5,
  },
};

export const CustomItemsPerPage: Story = {
  args: {
    totalItems: 500,
    itemsPerPage: 50,
    currentPage: 1,
    maxVisiblePages: 5,
    useButtons: true,
  },
};

export const LastPage: Story = {
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 10,
    maxVisiblePages: 5,
  },
};

export const MaxVisiblePages: Story = {
  args: {
    totalItems: 200,
    itemsPerPage: 10,
    currentPage: 5,
    maxVisiblePages: 10,
  },
};

export const CustomItemsOptions: Story = {
  args: {
    totalItems: 400,
    itemsPerPage: 50,
    currentPage: 2,
    maxVisiblePages: 5,
    useButtons: false,
    itemsPerPageOptions: [25, 50, 75, 100],
  },
};
