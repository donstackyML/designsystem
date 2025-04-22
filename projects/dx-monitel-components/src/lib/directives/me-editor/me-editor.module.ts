import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeEditorDirective } from './me-editor.directive';

@NgModule({
  declarations: [MeEditorDirective],
  imports: [CommonModule],
  exports: [MeEditorDirective],
})
export class MeEditorModule {}
