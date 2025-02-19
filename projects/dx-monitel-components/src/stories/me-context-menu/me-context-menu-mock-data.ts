import { MeIconStoreService } from '../../public-api';

const iconStore = new MeIconStoreService();

export const meContextMenuMockData = [
  {
    text: 'Заголовок группы уровень 1',
    icon: iconStore.getIcon({ icon: 'public', size: '24' }),
    disabled: true,
    beginGroup: true,
  },
  {
    text: 'Пункт',
    icon: 'add',
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
    icon: iconStore.getIcon({ icon: 'public', size: '24' }),
    disabled: true,
    beginGroup: true,
  },
  {
    text: 'Пункт',
    icon: 'add',
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
  },
  {
    text: 'Длинное название пункта',
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    beginGroup: true,
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    beginGroup: true,
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        disabled: true,
        beginGroup: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        beginGroup: true,
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            beginGroup: true,
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
          },
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),

            disabled: true,
            beginGroup: true,
          },
          {
            text: 'Пункт',
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
            icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    disabled: true,
    beginGroup: true,
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
      {
        icon: 'share',
        text: 'Twitter',
        selected: true,
      },
      {
        icon: 'share',
        text: 'Instagram',
        selected: true,
      },
      {
        icon: 'share',
        text: 'Pinterest',
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
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    items: [
      {
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        text: 'Edit',
      },
      {
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        text: 'Delete',
      },
      {
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        text: 'View',
      },
    ],
  },
  {
    text: 'Settings',
  },
];
