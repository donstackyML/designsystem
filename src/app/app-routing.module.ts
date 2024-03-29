import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AllComponentsComponent } from './components/all-components/all-components.component';
import { BtnGroupComponent } from './components/btn-group/btn-group.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
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
import { MeTestComponent } from './me-test/me-test.component';
import { DropdownButtonComponent } from './components/dropdown-button/dropdown-button.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';

const routes: Routes = [
  { path: '', component: AllComponentsComponent },
  { path: 'all-components', component: AllComponentsComponent },
  { path: 'me-test', component: MeTestComponent },
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
  { path: 'tab-panel', component: TabPanelComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'sliders', component: SlidersComponent },
  { path: 'scroll-view', component: ScrollViewComponent },
  { path: 'toolbar', component: ToolBarComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'fieldset', component: FieldsetComponent },
  { path: 'dropdown-button', component: DropdownButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
