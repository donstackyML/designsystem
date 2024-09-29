import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxMenuModule, DxButtonModule, DxContextMenuModule } from 'devextreme-angular';
import { MeBreadcrumbsComponent } from '../../lib/components/me-breadcrumbs/me-breadcrumbs.component';
import { MeIconStoreService } from "../../lib/service/icon-store.service";
import { MeIconComponent } from "../../public-api";

const iconStore = new MeIconStoreService();

const meta: Meta<MeBreadcrumbsComponent> = {
  title: 'Components/MeBreadcrumbs(RC)',
  component: MeBreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [MeBreadcrumbsComponent, DxMenuModule, DxButtonModule, DxContextMenuModule, MeIconComponent],
      providers: [MeIconStoreService],
    }),
  ],
  argTypes: {
    items: { control: 'object' },
    truncateFrom: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
    itemClick: { action: 'itemClicked' },
  },
};

export default meta;
type Story = StoryObj<MeBreadcrumbsComponent>;

const defaultItems = [
  { text: 'Home', url: '/', icon: 'home' },
  { text: 'Products', url: '/products', icon: 'shopping_cart' },
  { text: 'Laptops', url: '/products/laptops', icon: 'laptop_mac' },
];

// Обновленная история с иконками и выпадающим меню в одном из элементов
export const WithIconsAndDropdowns: Story = {
  args: {
    items: [
      {
        text: 'Home',
        url: '/',
        icon: 'home',
      },
      {
        text: 'Products',
        icon: 'shopping_cart',
        // Добавляем выпадающее меню к этому элементу
        items: [
          {
            text: 'Laptops',
            url: '/products/laptops',
            icon: 'laptop_mac',
          },
          {
            text: 'Tablets',
            url: '/products/tablets',
            icon: 'tablet_mac',
          },
          {
            text: 'Accessories',
            url: '/products/accessories',
            icon: 'headset',
          },
        ],
      },
      {
        text: 'Laptops',
        url: '/products/laptops',
        icon: 'laptop_mac',
      },
      {
        text: 'Gaming Laptops',
        url: '/products/laptops/gaming',
        icon: 'sports_esports',
      },
    ],
    truncateFrom: 'right',
    size: 'small',
  },
};

export const Default: Story = {
  args: {
    items: defaultItems.map(item => ({
      ...item,
      icon: item.icon, // Используем соответствующие иконки
    })),
    truncateFrom: 'right',
    size: 'small',
  },
};

export const WithDropdowns: Story = {
  args: {
    items: [
      { text: 'Home', url: '/', icon: 'home' },
      {
        text: 'Products',
        icon: 'shopping_cart',
        items: [
          { text: 'Laptops', url: '/products/laptops', icon: 'laptop_mac' },
          { text: 'Tablets', url: '/products/tablets', icon: 'tablet_mac' },
        ],
      },
      { text: 'Laptops', url: '/products/laptops', icon: 'laptop_mac' },
    ],
    truncateFrom: 'right',
    size: 'small',
  },
};

export const LargeSizeBreadcrumbs: Story = {
  args: {
    items: defaultItems.map(item => ({
      ...item,
      icon: item.icon, // Используем соответствующие иконки
    })),
    truncateFrom: 'right',
    size: 'large',
  },
};

export const TruncateFromLeft: Story = {
  args: {
    items: [
      { text: 'Home', url: '/', icon: 'home' },
      { text: 'Products', url: '/products', icon: 'shopping_cart' },
      { text: 'Electronics', url: '/products/electronics', icon: 'devices' },
      { text: 'Computers', url: '/products/electronics/computers', icon: 'computer' },
      { text: 'Laptops', url: '/products/electronics/computers/laptops', icon: 'laptop_mac' },
    ],
    truncateFrom: 'left',
  },
};

export const LongBreadcrumbs: Story = {
  args: {
    items: [
      { text: 'Home', url: '/', icon: 'home' },
      { text: 'Category 1', url: '/cat1', icon: 'category' },
      { text: 'Category 2', url: '/cat1/cat2', icon: 'category' },
      { text: 'Category 3', url: '/cat1/cat2/cat3', icon: 'category' },
      { text: 'Category 4', url: '/cat1/cat2/cat3/cat4', icon: 'category' },
      { text: 'Category 5', url: '/cat1/cat2/cat3/cat4/cat5', icon: 'category' },
      { text: 'Product', url: '/cat1/cat2/cat3/cat4/cat5/product', icon: 'store' },
    ],
    truncateFrom: 'right',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { text: 'Dashboard', url: '/dashboard', icon: 'dashboard' },
      { text: 'Reports', url: '/reports', icon: 'bar_chart' },
      { text: 'Annual Report', url: '/reports/annual', icon: 'insert_chart' },
    ],
    truncateFrom: 'right',
    size: 'small',
  },
};
