import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorsComponent } from './components/editors/editors.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { PivotGridComponent } from './components/pivot-grid/pivot-grid.component';

const routes: Routes = [ 
  { path: 'buttons', component: ButtonsComponent },
  { path: 'editors', component: EditorsComponent },
  { path: 'pivotgrid', component: PivotGridComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
