import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { DxButtonComponent, DxContextMenuModule } from 'devextreme-angular';
import { MeIconStoreService } from 'src/app/service/icon-store.service';
import {MeButtonDirective, MeContextMenuDirective, MeIconComponent} from '../../public-api';


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
      imports: [DxContextMenuModule, MeIconComponent],
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
} as Meta<MeContextMenuDirective | DxContextMenuModule>;

type Story = StoryObj<MeContextMenuDirective | DxContextMenuModule>;

export const Default: Story = {
  name: 'Default Menu',
  args: {
    dataSource: data,
    focusStateEnabled: true,
    selectionMode: 'multiple',
    activeStateEnabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-button meButton text="Right click Default" id="contextButtonDefault"></dx-button>
    <dx-context-menu
        meContextMenu
        target="#contextButtonDefault"
        ${argsToTemplate(args)}>
    </dx-context-menu>`
  })
};

export const SelectedItems: Story = {
  name: 'Selected Items Menu',
  args: {
    dataSource: [
      {
        text: 'Share',
        icon: 'public',
        items: [
          { icon: 'menu_book', text: 'Facebook', selected: true },
          { icon: 'single_bed', text: 'Twitter' },
        ],
      },
      { text: 'Download', icon: 'download' },
      { text: 'Add Comment', icon: 'add' },
      { text: 'Add to Favorite', icon: 'favorite', selected: true },
    ],
  },
  render: (args) => ({
    props: args,
    template: `
    <dx-button meButton text="Right click Selected" id="contextButtonSelected"></dx-button>
    <dx-context-menu
        meContextMenu
        target="#contextButtonSelected"
        ${argsToTemplate(args)}>
      <div *dxTemplate="let itemData of 'item'">
        <div class="item-template-container">
          <me-icon [icon]="itemData.icon" [size]="size"></me-icon>
          <span class="dx-menu-item-text">{{ itemData.text }}</span>
          <me-icon
            *ngIf="itemData.items"
            icon="chevron_right"
            [size]="size"
            style="margin-left: auto"
          ></me-icon>
        </div>
      </div>
    </dx-context-menu>`
  })
};
