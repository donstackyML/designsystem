import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorsComponent } from './editors/editors.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [ 
  { path: 'buttons', component: ButtonsComponent },
  { path: 'editors', component: EditorsComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
