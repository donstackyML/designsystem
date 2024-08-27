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
    template: 'menu-title',
    disabled: true,
  },

  {
    text: 'Пункт',
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        template: 'menu-title',
        disabled: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
        template: 'menu-title',
        disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
        template: 'menu-title',
        disabled: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
        template: 'menu-title',
        disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
    template: 'menu-title',
    disabled: true,
  },

  {
    text: 'Пункт',
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        template: 'menu-title',
        disabled: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
        template: 'menu-title',
        disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
    text: 'Длинное название пункта показывает ограничение максимальной ширины и выравнивание элементов',
    icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
    beginGroup: true,
    items: [
      {
        text: 'Заголовок группы уровень 2',
        icon: iconStore.getIcon({ icon: 'public', size: '24' }),
        template: 'menu-title',
        disabled: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
        template: 'menu-title',
        disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
        template: 'menu-title',
        disabled: true,
      },
      {
        text: 'Пункт',
        icon: iconStore.getIcon({ icon: 'folder', size: '24' }),
        items: [
          {
            text: 'Заголовок группы уровень 3',
            icon: iconStore.getIcon({ icon: 'public', size: '24' }),
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
        template: 'menu-title',
        disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
            template: 'menu-title',
            disabled: true,
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
  },
];
export default {
  title: 'Components/ContextMenu',
  decorators: [
    moduleMetadata({
      declarations: [
        // DxContextMenuComponent,
        MeContextMenuDirective,
        MeButtonDirective,
        DxButtonComponent,
      ],
      imports: [DxContextMenuModule],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `
    <dx-button meButton text="Right click" id="contextButton"></dx-button>
    <dx-context-menu 
        meContextMenu 
        target="#contextButton" 
        ${argsToTemplate(args)}>
        <div *dxTemplate="let item of 'menu-title'">
        <div class="me-menu-title">
            <div *ngIf="item.icon" meIcon [icon]="item.icon"></div>
            <div class="me-title-header2">{{ item.text }}</div>
        </div>
        </div>
    </dx-context-menu>`,
  }),
} as Meta<MeContextMenuDirective | DxContextMenuModule>;

type Story = StoryObj<MeContextMenuDirective | DxContextMenuModule>;

export const Default: Story = {
  args: {
    dataSource: data,
  },
};
