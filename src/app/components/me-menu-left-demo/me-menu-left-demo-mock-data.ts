import { MeMenuLeftItem } from 'projects/dx-monitel-components/src/lib/components/me-menu-left/me-menu-left-item.component';

export const meMenuLeftDefaultItems: MeMenuLeftItem[] = [
  {
    id: 'tasks',
    text: 'Задачи',
    icon: 'task',
    badge: 3,
    expanded: true,
    items: [
      {
        id: 'inbox',
        text: 'Входящие',
        icon: 'folder',
        badge: 2,
      },
      {
        id: 'inprogress',
        text: 'В работе',
        icon: 'folder',
        badge: 1,
      },
    ],
  },
  {
    id: 'path',
    text: '/',
    icon: 'folder',
    expanded: true,
    items: [
      {
        id: 'monitel',
        text: 'Monitel',
        icon: 'folder',
        items: [
          {
            id: 'atp',
            text: 'АТП',
            icon: 'folder',
            items: [
              {
                id: 'active',
                text: 'Активные',
                badge: 5,
              },
              {
                id: 'archive',
                text: 'Архив',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'downloads',
    text: 'Загрузки',
    icon: 'download',
    badge: 5,
  },
  {
    id: 'settings',
    text: 'Настройки',
    icon: 'settings',
  },
];

export const meMenuLeftBottomItems: MeMenuLeftItem[] = [
  {
    id: 'downloads',
    text: 'Загрузки',
    icon: 'download',
    badge: 4,
  },
  {
    id: 'settings',
    text: 'Настройки',
    icon: 'settings',
  },
];
