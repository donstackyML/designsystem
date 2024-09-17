import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  DxMenuModule,
  DxButtonModule,
  DxContextMenuModule,
} from 'devextreme-angular';
import { MeBreadcrumbsComponent } from '../../lib/components/me-breadcrumbs/me-breadcrumbs.component';

const meta: Meta<MeBreadcrumbsComponent> = {
  title: 'Components/MeBreadcrumbs',
  component: MeBreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MeBreadcrumbsComponent,
        DxMenuModule,
        DxButtonModule,
        DxContextMenuModule,
      ],
    }),
  ],
  argTypes: {
    items: { control: 'object' },
    truncateFrom: {
      control: 'radio',
      options: ['left', 'right'],
    },
    itemClick: { action: 'itemClicked' },
  },
};

export default meta;
type Story = StoryObj<MeBreadcrumbsComponent>;

export const Default: Story = {
  args: {
    items: [
      { text: 'Home', url: '/' },
      { text: 'Products', url: '/products' },
      { text: 'Laptops', url: '/products/laptops' },
    ],
    truncateFrom: 'right',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { text: 'Home', url: '/', icon: 'home' },
      { text: 'Products', url: '/products', icon: 'product' },
      { text: 'Laptops', url: '/products/laptops', icon: 'laptop' },
    ],
    truncateFrom: 'right',
  },
};

export const WithDropdowns: Story = {
  args: {
    items: [
      { text: 'Home', url: '/' },
      {
        text: 'Products',
        items: [
          { text: 'Laptops', url: '/products/laptops' },
          { text: 'Tablets', url: '/products/tablets' },
        ],
      },
      { text: 'Laptops', url: '/products/laptops' },
    ],
    truncateFrom: 'right',
  },
};

export const TruncateFromLeft: Story = {
  args: {
    items: [
      { text: 'Home', url: '/' },
      { text: 'Products', url: '/products' },
      { text: 'Electronics', url: '/products/electronics' },
      { text: 'Computers', url: '/products/electronics/computers' },
      { text: 'Laptops', url: '/products/electronics/computers/laptops' },
    ],
    truncateFrom: 'left',
  },
};

export const LongBreadcrumbs: Story = {
  args: {
    items: [
      { text: 'Home', url: '/' },
      { text: 'Category 1', url: '/cat1' },
      { text: 'Category 2', url: '/cat1/cat2' },
      { text: 'Category 3', url: '/cat1/cat2/cat3' },
      { text: 'Category 4', url: '/cat1/cat2/cat3/cat4' },
      { text: 'Category 5', url: '/cat1/cat2/cat3/cat4/cat5' },
      { text: 'Product', url: '/cat1/cat2/cat3/cat4/cat5/product' },
    ],
    truncateFrom: 'right',
  },
};
