import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevExtremeModule, DxDateBoxModule, DxPivotGridModule } from 'devextreme-angular';
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
import { MenuComponent } from './components/menu-treeview/menu.component';

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
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    DxDateBoxModule,
    DxPivotGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
