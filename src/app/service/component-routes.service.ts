import { Injectable } from '@angular/core';

const componentsRoute: string[] = [
  'typography',
  'me-accordion',
  'me-autocomplete',
  'me-badge',
  'me-breadcrumbs',
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
  'me-menu-left',
  'me-menu',
  'me-pivot-grid',
  'me-popover',
  'me-popup',
  'me-property-grid',
  'me-radio-group',
  'me-select-box',
  'me-sidepage',
  'me-switch',
  'me-tab-panel',
  'me-tabs',
  'me-tag-box',
  'me-text-area',
  'me-text-box',
  'me-time-range',
  'me-toast',
  'me-toolbar',
  'me-tooltip',
  'me-tree-list',
  'me-tree-view',
  'me-inputs',
];

const componentsName: string[] = [
  'typography',
  'meAccordion',
  'meAutocomplete',
  'meBadge',
  'meBreadcrumbs',
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
  'meMenuLeft',
  'mePivotGrid',
  'mePopover',
  'mePopup',
  'mePropertyGrid',
  'meRadioGroup',
  'meSelectBox',
  'meSidepage',
  'meSwitch',
  'meTabPanel',
  'meTabs',
  'meTagBox',
  'meTextArea',
  'meTextBox',
  'meTimeRange',
  'meToast',
  'meToolbar',
  'meTooltip',
  'meTreeList',
  'meTreeView',
  'meInputs',
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
