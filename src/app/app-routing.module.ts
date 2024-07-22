import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MePopoverComponent } from './components/me-popover/me-popover.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { MeSelectBoxComponent } from './components/me-select-box/me-select-box.component';
import { MeCheckBoxComponent } from './components/me-check-box/me-check-box.component';
import { MeRadioGroupComponent } from './components/me-radio-group/me-radio-group.component';
import { MePopupComponent } from './components/me-popup/me-popup.component';
import { MeSidepageDemo } from './components/me-sidepage-demo/me-sidepage.demo';
import { TypographyComponent } from './components/typography/typography.component';
import { MeToolbarComponent } from './components/me-toolbar/me-toolbar.component';
import { MeDropDownButtonComponent } from './components/me-drop-down-button/me-drop-down-button.component';
import { MeButtonGroupComponent } from './components/me-button-group/me-button-group.component';
import { MeListComponent } from './components/me-list/me-list.component';
import { MeSwitchComponent } from './components/me-switch/me-switch.component';
import { MeContextMenuComponent } from './components/me-context-menu/me-context-menu.component';
import { MeMenuComponent } from './components/me-menu/me-menu.component';
import { MeTreeViewComponent } from './components/me-tree-view/me-tree-view.component';
import {MeTabPanelComponent} from "./components/me-tab-panel/me-tab-panel.component";

const routes: Routes = [
  { path: '', component: TypographyComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'me-buttons', component: MeButtonComponent },
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
  { path: 'me-tab-panel', component: MeTabPanelComponent },
  { path: '**', component: TypographyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
