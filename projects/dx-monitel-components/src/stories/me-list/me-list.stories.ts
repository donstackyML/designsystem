import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxListModule } from 'devextreme-angular';
import { MeIconStoreService } from 'src/app/service/icon-store.service';
import { MeListDirective } from '../../public-api';

const iconStore = new MeIconStoreService();
// iconStore.getIcon({ icon: 'folder', size: 'size' }),

const data = [
  'Prepare 2013 Financial',
  'Prepare 3013 Marketing',
  'Update Personnel Files',
  'Review Health ',
];

const fruitsVegetables = [
  {
    key: 'Fruits',
    description: 'fruits desc',
    items: [
      { name: 'Apples', count: 10 },
      { name: 'Oranges', count: 12 },
      { name: 'Lemons', count: 15 },
    ],
  },
  {
    key: 'Vegetables',
    description: 'vegetables desc',
    items: [
      { name: 'Potatoes', count: 5 },
      { name: 'Tomatoes', count: 9 },
      { name: 'Turnips', count: 8 },
    ],
  },
];

const itemsWithImageAndDescription = [
  {
    name: 'Apples',
    count: 10,
    image: './images/image.png',
    icon: 'favorites',
    description: 'Vegetables are good for you too.',
  },
  {
    name: 'Oranges',
    count: 12,
    image: './images/image.png',
    icon: 'favorites',
    description: 'Vegetables are good for you too.',
  },
  {
    name: 'Lemons',
    count: 15,
    image: './images/image.png',
    icon: 'favorites',
    description: 'Vegetables are good for you too.',
  },
];

const iconList = [
  {
    name: 'Apples',
    count: 10,
    icon: iconStore.getIcon({ icon: 'check', size: '24' }),
  },
  {
    name: 'Oranges',
    count: 10,
    icon: iconStore.getIcon({ icon: 'check', size: '24' }),
  },
  {
    name: 'Lemons',
    count: 10,
    icon: iconStore.getIcon({ icon: 'check', size: '24' }),
  },
];

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
    },
    selectionMode: {
      table: {
        disable: true,
      },
    },
    showSelectionControls: {
      table: {
        disable: true,
      },
    },
    allowItemDeleting: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `<dx-list meList width="436px" ${argsToTemplate(args)}>
        <dxo-item-dragging [allowReordering]="true"></dxo-item-dragging>   
    </dx-list>`,
  }),
} as Meta<MeListDirective | DxListModule>;

type Story = StoryObj<MeListDirective | DxListModule>;

export const Default: Story = {
  args: {
    dataSource: data,
    selectionMode: 'all',
    showSelectionControls: true,
    allowItemDeleting: true,
  },
};

export const HeaderDescription: Story = {
  args: {
    dataSource: fruitsVegetables,
    grouped: true,
    displayExpr: 'name',
    searchExpr: 'name',
  },
  render: (args) => ({
    props: args,
    template: `<dx-list meList width="436px" ${argsToTemplate(args)}>
    <div *dxTemplate="let group of 'group'">
      <p class="me-title-header2" style="margin: 0">{{ group.key }}</p>
      <p class="me-text-caption" style="margin: 0">{{ group.description }}</p>
    </div>
    </dx-list>`,
  }),
};

export const ListDescription: Story = {
  args: {
    dataSource: itemsWithImageAndDescription,
    displayExpr: 'name',
  },
  render: (args) => ({
    props: args,
    template: `<dx-list meList width="436px" ${argsToTemplate(args)}>
    <div *dxTemplate="let item of 'item'">
      <div class="me-list-item-content">
        <img alt="{{ item.name }}" src="{{ item.image }}" />
        <div>
          <div class="me-text-body2">{{ item.name }}</div>
          <div class="me-text-caption">{{ item.description }}</div>
        </div>
      </div>
    </div>   
</dx-list>`,
  }),
};

export const IconList: Story = {
  args: {
    dataSource: iconList,
    displayExpr: 'name',
  },
};

export const MoreContent: Story = {
  args: {
    dataSource: itemsWithImageAndDescription,
    displayExpr: 'name',
  },
  render: (args) => ({
    props: args,
    template: `<dx-list meList width="436px" ${argsToTemplate(args)}>
    <div *dxTemplate="let item of 'item'">
      <div class="me-list-item-content">
        <img alt="{{ item.name }}" src="{{ item.image }}" />
        <div>
          <div class="me-text-body2">{{ item.name }}</div>
          <div class="me-text-caption">{{ item.description }}</div>
        </div>
        <div class="me-list-item-more">More</div>
      </div>
    </div>
</dx-list>`,
  }),
};
