import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorsComponent } from './components/editors/editors.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PivotGridComponent } from './components/pivot-grid/pivot-grid.component';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { FilterBuilderComponent } from './components/filter-builder/filter-builder.component';

const routes: Routes = [ 
  { path: 'buttons', component: ButtonsComponent },
  { path: 'editors', component: EditorsComponent },
  { path: 'pivotgrid', component: PivotGridComponent },
  { path: 'datagrid', component: DataGridComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'filter', component: FilterBuilderComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
