import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DevExtremeModule, DxDateBoxModule, DxPivotGridModule } from 'devextreme-angular';
import {
  MeAccordionModule,
  MeAutocompleteModule,
  MeBadgeComponent,
  MeBreadcrumbsComponent,
  MeButtonGroupModule,
  MeButtonModule,
  MeCalendarModule,
  MeCardComponent,
  MeCheckBoxModule,
  MeChipComponent,
  MeChipsComponent,
  MeContextMenuModule,
  MeDataGridModule,
  MeDropDownButtonModule,
  MeFileUploaderModule,
  MeFormItemModule,
  MeIconComponent,
  MeListModule,
  MeLoadIndicatorModule,
  MeLoadPanelModule,
  MeMenuModule,
  MePaginationComponent,
  MePivotGridModule,
  MePopupModule,
  MeProgressBarModule,
  MeRadioGroupModule,
  MeScrollViewModule,
  MeSelectBoxModule,
  MeSkeletonComponent,
  MeSliderModule,
  MeTabPanelModule,
  MeTabsModule,
  MeTagBoxModule,
  MeTextAreaModule,
  MeTextBoxModule,
  MeToastComponent,
  MeToolbarModule,
  MeTooltipModule,
  MeTreeListModule,
  MeTreeViewModule,
  MeDateBoxModule,
  MeFormModule,
  MeSidebarMenuComponent,
} from '../../projects/dx-monitel-components/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MeAccordionComponent } from './components/me-accordion/me-accordion.component';
import { MeAutocompleteComponent } from './components/me-autocomplete/me-autocomplete.component';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MeButtonGroupComponent } from './components/me-button-group/me-button-group.component';
import { MeCalendarComponent } from './components/me-calendar/me-calendar.component';
import { MeCheckBoxComponent } from './components/me-check-box/me-check-box.component';
import { MeContextMenuComponent } from './components/me-context-menu/me-context-menu.component';
import { MeDataGridComponent } from './components/me-data-grid/me-data-grid.component';
import { MeDateRangeBoxComponent } from './components/me-date-range-box/me-date-range-box.component';
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
import { MeSidepageComponent } from './components/me-sidepage/me-sidepage.component';
import { MeSidepageDemo } from './components/me-sidepage-demo/me-sidepage.demo';
import { MeSidebarDemoComponent } from './components/me-sidebar-demo/me-sidebar-demo.component';
import { MeSwitchComponent } from './components/me-switch/me-switch.component';
import { MeTabPanelComponent } from './components/me-tab-panel/me-tab-panel.component';
import { MeTabsComponent } from './components/me-tabs/me-tabs.component';
import { MeTagBoxComponent } from './components/me-tag-box/me-tag-box.component';
import { MeTextAreaComponent } from './components/me-text-area/me-text-area.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { MeToastComponent as MeToastDemoComponent } from './components/me-toast/me-toast.component';
import { MeToolbarComponent } from './components/me-toolbar/me-toolbar.component';
import { MeTooltipComponent } from './components/me-tooltip/me-tooltip.component';
import { MeTreeListComponent } from './components/me-tree-list/me-tree-list.component';
import { MeTreeViewComponent } from './components/me-tree-view/me-tree-view.component';
import { TypographyComponent } from './components/typography/typography.component';

import { MeControlDirective } from './directives/control.directive';
import { MeEditorDirective } from './directives/editor.directive';
import { MeIconDirective } from './directives/icon.directive';
import { MeLabelDirective } from './directives/label.directive';
import { MeOverlayDirective } from './directives/overlay.directive';
import { MePopoverDirective } from './directives/popover.directive';
import { MeSwitchDirective } from './directives/switch.directive';
import { MeTextEditorDirective } from './directives/text-editor.directive';
import { MeToastDirective } from './directives/toast.directive';

@NgModule({
  declarations: [
    AppComponent,
    MeAccordionComponent,
    MeAutocompleteComponent,
    MeButtonComponent,
    MeButtonGroupComponent,
    MeCalendarComponent,
    MeCheckBoxComponent,
    MeContextMenuComponent,
    MeDataGridComponent,
    MeDateRangeBoxComponent,
    MeDropDownButtonComponent,
    MeFormComponent,
    MeIconResearchComponent,
    MeListComponent,
    MeLoadingIndicatorComponent,
    MeLoadPanelComponent,
    MeMenuComponent,
    MePivotGridComponent,
    MePopoverComponent,
    MePopupComponent,
    MeRadioGroupComponent,
    MeSelectBoxComponent,
    MeSidebarDemoComponent,
    MeSidepageComponent,
    MeSidepageDemo,
    MeSwitchComponent,
    MeTabPanelComponent,
    MeTabsComponent,
    MeTagBoxComponent,
    MeTextAreaComponent,
    MeTextBoxComponent,
    MeToastDemoComponent,
    MeToolbarComponent,
    MeTooltipComponent,
    MeTreeListComponent,
    MeTreeViewComponent,
    TypographyComponent,
    MeControlDirective,
    MeEditorDirective,
    MeIconDirective,
    MeLabelDirective,
    MeOverlayDirective,
    MePopoverDirective,
    MeSwitchDirective,
    MeTextEditorDirective,
    MeToastDirective,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    MeSidebarMenuComponent,
    AppRoutingModule,
    DevExtremeModule,
    DxDateBoxModule,
    DxPivotGridModule,
    MeBadgeComponent,
    MeBreadcrumbsComponent,
    MeCardComponent,
    MeIconComponent,
    MeToastComponent,
    MeChipComponent,
    MeChipsComponent,
    MeDataGridModule,
    MeFileUploaderModule,
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
    MeTabPanelModule,
    MeFormModule,
    MeTextBoxModule,
    MeSelectBoxModule,
    MeDateBoxModule,
    MeCheckBoxModule,
    MeToolbarModule,
    MeTreeViewModule,
    MeDropDownButtonModule,
    MeListModule,
    MeMenuModule,
    MeContextMenuModule,
    MeDataGridModule,
    MeRadioGroupModule,
    MeLoadIndicatorModule,
    MeCalendarModule,
    MeAutocompleteModule,
    MeTextAreaModule,
    MeTagBoxModule,
    MeFormItemModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
