import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeBreadcrumbsComponent } from "../../public-api";
import { DxButtonModule } from 'devextreme-angular';
import { MeIconComponent } from "../../public-api";

export default {
  title: 'Components/Breadcrumbs',
  component: MeBreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [MeBreadcrumbsComponent, DxButtonModule, MeIconComponent],
    }),
  ],
  argTypes: {
    items: { control: 'object' },
    itemClick: { action: 'itemClicked' },
  },
} as Meta<MeBreadcrumbsComponent>;

type Story = StoryObj<MeBreadcrumbsComponent>;

const sampleItems = [
  { label: 'Главная', url: '/', icon: 'globe' },
  { label: 'Каталог', url: '/catalog', icon: 'globe' },
  { label: 'Электроника', url: '/catalog/electronics', icon: 'globe' },
  { label: 'Смартфоны', url: '/catalog/electronics/smartphones', icon: 'globe' },
  { label: 'iPhone 12', url: '/catalog/electronics/smartphones/iphone-12' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const WithoutIcons: Story = {
  args: {
    items: sampleItems.map(({ label, url }) => ({ label, url })),
  },
};

export const SingleItem: Story = {
  args: {
    items: sampleItems.slice(-1),
  },
};

export const TwoItems: Story = {
  args: {
    items: sampleItems.slice(-2),
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      ...sampleItems,
      { label: 'Характеристики', url: '/catalog/electronics/smartphones/iphone-12/specs', icon: 'globe' },
      { label: 'Отзывы', url: '/catalog/electronics/smartphones/iphone-12/reviews', icon: 'globe' },
    ],
  },
};

export const CustomIcons: Story = {
  args: {
    items: [
      { label: 'Проекты', url: '/projects', icon: 'globe' },
      { label: 'Разработка', url: '/projects/development', icon: 'globe' },
      { label: 'Веб-приложения', url: '/projects/development/web', icon: 'globe' },
      { label: 'E-commerce', url: '/projects/development/web/ecommerce', icon: 'globe' },
    ],
  },
};
