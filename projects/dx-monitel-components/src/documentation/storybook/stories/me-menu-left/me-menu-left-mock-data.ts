import { MeMenuLeftItem } from '../../../../lib/components/me-menu-left/me-menu-left-item.component';

export const meMenuLeftDefaultItems: MeMenuLeftItem[] = [
  {
    id: 'tasks',
    text: 'ЗадачиЗадачиЗадачиЗадачиЗадачиЗадачиЗадачиЗадачиЗадачиЗадачиЗадачиЗадачи',
    icon: 'description_x20',
    badge: 3,
    expanded: true,
    items: [
      {
        id: 'inbox',
        text: 'Входящие',
        icon: 'mail_x20',
        badge: 2,
      },
      {
        id: 'inprogress',
        text: 'В работе',
        icon: 'draft_x20',
        badge: 1,
      },
    ],
  },
  {
    id: 'path',
    text: '/',
    icon: 'folder_open_x20',
    expanded: true,
    items: [
      {
        id: 'monitel',
        text: 'Monitel',
        icon: 'folder_open_x20',
        items: [
          {
            id: 'atp',
            text: 'АТП',
            icon: 'folder_open_x20',
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
    icon: 'download_x20',
    badge: 5,
  },
  {
    id: 'settings',
    text: 'Настройки',
    icon: 'settings_x20',
  },
];

export const meMenuLeftBottomItems: MeMenuLeftItem[] = [
  {
    id: 'downloads',
    text: 'Загрузки',
    icon: 'download_x20',
    badge: 4,
  },
  {
    id: 'settings',
    text: 'Настройки',
    icon: 'settings_x20',
  },
];
