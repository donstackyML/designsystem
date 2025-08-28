import { MeMenuLeftItem } from 'projects/dx-monitel-components/src/lib/components/me-menu-left/me-menu-left-item.component';

export const meMenuLeftDefaultItems: MeMenuLeftItem[] = [
  {
    id: 'tasks',
    text: 'Задачи',
    icon: 'assignment_x24',
    badge: 3,
    expanded: true,
    items: [
      {
        id: 'inbox',
        text: 'Входящие',
        icon: 'folder_open_x24',
        badge: 2,
      },
      {
        id: 'inprogress',
        text: 'В работе',
        icon: 'folder_open_x24',
        badge: 1,
      },
    ],
  },
  {
    id: 'tasks',
    text: 'Текст',
    badge: 3,
    expanded: true,
  },
  {
    id: 'path',
    text: '/',
    icon: 'folder_open_x24',
    expanded: true,
    items: [
      {
        id: 'monitel',
        text: 'Monitel',
        icon: 'folder_open_x24',
        items: [
          {
            id: 'atp',
            text: 'АТП',
            icon: 'folder_open_x24',
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
    icon: 'download_x24',
    badge: 5,
  },
  {
    id: 'settings',
    text: 'Настройки',
    icon: 'settings_x24',
  },
];

export const meMenuLeftBottomItems: MeMenuLeftItem[] = [
  {
    id: 'downloads',
    text: 'Загрузки',
    icon: 'download_x24',
    badge: 4,
  },
  {
    id: 'settings',
    text: 'Настройки',
    icon: 'settings_x24',
  },
];
