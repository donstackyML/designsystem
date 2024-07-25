import { Injectable } from '@angular/core';

const componentsRoute: string[] = [
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
  'me-list',
  'me-switch',
  'me-context-menu',
  'me-menu',
  'me-tree-view',
  'me-tabs',
  'me-tooltip',
  'me-tab-panel',
  'me-calendar',
];

const componentsName: string[] = [
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
  'meList',
  'meSwitch',
  'meContextMenu',
  'meMenu',
  'meTreeView',
  'meTabs (RC)',
  'meTooltip (RC)',
  'meTabPanel (RC)',
  'meCalendar (RC)',
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
