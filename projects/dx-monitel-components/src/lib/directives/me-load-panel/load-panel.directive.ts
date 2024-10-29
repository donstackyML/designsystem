import { DxLoadPanelComponent } from 'devextreme-angular';

import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[meLoadPanel]',
})
export class MeLoadPanelDirective implements OnInit, OnChanges {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() color: 'normal' | 'default' | 'accent' = 'default';
  @Input() stylingMode: 'circle' | 'line' = 'circle';

  private renderer = inject(Renderer2);
  private loadpanel = inject(DxLoadPanelComponent);

  @HostListener('onContentReady') onContentReady() {
    this.applyStyles();
  }

  ngOnInit(): void {}

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
    this.applyIndicatorColor();
    this.applyIndicatorStyle();
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
  private applyIndicatorColor() {
    this.renderer.addClass(
      this.loadpanel.instance.content().children[0].children[0],
      'me-load-indicator-color-' + this.color
    );
  }

  private applyIndicatorStyle() {
    this.renderer.addClass(
      this.loadpanel.instance.content().children[0].children[0],
      'me-load-indicator-style-' + this.stylingMode
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
  private changeIndicatorColor(changes?: SimpleChanges) {
    if (changes?.['color'].previousValue !== undefined) {
      this.renderer.removeClass(
        this.loadpanel.instance.content().children[0].children[0],
        'me-load-indicator-color-' + changes?.['color'].previousValue
      );
      this.renderer.addClass(
        this.loadpanel.instance.content().children[0].children[0],
        'me-load-indicator-color-' + this.color
      );
    }
  }

  private changeIndicatorStyle(changes?: SimpleChanges) {
    if (changes?.['stylingMode'].previousValue !== undefined) {
      this.renderer.removeClass(
        this.loadpanel.instance.content().children[0].children[0],
        'me-load-indicator-style-' + changes?.['stylingMode'].previousValue
      );
      this.renderer.addClass(
        this.loadpanel.instance.content().children[0].children[0],
        'me-load-indicator-style-' + this.stylingMode
      );
    }
  }

  private updateLoadPanelProperties(changes: SimpleChanges) {
    if (changes['size']) {
      this.changePanelSize(changes);
      this.changeIndicatorSize(changes);
    }
    if (changes['color']) {
      this.changeIndicatorColor(changes);
    }
    if (changes['stylingMode']) {
      this.changeIndicatorStyle(changes);
    }
  }
}
