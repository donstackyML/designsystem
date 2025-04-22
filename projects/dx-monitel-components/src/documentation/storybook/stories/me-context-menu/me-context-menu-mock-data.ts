import { MeIconStoreService } from '../../../../public-api';

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
        text: 'Пункт 1',
        icon: 'folder',
      },
      {
        text: 'Пункт 2',
        icon: 'folder',
      },
      {
        text: 'Пункт 3',
        icon: 'folder',
      },
      {
        text: 'Пункт 4',
        icon: 'folder',
      },
      {
        text: 'Пункт 5',
        icon: 'folder',
      },
      {
        text: 'Пункт 6',
        icon: 'folder',
      },
      {
        text: 'Пункт 7',
        icon: 'folder',
      },
      {
        text: 'Пункт 8',
        icon: 'folder',
      },
      {
        text: 'Пункт 9',
        icon: 'folder',
      },
      {
        text: 'Пункт 10',
        icon: 'folder',
      },
      {
        text: 'Пункт 11',
        icon: 'folder',
      },
      {
        text: 'Пункт 12',
        icon: 'folder',
      },
      {
        text: 'Пункт 13',
        icon: 'folder',
      },
      {
        text: 'Пункт ',
        icon: 'folder',
      },
      {
        text: 'Пункт 5',
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

export const meContextMenuMockDataWithDividers = [
  {
    text: 'Electronics',
    hasDivider: true,
    items: [
      { text: 'Computers', hasDivider: true },
      { text: 'Phones', hasDivider: false },
      { text: 'Tablets', hasDivider: false },
      { text: 'Cameras', hasDivider: true },
      { text: 'Accessories', hasDivider: true },
    ],
  },
  {
    text: 'Entertainment',
    hasDivider: false,
    items: [
      { text: 'Films & Music', hasDivider: true },
      { text: 'Games & Toys', hasDivider: false },
      { text: 'Books', hasDivider: true },
      { text: 'Streaming Services', hasDivider: false },
      { text: 'Board Games', hasDivider: true },
    ],
  },
  {
    text: 'Home Appliances',
    items: [
      { text: 'Kitchen', hasDivider: true },
      { text: 'Laundry', hasDivider: false },
      { text: 'Cleaning', hasDivider: false },
      { text: 'Smart Home', hasDivider: false },
      { text: 'Lighting', hasDivider: true },
      { text: 'Lighting', hasDivider: true },
      { text: 'Lighting', hasDivider: true },
      { text: 'Lighting', hasDivider: false },
    ],
  },
];
