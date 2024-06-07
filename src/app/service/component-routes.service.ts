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
  'tree-view',
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
  'TreeView',
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
