import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule, DxDateBoxModule, DxPivotGridModule } from 'devextreme-angular';
import {
  MeAccordionModule,
  MeBadgeComponent,
  MeBreadcrumbsComponent,
  MeButtonGroupModule,
  MeButtonModule,
  MeCardComponent,
  MeChipComponent,
  MeChipsContainerComponent,
  MeDataGridModule,
  MeFileUploaderModule,
  MeIconComponent,
  MeLoadPanelModule,
  MePaginationComponent,
  MePivotGridModule,
  MePopupModule,
  MeProgressBarModule,
  MeScrollViewModule,
  MeSkeletonComponent,
  MeSliderModule,
  MeTabsModule,
  MeTagBoxModule,
  MeTextAreaModule,
  MeTooltipModule,
  MeTreeListModule,
} from '../../projects/dx-monitel-components/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeAccordionComponent } from './components/me-accordion/me-accordion.component';
import { MeButtonGroupComponent } from './components/me-button-group/me-button-group.component';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MeCalendarComponent } from './components/me-calendar/me-calendar.component';
import { MeCheckBoxComponent } from './components/me-check-box/me-check-box.component';
import { MeContextMenuComponent } from './components/me-context-menu/me-context-menu.component';
import { MeDropDownButtonComponent } from './components/me-drop-down-button/me-drop-down-button.component';
import { MeIconResearchComponent } from './components/me-icon-research/me-icon-research.component';
import { MeListComponent } from './components/me-list/me-list.component';
import { MeLoadingIndicatorComponent } from './components/me-loading-indicator/me-loading-indicator.component';
import { MeMenuComponent } from './components/me-menu/me-menu.component';
import { MePopoverComponent } from './components/me-popover/me-popover.component';
import { MePopupComponent } from './components/me-popup/me-popup.component';
import { MeRadioGroupComponent } from './components/me-radio-group/me-radio-group.component';
import { MeSelectBoxComponent } from './components/me-select-box/me-select-box.component';
import { MeSidepageDemo } from './components/me-sidepage-demo/me-sidepage.demo';
import { MeSidepageComponent } from './components/me-sidepage/me-sidepage.component';
import { MeSwitchComponent } from './components/me-switch/me-switch.component';
import { MeTabPanelComponent } from './components/me-tab-panel/me-tab-panel.component';
import { MeTabsComponent } from './components/me-tabs/me-tabs.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { MeToastComponent } from './components/me-toast/me-toast.component';
import { MeToolbarComponent } from './components/me-toolbar/me-toolbar.component';
import { MeTooltipComponent } from './components/me-tooltip/me-tooltip.component';
import { MeTreeViewComponent } from './components/me-tree-view/me-tree-view.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MeCalendarDirective } from './directives/calendar.directive';
import { MeCheckBoxDirective } from './directives/check-box.directive';
import { MeContextMenuDirective } from './directives/context-menu.directive';
import { MeControlDirective } from './directives/control.directive';
import { MeDropDownButtonDirective } from './directives/drop-down-button.directive';
import { MeEditorDirective } from './directives/editor.directive';
import { MeIconDirective } from './directives/icon.directive';
import { MeLabelDirective } from './directives/label.directive';
import { MeListDirective } from './directives/list.directive';
import { MeLoadIndicatorDirective } from './directives/load-indicator.directive';
import { MeLoadPanelDirective } from './directives/load-panel.directive';
import { MeMenuDirective } from './directives/menu.directive';
import { MeOverlayDirective } from './directives/overlay.directive';
import { MePopoverDirective } from './directives/popover.directive';
import { MeRadioGroupDirective } from './directives/radio-group.directive';
import { MeSelectBoxDirective } from './directives/select-box.directive';
import { MeSwitchDirective } from './directives/switch.directive';
import { MeTextBoxDirective } from './directives/text-box.directive';
import { MeTextEditorDirective } from './directives/text-editor.directive';
import { MeToastDirective } from './directives/toast.directive';
import { MeToolbarDirective } from './directives/toolbar.directive';
import { MeTreeViewDirective } from './directives/tree-view.directive';

@NgModule({
  declarations: [
    AppComponent,
    MeButtonComponent,
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
    MeAccordionComponent,
    MeRadioGroupComponent,
    MeTabsComponent,
    MePopupComponent,
    MeTooltipComponent,
    MeOverlayDirective,
    MeIconDirective,
    MeCalendarDirective,
    MeCalendarComponent,
    MeSidepageDemo,
    MeTabPanelComponent,
    TypographyComponent,
    MeToolbarDirective,
    MeToolbarComponent,
    MeDropDownButtonComponent,
    MeDropDownButtonDirective,
    MeButtonGroupComponent,
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
    MeToastDirective,
    MeToastComponent,
    MeLoadIndicatorDirective,
    MeLoadingIndicatorComponent,
    MeLoadPanelDirective,
    MeIconResearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    DxDateBoxModule,
    DxPivotGridModule,
    ReactiveFormsModule,
    MeBadgeComponent,
    MeBreadcrumbsComponent,
    MeCardComponent,
    MeIconComponent,
    MeChipComponent,
    MeChipsContainerComponent,
    MeDataGridModule,
    MeFileUploaderModule,
    MeLoadPanelModule,
    MePaginationComponent,
    MePivotGridModule,
    MeProgressBarModule,
    MeScrollViewModule,
    MeSkeletonComponent,
    MeSliderModule,
    MeTagBoxModule,
    MeTextAreaModule,
    MeTreeListModule,
    MeLoadPanelModule,
    MeTabsModule,
    MeAccordionModule,
    MeButtonGroupModule,
    MeButtonModule,
    MePopupModule,
    MeTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
