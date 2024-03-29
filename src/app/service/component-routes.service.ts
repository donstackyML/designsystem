import { Injectable } from '@angular/core';

const componentsRoute: string[] = [
  'all-components',
  'buttons',
  'button-group',
  'editors',
  'pivot-grid',
  'data-grid',
  'tree-list',
  'scheduler',
  'form',
  'list',
  'filter-builder',
  'overlays',
  'menu',
  'tree-view',
  'accordion',
  'gallery',
  'tabs',
  'progress-bar',
  'sliders',
  'scroll-view',
  'toolbar',
  'drawer',
  'fieldset',
];

const componentsName: string[] = [
  'Все компоненты',
  'Buttons',
  'Button group',
  'Editors',
  'PivotGrid',
  'DataGrid',
  'TreeList',
  'Scheduler',
  'Form',
  'List',
  'Filter Builder',
  'Overlays',
  'Menu',
  'TreeView',
  'Accordion',
  'Gallery',
  'Tabs',
  'Progress Bar',
  'Sliders',
  'Scroll View',
  'Toolbar',
  'Drawer',
  'Fieldset',
];

@Injectable({
  providedIn: 'root',
})
export class ComponentRoutesService {
  getComponentsName() {
    return componentsName;
  }

  getComponentsRoute() {
    return componentsRoute;
  }
}
