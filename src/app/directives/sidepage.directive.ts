import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
} from '@angular/core';
import { DxPopupComponent } from 'devextreme-angular';
import { MeOverlayDirective } from './overlay.directive';
import { MePosition } from '../types/types';

@Directive({
  selector: '[meSidePage]',
})
export class MeSidepageDirective extends MeOverlayDirective {
  @Input() visible = true;
  @Input() isOpen = false;
  @Input() width = '20vw';
  @Input() height = '100vh';
  @Input() position: MePosition = 'left';
  @Input() shading = true;
  @Input() showCloseButton = false;
  @Input() container = '.dx-viewport';
  @Input() zIndex = '1505';
  @Input() zIndexOverlay = '1504';
  @Input() dragEnable = false;
  @Input() closeOnOverlayClick = false;
  @Output()
  isOpenChange = new EventEmitter<boolean>();
  private overlay: HTMLDivElement;
  private translateValue: string = '';
  private overlayUnlisten = () => {};

  constructor(
    element: ElementRef,
    component: DxPopupComponent,
    renderer: Renderer2
  ) {
    super(element, component, renderer);
    this.overlay = this.renderer.createElement('div');
  }

  ngOnInit(): void {
    this.initMeModal();
    this.initPopup();
    this.initOverlay();
  }

  ngOnChanges(): void {
    this.toggleSidePage();
  }

  ngOnDestroy(): void {
    this.overlayUnlisten();
  }

  onOverlayClick(): void {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

  initPopup() {
    const element = this.element.nativeElement;
    const component = this.component as DxPopupComponent;

    component.visible = this.visible;
    component.width = 0;
    component.height = this.height;
    component.showCloseButton = this.showCloseButton;
    component.container = this.container;
    component.dragEnabled = this.dragEnable;

    if (this.position === 'left') {
      component.position = { my: 'right', at: 'left', of: window };
      this.translateValue = this.width;
    }

    if (this.position === 'right') {
      component.position = { my: 'left', at: 'right', of: window };
      this.translateValue = `-${this.width}`;
    }

    this.renderer.addClass(element, 'me-sidepage');

    this.renderer.setStyle(element, 'z-index', `${this.zIndex}`);
  }

  initOverlay() {
    if (this.closeOnOverlayClick) {
      this.overlayUnlisten = this.renderer.listen(
        this.overlay,
        'click',
        this.onOverlayClick.bind(this)
      );
    }

    if (this.shading) {
      this.renderer.addClass(this.overlay, 'me-overlay');
      this.renderer.setStyle(this.overlay, 'z-index', `${this.zIndexOverlay}`);

      this.renderer.appendChild(document.body, this.overlay);
    }
  }

  toggleSidePage() {
    if (this.isOpen) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        `translateX(${this.translateValue})`
      );
      this.renderer.setStyle(
        this.element.nativeElement,
        'box-shadow',
        `0 4px 10px $overlay-content-shadow-color`
      );

      this.component.width = this.width;

      if (this.shading)
        this.renderer.setStyle(this.overlay, 'display', 'block');
    } else {
      this.renderer.setStyle(
        this.element.nativeElement,
        'transform',
        'translateX(0%)'
      );
      this.renderer.removeStyle(this.element.nativeElement, 'box-shadow');

      if (this.shading) this.renderer.removeStyle(this.overlay, 'display');
    }
  }
}
