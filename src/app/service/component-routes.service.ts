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
