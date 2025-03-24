import { MeIconStoreService } from '../../public-api';

const iconStore = new MeIconStoreService();

export const meContextMenuMockData = [
  {
    text: 'Заголовок группы уровень 1',
    icon: 'bookmark',
    disabled: true,
    beginGroup: true,
  },
  {
    text: 'Пункт',
    icon: 'add',
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: 'Пункт',
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: 'Заголовок группы уровень 1',
    icon: 'bookmark',
    disabled: true,
    beginGroup: true,
  },
  {
    text: 'Пункт',
    icon: 'add',
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: 'Пункт',
    icon: 'folder',
  },
  {
    text: 'Длинное название пункта',
    icon: 'folder',
    beginGroup: true,
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
    ],
  },

  {
    text: 'Пункт',
    icon: 'folder',
    beginGroup: true,
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Пункт',
        icon: 'folder',
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
      {
        text: 'Заголовок группы уровень 2',
        icon: 'bookmark',
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
      },
      {
        text: 'Пункт',
        icon: 'folder',
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Пункт',
            icon: 'folder',
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: 'bookmark',

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
          {
            text: 'Пункт',
            icon: 'folder',
            items: [
              {
                text: 'Пункт',
                icon: iconStore.getIcon({
                  icon: 'folder',
                  size: '24',
                }),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    text: 'Пункт',
    icon: 'folder',
    disabled: true,
  },
];

export const meContextMenuMockDataForTemplateExample = [
  {
    text: 'Share',
    icon: 'public',
    items: [
      { icon: 'menu_book', text: 'Facebook' },
      { icon: 'single_bed', text: 'Twitter' },
      { icon: 'camera_alt', text: 'Instagram' },
      { icon: 'pin', text: 'Pinterest' },
    ],
  },
  { text: 'Download', icon: 'download' },
  { text: 'Add Comment', icon: 'add' },
  { text: 'Add to Favorite', icon: 'favorite' },
  {
    text: 'More Options',
    icon: 'more_horiz',
    items: [
      { icon: 'edit', text: 'Edit' },
      { icon: 'delete', text: 'Delete' },
      { icon: 'visibility', text: 'View' },
    ],
  },
  { text: 'Settings', icon: 'settings' },
];

export const meContextMenuMockDataWithSelectedItems = [
  {
    text: 'Share',
    icon: 'share',
    items: [
      {
        icon: 'share',
        text: 'Facebook',
        selected: true,
      },
    ],
  },
  {
    text: 'Download',
    icon: iconStore.getIcon({ icon: 'download', size: '24' }),
  },
  {
    text: 'Add Comment',
    icon: iconStore.getIcon({ icon: 'add', size: '24' }),
  },
  {
    text: 'Add to Favorite',
    selected: true,
  },
  {
    text: 'More Options',
    icon: 'folder',
    items: [
      {
        icon: 'folder',
        text: 'Edit',
      },
      {
        icon: 'folder',
        text: 'Delete',
      },
      {
        icon: 'folder',
        text: 'View',
      },
    ],
  },
  {
    text: 'Settings',
  },
];
