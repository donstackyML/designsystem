import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponentsComponent } from './components/all-components/all-components.component';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MePopoverComponent } from './components/me-popover/me-popover.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { MeSelectBoxComponent } from './components/me-select-box/me-select-box.component';
import { MeCheckBoxComponent } from './components/me-check-box/me-check-box.component';

const routes: Routes = [
  { path: '', component: MeButtonComponent },
  { path: 'all-components', component: AllComponentsComponent },
  { path: 'me-buttons', component: MeButtonComponent },
  { path: 'me-text-box', component: MeTextBoxComponent },
  { path: 'me-select-box', component: MeSelectBoxComponent },
  { path: 'me-check-box', component: MeCheckBoxComponent },
  { path: 'me-popover', component: MePopoverComponent },
  // { path: 'buttons', component: ButtonsComponent },
  // { path: 'button-group', component: BtnGroupComponent },
  // { path: 'editors', component: EditorsComponent },
  // { path: 'pivot-grid', component: PivotGridComponent },
  // { path: 'data-grid', component: DataGridComponent },
  // { path: 'tree-list', component: TreeListComponent },
  // { path: 'scheduler', component: SchedulerComponent },
  // { path: 'form', component: FormComponent },
  // { path: 'list', component: ListComponent },
  // { path: 'filter-builder', component: FilterBuilderComponent },
  // { path: 'overlays', component: OverlaysComponent },
  // { path: 'menu', component: MenuComponent },
  // { path: 'tree-view', component: TreeViewComponent },
  // { path: 'accordion', component: AccordionComponent },
  // { path: 'gallery', component: GalleryComponent },
  // { path: 'tabs', component: TabsComponent },
  // { path: 'progress-bar', component: ProgressBarComponent },
  // { path: 'sliders', component: SlidersComponent },
  // { path: 'scroll-view', component: ScrollViewComponent },
  // { path: 'toolbar', component: ToolBarComponent },
  // { path: 'drawer', component: DrawerComponent },
  // { path: 'fieldset', component: FieldsetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
