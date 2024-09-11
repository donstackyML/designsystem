import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import {MeBreadcrumbsComponent} from "../../lib/components/me-breadcrumbs/me-breadcrumbs.component";

const meta: Meta<MeBreadcrumbsComponent> = {
  title: 'Components/MeBreadcrumbs',
  component: MeBreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [MeBreadcrumbsComponent],
    }),
  ],
  argTypes: {
    items: {
      control: 'object',
      description: 'Массив элементов хлебных крошек',
    },
    itemClick: {
      action: 'itemClick',
      description: 'Событие, возникающее при клике на элемент',
    },
  },
};

export default meta;
type Story = StoryObj<MeBreadcrumbsComponent>;

export const Default: Story = {
  args: {
    items: [
      { text: 'Home', url: '/', icon: 'home' },
      { text: 'Products', url: '/products' },
      { text: 'Laptops', url: '/products/laptops' },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      itemClick: action('itemClick'),
    },
  }),
};

export const WithSubmenus: Story = {
  args: {
    items: [
      { text: 'Home', url: '/', icon: 'home' },
      {
        text: 'Products',
        items: [
          { text: 'Laptops', url: '/products/laptops' },
          { text: 'Smartphones', url: '/products/smartphones' },
        ]
      },
      { text: 'Laptops', url: '/products/laptops' },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      itemClick: action('itemClick'),
    },
  }),
};

export const LongBreadcrumbs: Story = {
  args: {
    items: [
      { text: 'Home', url: '/', icon: 'home' },
      { text: 'Category', url: '/category' },
      { text: 'Subcategory', url: '/category/subcategory' },
      { text: 'Product Type', url: '/category/subcategory/product-type' },
      { text: 'Brand', url: '/category/subcategory/product-type/brand' },
      { text: 'Model', url: '/category/subcategory/product-type/brand/model' },
      { text: 'SKU', url: '/category/subcategory/product-type/brand/model/sku' },
    ],
  },
  render: (args) => ({
    props: {
      ...args,
      itemClick: action('itemClick'),
    },
  }),
};
