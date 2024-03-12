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
import { MeButtonChildComponent } from './me-test/me-button-child/me-button-child.component';
import { MeButtonStaticComponent } from './me-test/me-button-static/me-button-static.component';
import { MeIconComponent } from './me-test/me-icon/me-icon.component';
import { MeTestComponent } from './me-test/me-test.component';
import { ButtonDirective } from './directives/button.directive';

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
    MeButtonChildComponent,
    MeTestComponent,
    MeIconComponent,
    MeButtonStaticComponent,
    ButtonDirective,
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
