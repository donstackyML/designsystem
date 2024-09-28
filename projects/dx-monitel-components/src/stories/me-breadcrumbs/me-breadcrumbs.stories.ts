import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DxMenuModule, DxButtonModule, DxContextMenuModule } from 'devextreme-angular';
import { MeBreadcrumbsComponent } from '../../lib/components/me-breadcrumbs/me-breadcrumbs.component';
import { MeIconStoreService } from "../../lib/service/icon-store.service";

const iconStore = new MeIconStoreService();

const meta: Meta<MeBreadcrumbsComponent> = {
  title: 'Components/MeBreadcrumbs(RC)',
  component: MeBreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [MeBreadcrumbsComponent, DxMenuModule, DxButtonModule, DxContextMenuModule],
      providers: [MeIconStoreService],
    }),
  ],
  argTypes: {
    items: { control: 'object' },
    truncateFrom: {
      control: 'select', // Изменено с 'radio' на 'select'
      options: ['left', 'right'],
    },
    size: {
      control: 'select', // Изменено с 'radio' на 'select'
      options: ['small', 'large'],
    },
    itemClick: { action: 'itemClicked' },
  },
};

export default meta;
type Story = StoryObj<MeBreadcrumbsComponent>;

const defaultItems = [
  { text: 'Home', url: '/', icon: 'home' },
  { text: 'Products', url: '/products', icon: 'product' },
  { text: 'Laptops', url: '/products/laptops', icon: 'laptop' },
];

// Обновленная история с иконками и выпадающим меню в одном из элементов
export const WithIconsAndDropdowns: Story = {
  args: {
    items: [
      {
        text: 'Home',
        url: '/',
        icon: iconStore.getIcon({ icon: 'home', size: 'small' }),
      },
      {
        text: 'Products',
        icon: iconStore.getIcon({ icon: 'folder', size: 'small' }),
        // Добавляем выпадающее меню к этому элементу
        items: [
          {
            text: 'Laptops',
            url: '/products/laptops',
            icon: iconStore.getIcon({ icon: 'laptop', size: 'small' }),
          },
          {
            text: 'Tablets',
            url: '/products/tablets',
            icon: iconStore.getIcon({ icon: 'tablet', size: 'small' }),
          },
          {
            text: 'Accessories',
            url: '/products/accessories',
            icon: iconStore.getIcon({ icon: 'accessories', size: 'small' }),
          },
        ],
      },
      {
        text: 'Laptops',
        url: '/products/laptops',
        icon: iconStore.getIcon({ icon: 'laptop', size: 'small' }),
      },
      {
        text: 'Gaming Laptops',
        url: '/products/laptops/gaming',
        icon: iconStore.getIcon({ icon: 'gaming', size: 'small' }),
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
      icon: iconStore.getIcon({ icon: item.icon, size: 'small' })
    })),
    truncateFrom: 'right',
    size: 'small',
  },
};

export const WithDropdowns: Story = {
  args: {
    items: [
      { text: 'Home', url: '/', icon: iconStore.getIcon({ icon: 'home', size: 'small' }) },
      {
        text: 'Products',
        icon: iconStore.getIcon({ icon: 'folder', size: 'small' }),
        items: [
          { text: 'Laptops', url: '/products/laptops', icon: iconStore.getIcon({ icon: 'laptop', size: 'small' }) },
          { text: 'Tablets', url: '/products/tablets', icon: iconStore.getIcon({ icon: 'tablet', size: 'small' }) },
        ],
      },
      { text: 'Laptops', url: '/products/laptops', icon: iconStore.getIcon({ icon: 'laptop', size: 'small' }) },
    ],
    truncateFrom: 'right',
    size: 'small',
  },
};

export const LargeSizeBreadcrumbs: Story = {
  args: {
    items: defaultItems.map(item => ({
      ...item,
      icon: iconStore.getIcon({ icon: item.icon, size: 'large' })
    })),
    truncateFrom: 'right',
    size: 'large',
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

export const WithIcons: Story = {
  args: {
    items: [
      { text: 'Dashboard', url: '/dashboard', icon: iconStore.getIcon({ icon: 'dashboard', size: 'small' }) },
      { text: 'Reports', url: '/reports', icon: iconStore.getIcon({ icon: 'reports', size: 'small' }) },
      { text: 'Annual Report', url: '/reports/annual', icon: iconStore.getIcon({ icon: 'annual', size: 'small' }) },
    ],
    truncateFrom: 'right',
    size: 'small',
  },
};
