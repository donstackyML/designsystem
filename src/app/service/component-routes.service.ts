import { Injectable } from '@angular/core';

const componentsRoute: string[] = [
  'typography',
  'me-accordion',
  'me-autocomplete',
  'me-button-group',
  'me-buttons',
  'me-calendar',
  'me-check-box',
  'me-context-menu',
  'me-data-grid',
  'me-drop-down-button',
  'me-form',
  'me-icon-research',
  'me-list',
  'me-load-panel',
  'me-loading-indicator',
  'me-menu',
  'me-pivot-grid',
  'me-popover',
  'me-popup',
  'me-radio-group',
  'me-select-box',
  'me-sidebar',
  'me-sidepage',
  'me-switch',
  'me-tab-panel',
  'me-tabs',
  'me-tag-box',
  'me-text-area',
  'me-text-box',
  'me-toast',
  'me-toolbar',
  'me-tooltip',
  'me-tree-list',
  'me-tree-view',
];

const componentsName: string[] = [
  'typography',
  'meAccordion',
  'meAutocomplete',
  'meButton',
  'meButtonGroup',
  'meCalendar',
  'meCheckBox',
  'meContextMenu',
  'meDataGrid',
  'meDropDownButton',
  'meForm',
  'meIconResearch',
  'meList',
  'meLoadIndicator',
  'meLoadPanel',
  'meMenu',
  'mePivotGrid',
  'mePopover',
  'mePopup',
  'meRadioGroup',
  'meSelectBox',
  'meSideBar',
  'meSidepage',
  'meSwitch',
  'meTabPanel',
  'meTabs',
  'meTagBox',
  'meTextArea',
  'meTextBox',
  'meToast',
  'meToolbar',
  'meTooltip',
  'meTreeList',
  'meTreeView',
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
