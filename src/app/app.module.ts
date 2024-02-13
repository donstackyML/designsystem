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

@NgModule({
  declarations: [
    AppComponent,
    EditorsComponent,
    ButtonsComponent,
    PivotGridComponent,
    DataGridComponent,
    TreeListComponent
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
