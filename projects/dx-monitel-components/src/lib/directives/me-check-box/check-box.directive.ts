import { Directive, ElementRef, Renderer2, inject } from '@angular/core';
import { DxCheckBoxComponent } from 'devextreme-angular';
import { MeEditorDirective } from '../me-editor/editor.directive';

@Directive({
  selector: '[meCheckBox]',
})
export class MeCheckBoxDirective extends MeEditorDirective {
  constructor(
    element: ElementRef,
    component: DxCheckBoxComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
  }

  ngOnInit(): void {
    this.initMeEditor();
  }
}
