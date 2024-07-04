import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeEditorDirective } from './editor.directive';

@NgModule({
  declarations: [MeEditorDirective],
  imports: [CommonModule],
  exports: [MeEditorDirective],
})
export class MeEditorModule {}
