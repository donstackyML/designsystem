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
  {
    key: 'Prepare 2013 Financial',
    text: 'Prepare 2013 Financial',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Prepare 3013 Marketing',
    text: 'Prepare 3013 Marketing',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Update Personnel Files',
    text: 'Update Personnel Files',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Review Health',
    text: 'Review Health',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Prepare 2013 Marketing Plan',
    text: 'Prepare 2013 Marketing Plan',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
];

const dataWithHeaders = [
  {
    key: 'Header 1',
    text: 'Header 1',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
  {
    key: 'Header 2',
    text: 'Header 2',
    items: [
      'Prepare 2013 Financial',
      'Prepare 3013 Marketing',
      'Update Personnel Files',
      'Review Health ',
      'Prepare 2013 Marketing Plan',
    ],
  },
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
    image: '../../../assets/images/image.png',
    icon: 'favorites',
    description: 'Vegetables are good for you too.',
  },
  {
    name: 'Oranges',
    count: 12,
    image: '../../../assets/images/image.png',
    icon: 'favorites',
    description: 'Vegetables are good for you too.',
  },
  {
    name: 'Lemons',
    count: 15,
    image: '../../../assets/images/image.png',
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
    searchEnabled: {
      description: 'Разрешить поиск',
      control: 'select',
      options: [true, false],
    },
    allowItemDeleting: {
      description: 'Разрешить удаление элементов',
      control: 'select',
      options: [true, false],
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
    },
    disabled: {
      description: 'Отключить компонент',
      control: 'select',
      options: [true, false],
    },
    grouped: {
      discription: 'Группировать элементы',
      control: 'select',
      options: [true, false],
    },
    collapsibleGroups: {
      description: 'Сворачивать группы',
      control: 'select',
      options: [true, false],
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
  },
  render: (args) => ({
    props: args,
    template: `<dx-list meList width="436px" height="300px" ${argsToTemplate(
      args
    )}>
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

export const GroupedWithSearch: Story = {
  args: {
    dataSource: dataWithHeaders,
    searchEnabled: true,
    collapsibleGroups: true,
  },
  render: (args) => ({
    props: args,
    template: `
		<dx-list meList width="436px" height="300px" grouped="true" ${argsToTemplate(
      args
    )}>
        <dxo-item-dragging [allowReordering]="true"></dxo-item-dragging> 
				    <div *dxTemplate="let item of 'data'">
      <div>{{ item.key }}</div>
    </div>  
    </dx-list>`,
  }),
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
      <p class="me-title-header1" style="margin: 0">{{ group.key }}</p>
      <p class="me-text-body2" style="margin: 0">{{ group.description }}</p>
    </div>
    </dx-list>`,
  }),
};

export const ListDescription: Story = {
  args: {
    dataSource: itemsWithImageAndDescription,
    displayExpr: 'name',
    allowItemDeleting: true,
  },
  render: (args) => ({
    props: args,
    template: `
		<dx-list meList width="436px" ${argsToTemplate(args)}>
		<dxo-item-dragging [allowReordering]="true"></dxo-item-dragging>
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
