import { Directive, ElementRef, Renderer2, inject } from '@angular/core';
import { DxCheckBoxComponent } from 'devextreme-angular';
import { MeEditorDirective } from '../me-editor/editor.directive';

@Directive({
  selector: '[meCheckBox]',
})
export class MeCheckBoxDirective extends MeEditorDirective {
  override element = inject(ElementRef);
  override component = inject(DxCheckBoxComponent);
  override renderer = inject(Renderer2);

  ngOnInit(): void {
    this.initMeEditor();
  }
}
