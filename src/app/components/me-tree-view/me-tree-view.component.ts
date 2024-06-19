import { Component } from '@angular/core';
import { MeIconStoreService } from 'src/app/service/icon-store.service';

@Component({
  selector: 'me-tree-view',
  templateUrl: './me-tree-view.component.html',
  styleUrls: ['./me-tree-view.component.css'],
})
export class MeTreeViewComponent {
  dataSource = [
    {
      id: '1',
      name: 'Label',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          id: '1_1',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '1_1_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '1_1_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '1_1_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
        {
          id: '1_2',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '1_2_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '1_2_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '1_2_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
        {
          id: '1_3',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '1_3_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '1_3_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '1_3_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Label',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          id: '2_1',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '2_1_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '2_1_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '2_1_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
        {
          id: '2_2',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '2_2_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '2_2_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '2_2_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
        {
          id: '2_3',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '2_3_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '2_3_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '2_3_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: 'Label',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          id: '3_1',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '3_1_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '3_1_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '3_1_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
        {
          id: '3_2',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '3_2_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '3_2_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '3_2_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
        {
          id: '3_3',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '3_3_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '3_3_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
            {
              id: '3_3_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
            },
          ],
        },
      ],
    },
  ];

  dataSourceSmall = [
    {
      id: '1',
      name: 'Label',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
      items: [
        {
          id: '1_1',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '1_1_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '1_1_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '1_1_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
        {
          id: '1_2',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '1_2_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '1_2_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '1_2_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
        {
          id: '1_3',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '1_3_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '1_3_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '1_3_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Label',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
      items: [
        {
          id: '2_1',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '2_1_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '2_1_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '2_1_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
        {
          id: '2_2',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '2_2_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '2_2_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '2_2_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
        {
          id: '2_3',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '2_3_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '2_3_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '2_3_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: 'Label',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
      items: [
        {
          id: '3_1',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '3_1_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '3_1_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '3_1_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
        {
          id: '3_2',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '3_2_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '3_2_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '3_2_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
        {
          id: '3_3',
          name: 'Label',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '3_3_1',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '3_3_2',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
            {
              id: '3_3_3',
              name: 'Label',
              icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
            },
          ],
        },
      ],
    },
  ];

  constructor(private iconStore: MeIconStoreService) {}
}
