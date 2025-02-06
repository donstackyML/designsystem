import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  Renderer2,
} from '@angular/core';
import { MeEditorComponents, MeSize } from '../../types/types';
import { DxTextBoxComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';

@Directive({
  selector: '[meEditor]',
})
export class MeEditorDirective {
  @Input() size: MeSize = 'medium';

  protected focusService: ComponentFocusService;
  constructor(
    protected element: ElementRef,
    @Inject(DxTextBoxComponent)
    protected component: MeEditorComponents,
    protected renderer: Renderer2
  ) {
    this.focusService = new ComponentFocusService(element, renderer);
  }

  initMeEditor() {
    this.renderer.addClass(this.element.nativeElement, 'me-editor');
    this.renderer.addClass(
      this.element.nativeElement,
      `me-editor-${this.size}`
    );

    this.component.elementAttr['size'] = this.size;
  }

  ngOnDestroy(): void {
    this.focusService.ngOnDestroy();
  }
}
