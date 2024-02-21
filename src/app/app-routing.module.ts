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
import { MenuComponent } from './components/menu/menu.component';
import { TreeListComponent } from './components/tree-list/tree-list.component';
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
import { AllComponentsComponent } from './components/all-components/all-components.component';

const routes: Routes = [
  { path: 'all-components', component: AllComponentsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'button-group', component: BtnGroupComponent },
  { path: 'editors', component: EditorsComponent },
  { path: 'pivot-grid', component: PivotGridComponent },
  { path: 'data-grid', component: DataGridComponent },
  { path: 'tree-list', component: TreeListComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'form', component: FormComponent },
  { path: 'list', component: ListComponent },
  { path: 'filter-builder', component: FilterBuilderComponent },
  { path: 'overlays', component: OverlaysComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'tree-view', component: TreeViewComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'sliders', component: SlidersComponent },
  { path: 'scroll-view', component: ScrollViewComponent },
  { path: 'toolbar', component: ToolBarComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'fieldset', component: FieldsetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
