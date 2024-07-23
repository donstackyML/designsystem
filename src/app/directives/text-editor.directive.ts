import { Directive, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { DxTextBoxComponent } from 'devextreme-angular';
import { MeFieldStyle, MeLabelMode, MeTextEditorComponents } from '../types/types';
import { MeEditorDirective } from './editor.directive';

@Directive({
  selector: '[meTextEditor]',
  host: {
    '[class]': 'customTextEditorClass',
  },
})
export class MeTextEditorDirective extends MeEditorDirective {
  @Input() stylingMode: MeFieldStyle = 'filled';
  @Input() labelMode: MeLabelMode = 'static';
  @Input() label: string = '';
  private customTextEditorClass: string = '';

  constructor(
    element: ElementRef,
    @Inject(DxTextBoxComponent)
    component: MeTextEditorComponents,
    renderer: Renderer2,
  ) {
    super(element, component, renderer);
  }

  initMeField = () => {
    this.initMeEditor();

    (<MeTextEditorComponents>this.component).stylingMode = this.stylingMode;

    if (this.label && (this.labelMode === 'floating' || this.labelMode === 'static')) {
      this.customTextEditorClass += ' me-texteditor-with-label';

      if (this.labelMode === 'floating') this.customTextEditorClass += ' me-label-floating';
    }
  };
}
