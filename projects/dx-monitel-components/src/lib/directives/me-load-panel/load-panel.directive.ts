import { DxLoadPanelComponent } from 'devextreme-angular';

import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[meLoadPanel]',
})
export class MeLoadPanelDirective implements OnChanges {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() customClass: boolean = false;

  private renderer = inject(Renderer2);
  private element = inject(ElementRef);
  private loadpanel = inject(DxLoadPanelComponent);

  @HostListener('onContentReady') onContentReady() {
    this.applyStyles();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateLoadPanelProperties(changes);
  }

  private applyStyles() {
    this.renderer.addClass(this.loadpanel.instance.content(), 'me-load-panel');
    this.renderer.addClass(
      this.loadpanel.instance.content().children[0].children[0],
      'me-load-indicator'
    );
    this.applyPanelSize();
    this.applyIndicatorSize();
  }

  private applyPanelSize() {
    this.renderer.addClass(
      this.loadpanel.instance.content(),
      'me-load-panel-' + this.size
    );
  }

  private applyIndicatorSize() {
    this.renderer.addClass(
      this.loadpanel.instance.content().children[0].children[0],
      'me-load-indicator-' + this.size
    );
  }

  private changePanelSize(changes?: SimpleChanges) {
    if (changes?.['size'].previousValue !== undefined) {
      this.renderer.removeClass(
        this.loadpanel.instance.content(),
        'me-load-panel-' + changes?.['size'].previousValue
      );
      this.renderer.addClass(
        this.loadpanel.instance.content(),
        'me-load-panel-' + this.size
      );
    }
  }
  private changeIndicatorSize(changes?: SimpleChanges) {
    if (changes?.['size'].previousValue !== undefined) {
      this.renderer.removeClass(
        this.loadpanel.instance.content().children[0].children[0],
        'me-load-indicator-' + changes?.['size'].previousValue
      );
      this.renderer.addClass(
        this.loadpanel.instance.content().children[0].children[0],
        'me-load-indicator-' + this.size
      );
    }
  }

  private updateLoadPanelProperties(changes: SimpleChanges) {
    if (changes['size']) {
      this.changePanelSize(changes);
      this.changeIndicatorSize(changes);
    }
  }
}
