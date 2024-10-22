import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeAccordionComponent } from './components/me-accordion/me-accordion.component';
import { MeButtonGroupComponent } from './components/me-button-group/me-button-group.component';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MeCalendarComponent } from './components/me-calendar/me-calendar.component';
import { MeCheckBoxComponent } from './components/me-check-box/me-check-box.component';
import { MeContextMenuComponent } from './components/me-context-menu/me-context-menu.component';
import { MeDropDownButtonComponent } from './components/me-drop-down-button/me-drop-down-button.component';
import { MeFormComponent } from './components/me-form/me-form.component';
import { MeIconResearchComponent } from './components/me-icon-research/me-icon-research.component';
import { MeListComponent } from './components/me-list/me-list.component';
import { MeLoadingIndicatorComponent } from './components/me-loading-indicator/me-loading-indicator.component';
import { MeMenuComponent } from './components/me-menu/me-menu.component';
import { MePopoverComponent } from './components/me-popover/me-popover.component';
import { MePopupComponent } from './components/me-popup/me-popup.component';
import { MeRadioGroupComponent } from './components/me-radio-group/me-radio-group.component';
import { MeSelectBoxComponent } from './components/me-select-box/me-select-box.component';
import { MeSidepageDemo } from './components/me-sidepage-demo/me-sidepage.demo';
import { MeSwitchComponent } from './components/me-switch/me-switch.component';
import { MeTabPanelComponent } from './components/me-tab-panel/me-tab-panel.component';
import { MeTabsComponent } from './components/me-tabs/me-tabs.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { MeToastComponent } from './components/me-toast/me-toast.component';
import { MeToolbarComponent } from './components/me-toolbar/me-toolbar.component';
import { MeTooltipComponent } from './components/me-tooltip/me-tooltip.component';
import { MeTreeViewComponent } from './components/me-tree-view/me-tree-view.component';
import { TypographyComponent } from './components/typography/typography.component';

const routes: Routes = [
  { path: '', component: TypographyComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'me-buttons', component: MeButtonComponent },
  { path: 'me-form', component: MeFormComponent },
  { path: 'me-text-box', component: MeTextBoxComponent },
  { path: 'me-select-box', component: MeSelectBoxComponent },
  { path: 'me-check-box', component: MeCheckBoxComponent },
  { path: 'me-radio-group', component: MeRadioGroupComponent },
  { path: 'me-popup', component: MePopupComponent },
  { path: 'me-popover', component: MePopoverComponent },
  { path: 'me-sidepage', component: MeSidepageDemo },
  { path: 'me-toolbar', component: MeToolbarComponent },
  { path: 'me-drop-down-button', component: MeDropDownButtonComponent },
  { path: 'me-button-group', component: MeButtonGroupComponent },
  { path: 'me-list', component: MeListComponent },
  { path: 'me-switch', component: MeSwitchComponent },
  { path: 'me-context-menu', component: MeContextMenuComponent },
  { path: 'me-menu', component: MeMenuComponent },
  { path: 'me-tree-view', component: MeTreeViewComponent },
  { path: 'me-tabs', component: MeTabsComponent },
  { path: 'me-tooltip', component: MeTooltipComponent },
  { path: 'me-tab-panel', component: MeTabPanelComponent },
  { path: 'me-calendar', component: MeCalendarComponent },
  { path: 'me-accordion', component: MeAccordionComponent },
  { path: 'me-toast', component: MeToastComponent },
  { path: 'me-loading-indicator', component: MeLoadingIndicatorComponent },
  { path: 'me-icon-research', component: MeIconResearchComponent },
  { path: '**', component: TypographyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
