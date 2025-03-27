import { MeIconStoreService } from 'src/app/service/icon-store.service';

const iconStore = new MeIconStoreService();

export const meTreeViewMockData = [
  {
    id: '1',
    text: 'Label',
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    items: [
      {
        id: '1_1',
        text: 'Label',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '1_1_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '1_1_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '1_1_3',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
      {
        id: '1_2',
        text: 'Label',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '1_2_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '1_2_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '1_2_3',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
      {
        id: '1_3',
        text: 'Label',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '1_3_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '1_3_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '1_3_3',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
    ],
  },
  {
    id: '2',
    text: 'Label',
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    disabled: true,
    items: [
      {
        id: '2_1',
        text: 'Label',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '2_1_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '2_1_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '2_1_3',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
      {
        id: '2_2',
        text: 'Label',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '2_2_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '2_2_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '2_2_3',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
      {
        id: '2_3',
        text: 'Label',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '2_3_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '2_3_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '2_3_3',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
    ],
  },
  {
    id: '3',
    text: 'Длинное название пункта показывает ограничение максимальной ширины и выравнивание элементов',
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    items: [
      {
        id: '3_1',
        text: 'Label',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '3_1_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '3_1_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '3_1_3',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
      {
        id: '3_2',
        text: 'Label',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '3_2_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '3_2_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '3_2_3',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
      {
        id: '3_3',
        text: 'Длинное название пункта показывает ограничение максимальной ширины и выравнивание элементов',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            id: '3_3_1',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '3_3_2',
            text: 'Label',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            id: '3_3_3',
            text: 'Длинное название пункта показывает ограничение максимальной ширины и выравнивание элементов',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
        ],
      },
    ],
  },
];
