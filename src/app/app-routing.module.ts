import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeAccordionComponent } from './components/me-accordion/me-accordion.component';
import { MeAutocompleteComponent } from './components/me-autocomplete/me-autocomplete.component';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MeButtonGroupComponent } from './components/me-button-group/me-button-group.component';
import { MeCalendarComponent } from './components/me-calendar/me-calendar.component';
import { MeCheckBoxComponent } from './components/me-check-box/me-check-box.component';
import { MeContextMenuComponent } from './components/me-context-menu/me-context-menu.component';
import { MeDataGridComponent } from './components/me-data-grid/me-data-grid.component';
import { MeDropDownButtonComponent } from './components/me-drop-down-button/me-drop-down-button.component';
import { MeFormComponent } from './components/me-form/me-form.component';
import { MeIconResearchComponent } from './components/me-icon-research/me-icon-research.component';
import { MeListComponent } from './components/me-list/me-list.component';
import { MeLoadingIndicatorComponent } from './components/me-loading-indicator/me-loading-indicator.component';
import { MeLoadPanelComponent } from './components/me-load-panel/me-load-panel.component';
import { MeMenuComponent } from './components/me-menu/me-menu.component';
import { MePivotGridComponent } from './components/me-pivot-grid/me-pivot-grid.component';
import { MePopoverComponent } from './components/me-popover/me-popover.component';
import { MePopupComponent } from './components/me-popup/me-popup.component';
import { MeRadioGroupComponent } from './components/me-radio-group/me-radio-group.component';
import { MeSelectBoxComponent } from './components/me-select-box/me-select-box.component';
import { MeSidepageDemo } from './components/me-sidepage-demo/me-sidepage.demo';
import { MeSidebarDemoComponent } from './components/me-sidebar-demo/me-sidebar-demo.component';
import { MeSwitchComponent } from './components/me-switch/me-switch.component';
import { MeTabPanelComponent } from './components/me-tab-panel/me-tab-panel.component';
import { MeTabsComponent } from './components/me-tabs/me-tabs.component';
import { MeTagBoxComponent } from './components/me-tag-box/me-tag-box.component';
import { MeTextAreaComponent } from './components/me-text-area/me-text-area.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { MeToastComponent } from './components/me-toast/me-toast.component';
import { MeToolbarComponent } from './components/me-toolbar/me-toolbar.component';
import { MeTooltipComponent } from './components/me-tooltip/me-tooltip.component';
import { MeTreeListComponent } from './components/me-tree-list/me-tree-list.component';
import { MeTreeViewComponent } from './components/me-tree-view/me-tree-view.component';
import { TypographyComponent } from './components/typography/typography.component';

const routes: Routes = [
  { path: '', component: TypographyComponent },
  { path: 'me-accordion', component: MeAccordionComponent },
  { path: 'me-autocomplete', component: MeAutocompleteComponent },
  { path: 'me-button-group', component: MeButtonGroupComponent },
  { path: 'me-buttons', component: MeButtonComponent },
  { path: 'me-calendar', component: MeCalendarComponent },
  { path: 'me-check-box', component: MeCheckBoxComponent },
  { path: 'me-context-menu', component: MeContextMenuComponent },
  { path: 'me-data-grid', component: MeDataGridComponent },
  { path: 'me-drop-down-button', component: MeDropDownButtonComponent },
  { path: 'me-form', component: MeFormComponent },
  { path: 'me-icon-research', component: MeIconResearchComponent },
  { path: 'me-list', component: MeListComponent },
  { path: 'me-load-panel', component: MeLoadPanelComponent },
  { path: 'me-loading-indicator', component: MeLoadingIndicatorComponent },
  { path: 'me-menu', component: MeMenuComponent },
  { path: 'me-pivot-grid', component: MePivotGridComponent },
  { path: 'me-popover', component: MePopoverComponent },
  { path: 'me-popup', component: MePopupComponent },
  { path: 'me-radio-group', component: MeRadioGroupComponent },
  { path: 'me-select-box', component: MeSelectBoxComponent },
  { path: 'me-sidepage', component: MeSidepageDemo },
  { path: 'me-sidebar', component: MeSidebarDemoComponent },
  { path: 'me-switch', component: MeSwitchComponent },
  { path: 'me-tab-panel', component: MeTabPanelComponent },
  { path: 'me-tabs', component: MeTabsComponent },
  { path: 'me-tag-box', component: MeTagBoxComponent },
  { path: 'me-text-area', component: MeTextAreaComponent },
  { path: 'me-text-box', component: MeTextBoxComponent },
  { path: 'me-toast', component: MeToastComponent },
  { path: 'me-toolbar', component: MeToolbarComponent },
  { path: 'me-tooltip', component: MeTooltipComponent },
  { path: 'me-tree-list', component: MeTreeListComponent },
  { path: 'me-tree-view', component: MeTreeViewComponent },
  { path: 'typography', component: TypographyComponent },
  { path: '**', component: TypographyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
