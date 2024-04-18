import { Directive, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import {
  MeTextEditorComponents,
  MeFieldStyle,
  MeLabelMode,
} from '../types/types';
import { DxTextBoxComponent } from 'devextreme-angular';
import { MeEditorDirective } from './editor.directive';

@Directive({
  selector: '[meTextEditor]',
})
export class MeTextEditorDirective extends MeEditorDirective {
  @Input() stylingMode: MeFieldStyle = 'filled';
  @Input() labelMode: MeLabelMode = 'static';
  @Input() label: string = '';

  constructor(
    element: ElementRef,
    @Inject(DxTextBoxComponent)
    component: MeTextEditorComponents,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
  }

  initMeField = () => {
    this.initMeEditor();

    (this.component as MeTextEditorComponents).stylingMode = this.stylingMode;

    if (
      this.label &&
      (this.labelMode === 'floating' || this.labelMode === 'static')
    ) {
      this.renderer.addClass(
        this.element.nativeElement,
        'me-texteditor-with-label'
      );

      if (this.labelMode === 'floating')
        this.renderer.addClass(this.element.nativeElement, 'me-label-floating');
    }
  };
}
