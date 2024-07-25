import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule, DxDateBoxModule, DxPivotGridModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MePopoverComponent } from './components/me-popover/me-popover.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { ButtonDirective } from './directives/button.directive';
import { MePopoverDirective } from './directives/popover.directive';
import { MeTextBoxDirective } from './directives/text-box.directive';
import { MeLabelDirective } from './directives/label.directive';
import { MeSelectBoxComponent } from './components/me-select-box/me-select-box.component';
import { MeSelectBoxDirective } from './directives/select-box.directive';
import { MeTextEditorDirective } from './directives/text-editor.directive';
import { MeCheckBoxDirective } from './directives/check-box.directive';
import { MeCheckBoxComponent } from './components/me-check-box/me-check-box.component';
import { MeEditorDirective } from './directives/editor.directive';
import { MeRadioGroupDirective } from './directives/radio-group.directive';
import { MeRadioGroupComponent } from './components/me-radio-group/me-radio-group.component';
import { MePopupComponent } from './components/me-popup/me-popup.component';
import { MePopupDirective } from './directives/popup.directive';
import { MeOverlayDirective } from './directives/overlay.directive';
import { MeIconDirective } from './directives/icon.directive';
import { MeSidepageDemo } from './components/me-sidepage-demo/me-sidepage.demo';
import { TypographyComponent } from './components/typography/typography.component';
import { MeToolbarDirective } from './directives/toolbar.directive';
import { MeToolbarComponent } from './components/me-toolbar/me-toolbar.component';
import { MeDropDownButtonComponent } from './components/me-drop-down-button/me-drop-down-button.component';
import { MeDropDownButtonDirective } from './directives/drop-down-button.directive';
import { MeButtonGroupComponent } from './components/me-button-group/me-button-group.component';
import { MeButtonGroupDirective } from './directives/button-group.directive';
import { MeControlDirective } from './directives/control.directive';
import { MeListComponent } from './components/me-list/me-list.component';
import { MeListDirective } from './directives/list.directive';
import { MeSwitchComponent } from './components/me-switch/me-switch.component';
import { MeSwitchDirective } from './directives/switch.directive';
import { MeContextMenuComponent } from './components/me-context-menu/me-context-menu.component';
import { MeContextMenuDirective } from './directives/context-menu.directive';
import { MeSidepageComponent } from './components/me-sidepage/me-sidepage.component';
import { MeMenuDirective } from './directives/menu.directive';
import { MeMenuComponent } from './components/me-menu/me-menu.component';
import { MeTreeViewComponent } from './components/me-tree-view/me-tree-view.component';
import { MeTreeViewDirective } from './directives/tree-view.directive';
import { MeTabsDirective } from './directives/tabs.directive';
import { MeTabsComponent } from './components/me-tabs/me-tabs.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { MeTooltipComponent } from './components/me-tooltip/me-tooltip.component';
import { MeTabPanelDirective } from "./directives/tab-panel.directive";
import { MeTabPanelComponent } from "./components/me-tab-panel/me-tab-panel.component";

@NgModule({
  declarations: [
    AppComponent,
    MeButtonComponent,
    ButtonDirective,
    MePopoverDirective,
    MePopoverComponent,
    MeTextBoxComponent,
    MeTextBoxDirective,
    MeLabelDirective,
    MeSelectBoxComponent,
    MeSelectBoxDirective,
    MeTextEditorDirective,
    MeCheckBoxDirective,
    MeCheckBoxComponent,
    MeEditorDirective,
    MeRadioGroupDirective,
    MeRadioGroupComponent,
    MeTabsComponent,
    MePopupComponent,
    MeTooltipComponent,
    MePopupDirective,
    MeOverlayDirective,
    MeIconDirective,
    MeSidepageDemo,
    MeTabPanelDirective,
    MeTabPanelComponent,
    TypographyComponent,
    MeToolbarDirective,
    MeToolbarComponent,
    MeDropDownButtonComponent,
    MeDropDownButtonDirective,
    MeButtonGroupComponent,
    MeButtonGroupDirective,
    MeControlDirective,
    MeListComponent,
    MeListDirective,
    MeSwitchComponent,
    MeSwitchDirective,
    MeContextMenuComponent,
    MeContextMenuDirective,
    MeSidepageComponent,
    MeMenuDirective,
    MeMenuComponent,
    MeMenuComponent,
    MeTreeViewComponent,
    MeTreeViewDirective,
    MeTabsDirective,
    TooltipDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, DevExtremeModule, DxDateBoxModule, DxPivotGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
