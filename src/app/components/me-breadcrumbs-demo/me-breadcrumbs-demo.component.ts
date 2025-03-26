import { Component } from '@angular/core';
import { keyboardX20 } from '@monitel/me-icons';
import { MeIconsRegistry } from '@monitel/me-icons-registry';
import { BreadcrumbItem } from '../../../../projects/dx-monitel-components/src/public-api';

@Component({
  selector: 'me-breadcrumbs-demo',
  templateUrl: './me-breadcrumbs-demo.component.html',
  styles: [
    `:host {
        display: block;
    }`
  ]
})
export class MeBreadcrumbsDemoComponent {

  constructor(private meIconRegistry: MeIconsRegistry) {
    meIconRegistry.registerIcons([keyboardX20]);
  }

  items = [
    {
      text: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      text: 'Products',
      url: '/products',
      icon: 'redo_x20'
    },
    {
      text: 'Electronics',
      url: '/products/electronics',
      icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAJElEQVQoz2P8z4AfsDAwJELVzGfExmIiYAAD5QoYRx1JL0cCAJeiFh8Qq9chAAAAAElFTkSuQmCC'
    },
    {
      text: 'Computers',
      url: '/products/electronics/computers',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M1 17v-1.5h18V17zm2.5-2.5q-.62 0-1.06-.44A1.45 1.45 0 0 1 2 13V4.5q0-.618.44-1.06Q2.883 3 3.5 3h13q.62 0 1.06.44.44.442.44 1.06V13q0 .619-.44 1.06-.44.44-1.06.44zm0-1.5h13V4.5h-13z"></path></svg>',
    },
    {
      text: 'Keyboards',
      url: '/products/electronics/computers/keyboards',
      icon: 'keyboard_x20',
    },
  ]

  onBreadcrumbItemClick(event: BreadcrumbItem) {
    console.log('Нажат элемент:', event);
  }
}
