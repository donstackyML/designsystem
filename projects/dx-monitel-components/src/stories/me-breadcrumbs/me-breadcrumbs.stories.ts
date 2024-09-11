import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MeBreadcrumbsComponent } from "../../public-api";
import { DxMenuModule } from 'devextreme-angular/ui/menu';

export default {
  title: 'Components/Breadcrumbs',
  component: MeBreadcrumbsComponent,
  decorators: [
    moduleMetadata({
      imports: [MeBreadcrumbsComponent, DxMenuModule],
    }),
  ],
  argTypes: {
    items: { control: 'object' },
    itemClick: { action: 'itemClicked' },
  },
} as Meta<MeBreadcrumbsComponent>;

type Story = StoryObj<MeBreadcrumbsComponent>;

const sampleItems = [
  { text: 'Главная', url: '/', icon: 'home' },
  { text: 'Каталог', url: '/catalog', icon: 'folder' },
  {
    text: 'Электроника',
    url: '/catalog/electronics',
    icon: 'product',
    items: [
      { text: 'Телефоны', url: '/catalog/electronics/phones' },
      { text: 'Компьютеры', url: '/catalog/electronics/computers' },
    ]
  },
  { text: 'Смартфоны', url: '/catalog/electronics/smartphones', icon: 'tel' },
  { text: 'iPhone 12', url: '/catalog/electronics/smartphones/iphone-12' },
  { text: 'Характеристики', url: '/catalog/electronics/smartphones/iphone-12/specs', icon: 'detailslayout' },
  { text: 'Отзывы', url: '/catalog/electronics/smartphones/iphone-12/reviews', icon: 'comment' },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      ...sampleItems,
      { text: 'Дополнительно 1', url: '/extra1', icon: 'add' },
      { text: 'Дополнительно 2', url: '/extra2', icon: 'add' },
      { text: 'Дополнительно 3', url: '/extra3', icon: 'add' },
    ],
  },
};

export const WithNestedItems: Story = {
  args: {
    items: [
      { text: 'Уровень 1', url: '/level1', icon: 'folder',
        items: [
          { text: 'Подуровень 1.1', url: '/level1/sublevel1' },
          { text: 'Подуровень 1.2', url: '/level1/sublevel2' },
        ]
      },
      { text: 'Уровень 2', url: '/level2', icon: 'folder',
        items: [
          { text: 'Подуровень 2.1', url: '/level2/sublevel1' },
          { text: 'Подуровень 2.2', url: '/level2/sublevel2' },
        ]
      },
      { text: 'Уровень 3', url: '/level3', icon: 'folder' },
    ],
  },
};
