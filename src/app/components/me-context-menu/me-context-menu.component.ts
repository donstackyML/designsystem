import { Component, OnInit } from '@angular/core';
import { dxContextMenuItem } from 'devextreme/ui/context_menu';
import { MeIconStoreService } from 'src/app/service/icon-store.service';

@Component({
  selector: 'context-menu',
  templateUrl: './me-context-menu.component.html',
  styleUrls: ['./me-context-menu.component.css'],
})
export class MeContextMenuComponent {
  contextMenuItems: dxContextMenuItem[] = [
    {
      text: 'Заголовок группы уровень 1',
      icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
      template: 'menu-title',
      disabled: true,
    },

    {
      text: 'Пункт',
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          text: 'Заголовок группы уровень 2',
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          beginGroup: true,
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          text: 'Заголовок группы уровень 2',
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          beginGroup: true,
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
      icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
      template: 'menu-title',
      disabled: true,
    },

    {
      text: 'Пункт',
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          text: 'Заголовок группы уровень 2',
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          beginGroup: true,
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
    },

    {
      text: 'Длинное название пункта показывает ограничение максимальной ширины и выравнивание элементов',
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
      beginGroup: true,
      items: [
        {
          text: 'Заголовок группы уровень 2',
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          beginGroup: true,
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
      beginGroup: true,
      items: [
        {
          text: 'Заголовок группы уровень 2',
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
          icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
          template: 'menu-title',
          disabled: true,
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          beginGroup: true,
          items: [
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              beginGroup: true,
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              text: 'Заголовок группы уровень 3',
              icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
              template: 'menu-title',
              disabled: true,
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
                    icon: 'folder',
                    size: '24',
                  }),
                },
              ],
            },
            {
              text: 'Пункт',
              icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
              items: [
                {
                  text: 'Пункт',
                  icon: this.iconService.getIcon({
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
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
      disabled: true,
    },
  ];

  constructor(private iconService: MeIconStoreService) {}
}
