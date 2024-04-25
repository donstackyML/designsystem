import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  DevExtremeModule,
  DxDateBoxModule,
  DxPivotGridModule,
} from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AllComponentsComponent } from './components/all-components/all-components.component';
import { BtnGroupComponent } from './components/btn-group/btn-group.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { EditorsComponent } from './components/editors/editors.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { FilterBuilderComponent } from './components/filter-builder/filter-builder.component';
import { FormComponent } from './components/form/form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ListComponent } from './components/list/list.component';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MePopoverComponent } from './components/me-popover/me-popover.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { MenuComponent } from './components/menu/menu.component';
import { OverlaysComponent } from './components/overlays/overlays.component';
import { PivotGridComponent } from './components/pivot-grid/pivot-grid.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { ScrollViewComponent } from './components/scroll-view/scroll-view.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ToolBarComponent } from './components/toolbar/tool-bar.component';
import { TreeListComponent } from './components/tree-list/tree-list.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { ButtonDirective } from './directives/button.directive';
import { MePopoverDirective } from './directives/popover.directive';
import { MeTextBoxDirective } from './directives/text-box.directive';
import { MeButtonTestComponent } from './me-test/me-button-test/me-button-test.component';
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

@NgModule({
  declarations: [
    AppComponent,
    EditorsComponent,
    ButtonsComponent,
    PivotGridComponent,
    DataGridComponent,
    TreeListComponent,
    SchedulerComponent,
    FormComponent,
    ListComponent,
    FilterBuilderComponent,
    OverlaysComponent,
    MenuComponent,
    GalleryComponent,
    TabsComponent,
    ProgressBarComponent,
    FieldsetComponent,
    ToolBarComponent,
    BtnGroupComponent,
    TreeViewComponent,
    AccordionComponent,
    SlidersComponent,
    ScrollViewComponent,
    DrawerComponent,
    CustomSelectComponent,
    AllComponentsComponent,
    MeButtonComponent,
    ButtonDirective,
    MeButtonTestComponent,
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
    MePopupComponent,
    MePopupDirective,
    MeOverlayDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    DxDateBoxModule,
    DxPivotGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
