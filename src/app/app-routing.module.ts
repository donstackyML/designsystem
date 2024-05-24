import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponentsComponent } from './components/all-components/all-components.component';
import { MeButtonComponent } from './components/me-button/me-button.component';
import { MePopoverComponent } from './components/me-popover/me-popover.component';
import { MeTextBoxComponent } from './components/me-text-box/me-text-box.component';
import { MeSelectBoxComponent } from './components/me-select-box/me-select-box.component';
import { MeCheckBoxComponent } from './components/me-check-box/me-check-box.component';
import { MeRadioGroupComponent } from './components/me-radio-group/me-radio-group.component';
import { MePopupComponent } from './components/me-popup/me-popup.component';
import { MeSidepageComponent } from './components/me-sidepage/me-sidepage.component';
import { TypographyComponent } from './components/typography/typography.component';
import { MeToolbarComponent } from './components/me-toolbar/me-toolbar.component';
import { MeDropDownButtonComponent } from './components/me-drop-down-button/me-drop-down-button.component';
import { MeButtonGroupComponent } from './components/me-button-group/me-button-group.component';
import { ToolBarComponent } from './components/toolbar/tool-bar.component';

const routes: Routes = [
  { path: '', component: TypographyComponent },
  { path: 'all-components', component: AllComponentsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'me-buttons', component: MeButtonComponent },
  { path: 'me-text-box', component: MeTextBoxComponent },
  { path: 'me-select-box', component: MeSelectBoxComponent },
  { path: 'me-check-box', component: MeCheckBoxComponent },
  { path: 'me-radio-group', component: MeRadioGroupComponent },
  { path: 'me-popup', component: MePopupComponent },
  { path: 'me-popover', component: MePopoverComponent },
  { path: 'me-sidepage', component: MeSidepageComponent },
  { path: 'me-toolbar', component: MeToolbarComponent },
  { path: 'me-drop-down-button', component: MeDropDownButtonComponent },
  { path: 'me-button-group', component: MeButtonGroupComponent },
  // { path: 'toolbar', component: ToolBarComponent },
  { path: '**', component: TypographyComponent },
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
  // { path: 'drawer', component: DrawerComponent },
  // { path: 'fieldset', component: FieldsetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
