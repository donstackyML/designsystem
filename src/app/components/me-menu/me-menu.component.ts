import { Component } from '@angular/core';
import { ValueChangedEvent } from 'devextreme/ui/check_box';
import { MeIconStoreService } from 'src/app/service/icon-store.service';

@Component({
  selector: 'me-menu',
  templateUrl: './me-menu.component.html',
  styleUrls: ['./me-menu.component.css'],
})
export class MeMenuComponent {
  toggleAdaptivityS: boolean = false;
  toggleAdaptivityL: boolean = false;

  dataSource = [
    {
      id: '1',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          id: '1_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '1_1_1',
              name: 'Пункт',
            },
            {
              id: '1_1_2',
              name: 'Пункт',
            },
            {
              id: '1_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '1_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '1_2_1',
              name: 'Пункт',
            },
            {
              id: '1_2_2',
              name: 'Пункт',
            },
            {
              id: '1_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '1_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '1_3_1',
              name: 'Пункт',
            },
            {
              id: '1_3_2',
              name: 'Пункт',
            },
            {
              id: '1_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          id: '2_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '2_1_1',
              name: 'Пункт',
            },
            {
              id: '2_1_2',
              name: 'Пункт',
            },
            {
              id: '2_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '2_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '2_2_1',
              name: 'Пункт',
            },
            {
              id: '2_2_2',
              name: 'Пункт',
            },
            {
              id: '2_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '2_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '2_3_1',
              name: 'Пункт',
            },
            {
              id: '2_3_2',
              name: 'Пункт',
            },
            {
              id: '2_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          id: '3_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '3_1_1',
              name: 'Пункт',
            },
            {
              id: '3_1_2',
              name: 'Пункт',
            },
            {
              id: '3_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '3_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '3_2_1',
              name: 'Пункт',
            },
            {
              id: '3_2_2',
              name: 'Пункт',
            },
            {
              id: '3_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '3_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '3_3_1',
              name: 'Пункт',
            },
            {
              id: '3_3_2',
              name: 'Пункт',
            },
            {
              id: '3_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
      disabled: true,
      items: [
        {
          id: '4_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '4_1_1',
              name: 'Пункт',
            },
            {
              id: '4_1_2',
              name: 'Пункт',
            },
            {
              id: '4_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '4_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '4_2_1',
              name: 'Пункт',
            },
            {
              id: '4_2_2',
              name: 'Пункт',
            },
            {
              id: '4_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '4_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '4_3_1',
              name: 'Пункт',
            },
            {
              id: '4_3_2',
              name: 'Пункт',
            },
            {
              id: '4_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
    {
      id: '5',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
      items: [
        {
          id: '5_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '5_1_1',
              name: 'Пункт',
            },
            {
              id: '5_1_2',
              name: 'Пункт',
            },
            {
              id: '5_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '5_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '5_2_1',
              name: 'Пункт',
            },
            {
              id: '5_2_2',
              name: 'Пункт',
            },
            {
              id: '5_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '5_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '24' }),
          items: [
            {
              id: '5_3_1',
              name: 'Пункт',
            },
            {
              id: '5_3_2',
              name: 'Пункт',
            },
            {
              id: '5_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
  ];

  dataSourceSmall = [
    {
      id: '1',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
      items: [
        {
          id: '1_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '1_1_1',
              name: 'Пункт',
            },
            {
              id: '1_1_2',
              name: 'Пункт',
            },
            {
              id: '1_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '1_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '1_2_1',
              name: 'Пункт',
            },
            {
              id: '1_2_2',
              name: 'Пункт',
            },
            {
              id: '1_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '1_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '1_3_1',
              name: 'Пункт',
            },
            {
              id: '1_3_2',
              name: 'Пункт',
            },
            {
              id: '1_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
      items: [
        {
          id: '2_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '2_1_1',
              name: 'Пункт',
            },
            {
              id: '2_1_2',
              name: 'Пункт',
            },
            {
              id: '2_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '2_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '2_2_1',
              name: 'Пункт',
            },
            {
              id: '2_2_2',
              name: 'Пункт',
            },
            {
              id: '2_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '2_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '2_3_1',
              name: 'Пункт',
            },
            {
              id: '2_3_2',
              name: 'Пункт',
            },
            {
              id: '2_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
      items: [
        {
          id: '3_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '3_1_1',
              name: 'Пункт',
            },
            {
              id: '3_1_2',
              name: 'Пункт',
            },
            {
              id: '3_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '3_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '3_2_1',
              name: 'Пункт',
            },
            {
              id: '3_2_2',
              name: 'Пункт',
            },
            {
              id: '3_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '3_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '3_3_1',
              name: 'Пункт',
            },
            {
              id: '3_3_2',
              name: 'Пункт',
            },
            {
              id: '3_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
    {
      id: '4',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
      disabled: true,
      items: [
        {
          id: '4_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '4_1_1',
              name: 'Пункт',
            },
            {
              id: '4_1_2',
              name: 'Пункт',
            },
            {
              id: '4_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '4_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '4_2_1',
              name: 'Пункт',
            },
            {
              id: '4_2_2',
              name: 'Пункт',
            },
            {
              id: '4_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '4_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '4_3_1',
              name: 'Пункт',
            },
            {
              id: '4_3_2',
              name: 'Пункт',
            },
            {
              id: '4_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
    {
      id: '5',
      name: 'Пункт',
      icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
      items: [
        {
          id: '5_1',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '5_1_1',
              name: 'Пункт',
            },
            {
              id: '5_1_2',
              name: 'Пункт',
            },
            {
              id: '5_1_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '5_2',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '5_2_1',
              name: 'Пункт',
            },
            {
              id: '5_2_2',
              name: 'Пункт',
            },
            {
              id: '5_2_3',
              name: 'Пункт',
            },
          ],
        },
        {
          id: '5_3',
          name: 'Пункт',
          icon: this.iconStore.getIcon({ icon: 'folder', size: '20' }),
          items: [
            {
              id: '5_3_1',
              name: 'Пункт',
            },
            {
              id: '5_3_2',
              name: 'Пункт',
            },
            {
              id: '5_3_3',
              name: 'Пункт',
            },
          ],
        },
      ],
    },
  ];

  constructor(private iconStore: MeIconStoreService) {}

  onValueChangedS(e: ValueChangedEvent) {
    this.toggleAdaptivityS = e.value;
  }

  onValueChangedL(e: ValueChangedEvent) {
    this.toggleAdaptivityL = e.value;
  }
}
