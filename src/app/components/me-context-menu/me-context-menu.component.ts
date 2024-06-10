import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { dxContextMenuItem } from 'devextreme/ui/context_menu';
import { MeIconStoreService } from 'src/app/service/icon-store.service';

@Component({
  selector: 'context-menu',
  templateUrl: './me-context-menu.component.html',
  styleUrls: ['./me-context-menu.component.css'],
})
export class MeContextMenuComponent implements OnInit {
  // itemThirdLevel = {
  //   text: 'Пункт',
  //   icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  // };
  // itemSecondLevel = {
  //   text: 'Пункт',
  //   icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //   items: [
  //     {
  //       text: 'Пункт',
  //       icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //     },
  //     {
  //       text: 'Пункт',
  //       icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //     },
  //     {
  //       text: 'Пункт',
  //       icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //     },
  //   ],
  // };
  // itemFirstLevel = {
  //   text: 'Пункт',
  //   icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //   beginGroup: true,
  //   items: [
  //     {
  //       text: 'Пункт',
  //       icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //       items: [
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //       ],
  //     },
  //     {
  //       text: 'Пункт',
  //       icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //       items: [
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //       ],
  //     },
  //     {
  //       text: 'Пункт',
  //       icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //       items: [
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //       ],
  //     },
  //     {
  //       text: 'Пункт',
  //       icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //       items: [
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //       ],
  //     },
  //     {
  //       text: 'Пункт',
  //       icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //       disabled: true,
  //       items: [
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //         {
  //           text: 'Пункт',
  //           icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
  //         },
  //       ],
  //     },
  //   ],
  // };
  contextMenuItems: dxContextMenuItem[] = [
    {
      text: 'Заголовок',
      icon: this.iconService.getIcon({ icon: 'public', size: '24' }),
      template: 'menu-title',
      disabled: true,
    },
    {
      text: 'С переполнением',
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
      beginGroup: true,
      items: [
        {
          text: 'Пункт с переполнением Пункт с переполнением Пункт с переполнением Пункт с переполнением Пункт с переполнением Пункт с переполнением Пункт с переполнением Пункт с переполнением',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
      ],
    },
    {
      text: 'Пункт',
      icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
      disabled: true,
      beginGroup: true,
      items: [
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
        {
          text: 'Пункт',
          icon: this.iconService.getIcon({ icon: 'folder', size: '24' }),
          items: [
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
          ],
        },
      ],
    },
  ];
  // items: Record<any, unknown>[];

  constructor(
    private iconService: MeIconStoreService,
    public domSanitizer: DomSanitizer
  ) {
    // this.items = [
    //   {
    //     text: 'Share',
    //     items: [{ text: 'Facebook' }, { text: 'Twitter' }],
    //   },
    //   { text: 'Download' },
    //   { text: 'Comment' },
    //   { text: 'Favorite' },
    // ];
  }

  ngOnInit(): void {}
}
