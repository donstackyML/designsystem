import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';

// Components

import { MeBadgeComponent } from '../components/me-badge/me-badge.component';
import { MeTimeRangeComponent } from '../components/me-time-range';
import { MeBreadcrumbsComponent } from '../components/me-breadcrumbs/me-breadcrumbs.component';
import { MeCardComponent } from '../components/me-card/me-card.component';
import { MeChipComponent } from '../components/me-chip/me-chip.component';
import { MeChipsComponent } from '../components/me-chips/me-chips.component';
import { MeFileUploaderComponent } from '../components/me-file-uploader/me-file-uploader.component';
import { MeIconComponent } from '../components/me-icon/me-icon.component';
import { MeMenuLeftComponent } from '../components/me-menu-left/me-menu-left.component';
import { MePaginationComponent } from '../components/me-pagination/me-pagination.component';
import {
  MePropertyGridCellComponent,
  MePropertyGridComponent,
} from '../components/me-property-grid';
import { MeSidePageComponent } from '../components/me-sidepage/me-sidepage.component';
import { MeSkeletonItemComponent } from '../components/me-skeleton/me-skeleton-item/me-skeleton-item.component';
import { MeSkeletonComponent } from '../components/me-skeleton/me-skeleton.component';
import { MeStatusBarComponent } from '../components/me-status-bar/me-status-bar.component';
import { MeToastComponent } from '../components/me-toast/me-toast.component';

// Directives

import { MeAccordionModule } from '../directives/me-accordion/me-accordion.module';
import { MeAutocompleteModule } from '../directives/me-autocomplete/me-autocomplete.module';
import { MeButtonGroupModule } from '../directives/me-button-group/me-button-group.module';
import { MeButtonModule } from '../directives/me-button/me-button.module';
import { MeCalendarModule } from '../directives/me-calendar/me-calendar.module';
import { MeCheckBoxModule } from '../directives/me-check-box/me-check-box.module';
import { MeContextMenuModule } from '../directives/me-context-menu/me-context-menu.module';
import { MeControlModule } from '../directives/me-control/me-control.module';
import { MeDataGridModule } from '../directives/me-data-grid/me-data-grid.module';
import { MeDateBoxModule } from '../directives/me-date-box/me-date-box.module';
import { MeDropDownButtonModule } from '../directives/me-drop-down-button/me-drop-down-button.module';
import { MeEditorModule } from '../directives/me-editor/me-editor.module';
import { MeFileUploaderModule } from '../directives/me-file-uploader/me-file-uploader.module';
import { MeFormItemModule } from '../directives/me-form-item/me-form-item.module';
import { MeFormModule } from '../directives/me-form/me-form.module';
import { MeIconModule } from '../directives/me-icon/me-icon.module';
import { MeLabelModule } from '../directives/me-label/me-label.module';
import { MeListModule } from '../directives/me-list/me-list.module';
import { MeLoadIndicatorModule } from '../directives/me-load-indicator/me-load-indicator.module';
import { MeLoadPanelModule } from '../directives/me-load-panel/me-load-panel.module';
import { MeMenuModule } from '../directives/me-menu/me-menu.module';
import { MeNumberBoxDirective } from '../directives/me-number-box/me-number-box.directive';
import { MeNumberBoxModule } from '../directives/me-number-box/me-number-box.module';
import { MeOverlayModule } from '../directives/me-overlay/me-overlay.module';
import { MePivotGridModule } from '../directives/me-pivot-grid/me-pivot-grid.module';
import { MePopoverModule } from '../directives/me-popover/me-popover.module';
import { MePopupModule } from '../directives/me-popup/me-popup.module';
import { MeRadioGroupModule } from '../directives/me-radio-group/me-radio-group.module';
import { MeScrollViewModule } from '../directives/me-scroll-view/me-scroll-view.module';
import { MeSelectBoxModule } from '../directives/me-select-box/me-select-box.module';
import { MeSwitchModule } from '../directives/me-switch/me-switch.module';
import { MeTabPanelModule } from '../directives/me-tab-panel/me-tab-panel.module';
import { MeTabsModule } from '../directives/me-tabs/me-tabs.module';
import { MeTagBoxModule } from '../directives/me-tag-box/me-tag-box.module';
import { MeTextBoxModule } from '../directives/me-text-box/me-text-box.module';
import { MeTextEditorModule } from '../directives/me-text-editor/me-text-editor.module';
import { MeToastModule } from '../directives/me-toast/me-toast.module';
import { MeToolbarModule } from '../directives/me-toolbar/me-toolbar.module';
import { MeTooltipModule } from '../directives/me-tooltip/me-tooltip.module';
import { MeTreeListModule } from '../directives/me-tree-list/me-tree-list.module';
import { MeTreeViewModule } from '../directives/me-tree-view/me-tree-view.module';

// Modules

import { MeIconsInitializerModule } from './me-icons-initializer.module';

@NgModule({
  imports: [
    A11yModule,
    MeAccordionModule,
    MeAutocompleteModule,
    MeButtonGroupModule,
    MeButtonModule,
    MeCalendarModule,
    MeCheckBoxModule,
    MeContextMenuModule,
    MeControlModule,
    MeDataGridModule,
    MeDateBoxModule,
    MeDropDownButtonModule,
    MeEditorModule,
    MeFileUploaderModule,
    MeFormItemModule,
    MeFormModule,
    MeIconModule,
    MeIconModule,
    MeIconsInitializerModule,
    MeLabelModule,
    MeListModule,
    MeLoadIndicatorModule,
    MeLoadPanelModule,
    MeMenuModule,
    MeNumberBoxModule,
    MeOverlayModule,
    MePivotGridModule,
    MePopoverModule,
    MePopupModule,
    MeRadioGroupModule,
    MeScrollViewModule,
    MeSelectBoxModule,
    MeSwitchModule,
    MeTabPanelModule,
    MeTabsModule,
    MeTagBoxModule,
    MeTextBoxModule,
    MeTextEditorModule,
    MeToastModule,
    MeToolbarModule,
    MeTooltipModule,
    MeTreeListModule,
    MeTreeViewModule,
    MeBadgeComponent,
    MeBreadcrumbsComponent,
    MeCardComponent,
    MeCardComponent,
    MeChipComponent,
    MeChipsComponent,
    MeFileUploaderComponent,
    MeIconComponent,
    MeMenuLeftComponent,
    MePaginationComponent,
    MePropertyGridCellComponent,
    MePropertyGridComponent,
    MeSidePageComponent,
    MeSkeletonComponent,
    MeSkeletonItemComponent,
    MeStatusBarComponent,
    MeTimeRangeComponent,
    MeToastComponent,
  ],
  exports: [
    MeAccordionModule,
    MeAutocompleteModule,
    MeButtonGroupModule,
    MeButtonModule,
    MeCalendarModule,
    MeCalendarModule,
    MeCheckBoxModule,
    MeContextMenuModule,
    MeControlModule,
    MeDataGridModule,
    MeDateBoxModule,
    MeDropDownButtonModule,
    MeEditorModule,
    MeFileUploaderModule,
    MeFormItemModule,
    MeFormModule,
    MeIconModule,
    MeIconModule,
    MeIconsInitializerModule,
    MeLabelModule,
    MeListModule,
    MeLoadIndicatorModule,
    MeLoadPanelModule,
    MeMenuModule,
    MeNumberBoxDirective,
    MeOverlayModule,
    MePivotGridModule,
    MePopoverModule,
    MePopupModule,
    MeRadioGroupModule,
    MeScrollViewModule,
    MeSelectBoxModule,
    MeSwitchModule,
    MeTabPanelModule,
    MeTabsModule,
    MeTagBoxModule,
    MeTextBoxModule,
    MeTextEditorModule,
    MeToastModule,
    MeToolbarModule,
    MeTooltipModule,
    MeTreeListModule,
    MeTreeViewModule,
    MeBadgeComponent,
    MeBreadcrumbsComponent,
    MeCardComponent,
    MeCardComponent,
    MeChipComponent,
    MeChipsComponent,
    MeFileUploaderComponent,
    MeIconComponent,
    MeMenuLeftComponent,
    MePaginationComponent,
    MeSidePageComponent,
    MeSkeletonComponent,
    MeSkeletonItemComponent,
    MeStatusBarComponent,
    MeTimeRangeComponent,
    MeToastComponent,
  ],
})
export class MeComponentsModule {}
