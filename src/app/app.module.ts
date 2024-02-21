import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DevExtremeModule,
  DxDateBoxModule,
  DxPivotGridModule,
} from 'devextreme-angular';
import { EditorsComponent } from './components/editors/editors.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PivotGridComponent } from './components/pivot-grid/pivot-grid.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { TreeListComponent } from './components/tree-list/tree-list.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { FilterBuilderComponent } from './components/filter-builder/filter-builder.component';
import { OverlaysComponent } from './components/overlays/overlays.component';
import { MenuComponent } from './components/menu/menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FieldsetComponent } from './components/fieldset/fieldset.component';
import { ToolBarComponent } from './components/toolbar/tool-bar.component';
import { BtnGroupComponent } from './components/btn-group/btn-group.component';
import { TreeViewComponent } from './components/tree-view/tree-view.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { SlidersComponent } from './components/sliders/sliders.component';
import { ScrollViewComponent } from './components/scroll-view/scroll-view.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

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
