import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxTreeViewComponent } from 'devextreme-angular';
import { MeIconStoreService } from 'src/app/service/icon-store.service';
import { MeTreeViewDirective } from '../../public-api';

const iconStore = new MeIconStoreService();

const data = [
  {
    id: '1',
    text: 'Stores',
    expanded: true,
    icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
    items: [
      {
        id: '1_1',
        text: 'Super Mart of the West',
        expanded: true,
        icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
        items: [
          {
            id: '1_1_1',
            text: 'Video Players',
            icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
            items: [
              {
                id: '1_1_1_1',
                text: 'HD Video Player',
              },
              {
                id: '1_1_1_2',
                text: 'SuperHD Video Player',
              },
            ],
          },
          {
            id: '1_1_2',
            text: 'Televisions',
            expanded: true,
            icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
            items: [
              {
                id: '1_1_2_1',
                text: 'SuperLCD 42',
              },
              {
                id: '1_1_2_2',
                text: 'SuperLED 42',
              },
              {
                id: '1_1_2_3',
                text: 'SuperLED 50',
              },
              {
                id: '1_1_2_4',
                text: 'SuperLCD 55',
              },
              {
                id: '1_1_2_5',
                text: 'SuperLCD 70',
              },
            ],
          },
          {
            id: '1_1_4',
            text: 'Projectors',
            icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
            items: [
              {
                id: '1_1_4_1',
                text: 'Projector Plus',
              },
              {
                id: '1_1_4_2',
                text: 'Projector PlusHD',
              },
            ],
          },
        ],
      },
      {
        id: '1_2',
        text: 'Braeburn',
        icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
        items: [
          {
            id: '1_2_1',
            text: 'Video Players',
            icon: iconStore.getIcon({ icon: 'folder', size: 'size' }),
            items: [
              {
                id: '1_2_1_1',
                text: 'HD Video Player',
              },
              {
                id: '1_2_1_2',
                text: 'SuperHD Video Player',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default {
  title: 'Components/TreeView',
  decorators: [
    moduleMetadata({
      declarations: [MeTreeViewDirective, DxTreeViewComponent],
    }),
  ],
  argTypes: {
    dataSource: {
      description: 'Определяет ветви в дереве.',
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      description: 'Принимает размер `TreeView` и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'large' },
      },
    },
    activeStateEnabled: {
      control: 'select',
      options: [true, false],
      description: 'Определяет состояние при нажатии на элементы `TreeView`.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
    },
    disabled: {
      control: 'select',
      options: [true, false],
      description: 'Отключает `TreeView` и его элементы.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    showCheckBoxesMode: {
      control: 'select',
      options: ['normal', 'selectAll', 'none'],
      description:
        'Определяет режим отображения чекбоксов `TreeView` и его элементов.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'normal' },
      },
    },
    focusStateEnabled: {
      control: 'select',
      options: [true, false],
      description: 'Определяет состояние `focused` `TreeView` и его элементов.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    dataSource: data,
    size: 'large',
    activeStateEnabled: true,
    disabled: false,
    showCheckBoxesMode: 'normal',
    focusStateEnabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<dx-tree-view meTreeView ${argsToTemplate(
      args
    )}></dx-tree-view>`,
  }),
} as Meta<MeTreeViewDirective | DxTreeViewComponent>;

type Story = StoryObj<MeTreeViewDirective | DxTreeViewComponent>;

export const Default: Story = {};
