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
import { OverlaysComponent } from './components/overlays/overlays.component';
import { MenuComponent } from './components/menu-treeview-accordion/menu.component';
import { TreeListComponent } from './components/tree-list/tree-list.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'editors', component: EditorsComponent },
  { path: 'pivotgrid', component: PivotGridComponent },
  { path: 'datagrid', component: DataGridComponent },
  { path: 'treelist', component: TreeListComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'filter', component: FilterBuilderComponent },
  { path: 'overlay', component: OverlaysComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'gallery', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
