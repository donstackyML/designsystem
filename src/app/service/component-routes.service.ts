import { Injectable } from '@angular/core';

const componentsRoute: string[] = [
  // 'all-components',
  'typography',
  'me-buttons',
  'me-text-box',
  'me-select-box',
  'me-check-box',
  'me-radio-group',
  'me-popup',
  'me-popover',
  'me-sidepage',
  'me-toolbar',
  'me-drop-down-button',
  'me-button-group',
  'toolbar',
  // 'buttons',
  // 'button-group',
  // 'editors',
  // 'pivot-grid',
  // 'data-grid',
  // 'tree-list',
  // 'scheduler',
  // 'form',
  // 'list',
  // 'filter-builder',
  // 'overlays',
  // 'menu',
  // 'tree-view',
  // 'accordion',
  // 'gallery',
  // 'tabs',
  // 'progress-bar',
  // 'sliders',
  // 'scroll-view',
  // 'toolbar',
  // 'drawer',
  // 'fieldset',
];

const componentsName: string[] = [
  // 'Все компоненты',
  'typography',
  'meButton',
  'meTextBox',
  'meSelectBox',
  'meCheckBox',
  'meRadioGroup',
  'mePopup',
  'mePopover',
  'meSidepage',
  'meToolbar',
  'meDropDownButton',
  'meButtonGroup',
  'toolbar',
  // 'Button group',
  // 'Editors',
  // 'PivotGrid',
  // 'DataGrid',
  // 'TreeList',
  // 'Scheduler',
  // 'Form',
  // 'List',
  // 'Filter Builder',
  // 'Overlays',
  // 'Menu',
  // 'TreeView',
  // 'Accordion',
  // 'Gallery',
  // 'Tabs',
  // 'Progress Bar',
  // 'Sliders',
  // 'Scroll View',
  // 'Toolbar',
  // 'Drawer',
  // 'Fieldset',
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
