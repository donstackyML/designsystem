import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeTextEditorDirective } from './text-editor.directive';

@NgModule({
  declarations: [MeTextEditorDirective],
  imports: [CommonModule],
  exports: [MeTextEditorDirective],
})
export class MeTextEditorModule {}
