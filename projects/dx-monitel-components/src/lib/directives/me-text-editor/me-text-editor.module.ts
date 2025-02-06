import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeTextEditorDirective } from './me-text-editor.directive';

@NgModule({
  declarations: [MeTextEditorDirective],
  imports: [CommonModule],
  exports: [MeTextEditorDirective],
})
export class MeTextEditorModule { }
