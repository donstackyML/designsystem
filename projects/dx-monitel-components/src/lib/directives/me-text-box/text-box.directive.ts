import { Directive, OnInit } from '@angular/core';
import { MeTextEditorDirective } from '../me-text-editor/text-editor.directive';

@Directive({
  selector: '[meTextBox]',
})
export class MeTextBoxDirective extends MeTextEditorDirective implements OnInit {
  ngOnInit(): void {
    this.initMeField();
  }
}
