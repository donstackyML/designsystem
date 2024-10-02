import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent, DxContextMenuModule } from 'devextreme-angular';
import { MeIconStoreService } from 'src/app/service/icon-store.service';
import { MeButtonDirective, MeContextMenuDirective } from '../../public-api';

const iconStore = new MeIconStoreService();

const data = [
  {
    text: 'Заголовок группы уровень 1',
    icon: iconStore.getIcon({ icon: 'public', size: '24' }),

    disabled: true,
    beginGroup: true,
  },

  {
    text: 'Пункт',
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
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
export default {
  title: 'Components/ContextMenu',
  decorators: [
    moduleMetadata({
      declarations: [
        MeContextMenuDirective,
        MeButtonDirective,
        DxButtonComponent,
      ],
      imports: [DxContextMenuModule],
    }),
  ],

  argTypes: {
    dataSource: {
      description: 'Данные для отображения',
      table: {
        type: {
          summary: 'Array',
        },
      },
      control: {
        type: 'object',
      },
    },
    selectionMode: {
      control: 'select',
      options: ['single', 'multiple', 'all', 'none'],
      description: 'Определяет тип выделения.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'none' },
      },
    },
  },

  args: {
    dataSource: data,
    focusStateEnabled: true,
    selectionMode: 'multiple',
    activeStateEnabled: false,
  },

  render: (args) => ({
    props: args,
    template: `
    <dx-button meButton text="Right click" id="contextButton"></dx-button>
    <dx-context-menu 
        meContextMenu 
        target="#contextButton" 
        ${argsToTemplate(args)}>
    </dx-context-menu>`,
  }),
} as Meta<MeContextMenuDirective | DxContextMenuModule>;

type Story = StoryObj<MeContextMenuDirective | DxContextMenuModule>;

export const Default: Story = {};

export const SelectedItems: Story = {
  args: {
    dataSource: [
      {
        text: 'Share',
        icon: 'globe',
        items: [{ text: 'Facebook', selected: true }, { text: 'Twitter' }],
      },
      { text: 'Download', icon: 'download' },
      { text: 'Add Comment', icon: 'add' },
      { text: 'Add to Favorite', icon: 'favorite', selected: true },
    ],
  },

  render: (args) => ({
    props: args,
    template: `
<dx-button meButton text="Right click" id="contextButton"></dx-button>
<dx-context-menu
meContextMenu
  [dataSource]="dataSource"
  target="#contextButton"
>
  <div *dxTemplate="let itemData of 'item'">
    <div class="item-template-container">
      <span
        class="material-symbols-outlined"
				innerHTML="{{ itemData.icon }}"
      ></span>
      <span class="dx-menu-item-text">{{ itemData.text }}</span>
      <span *ngIf="itemData.items" style="margin-left: auto" class="material-symbols-outlined">chevron_right</span>
    </div>
  </div>
</dx-context-menu>`,
  }),
};
