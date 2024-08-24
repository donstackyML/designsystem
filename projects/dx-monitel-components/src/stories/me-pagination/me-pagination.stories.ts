import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MePaginationComponent } from "../../public-api";
import { DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';

export default {
  title: 'Components/Pagination',
  component: MePaginationComponent,
  decorators: [
    moduleMetadata({
      imports: [MePaginationComponent, DxButtonModule, DxSelectBoxModule],
    }),
  ],
  argTypes: {
    totalItems: {
      control: { type: 'number', min: 0, max: 1000, step: 1 },
      description: 'Общее количество элементов',
    },
    itemsPerPage: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: 'Количество элементов на странице',
    },
    currentPage: {
      control: { type: 'number', min: 1, max: 100, step: 1 },
      description: 'Текущая страница',
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 10, step: 1 },
      description: 'Максимальное количество видимых кнопок страниц',
    },
    pageChange: { action: 'pageChanged' },
    itemsPerPageChange: { action: 'itemsPerPageChanged' },
  },
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 1,
    maxVisiblePages: 5,
  },
} as Meta<MePaginationComponent>;

type Story = StoryObj<MePaginationComponent>;

const Template: Story = {
  render: (args) => ({
    props: {
      ...args,
      onPageChange: (e: any) => console.log('Страница изменена', e),
      onItemsPerPageChange: (e: any) => console.log('Изменено количество элементов на странице', e),
    },
    template: `
      <me-pagination
        [totalItems]="totalItems"
        [itemsPerPage]="itemsPerPage"
        [currentPage]="currentPage"
        [maxVisiblePages]="maxVisiblePages"
        (pageChange)="onPageChange($event)"
        (itemsPerPageChange)="onItemsPerPageChange($event)"
      >
      </me-pagination>
    `,
  }),
};

export const Default: Story = {
  ...Template,
  args: {},
};

export const ManyPages: Story = {
  ...Template,
  args: {
    totalItems: 1000,
    itemsPerPage: 20,
    currentPage: 5,
    maxVisiblePages: 7,
  },
};

export const FewItems: Story = {
  ...Template,
  args: {
    totalItems: 30,
    itemsPerPage: 10,
    currentPage: 1,
    maxVisiblePages: 5,
  },
};

export const CustomItemsPerPage: Story = {
  ...Template,
  args: {
    totalItems: 500,
    itemsPerPage: 50,
    currentPage: 1,
    maxVisiblePages: 5,
  },
};

export const LastPage: Story = {
  ...Template,
  args: {
    totalItems: 100,
    itemsPerPage: 10,
    currentPage: 10,
    maxVisiblePages: 5,
  },
};

export const MaxVisiblePages: Story = {
  ...Template,
  args: {
    totalItems: 200,
    itemsPerPage: 10,
    currentPage: 5,
    maxVisiblePages: 10,
  },
};
