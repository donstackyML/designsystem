import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { icons } from '../me-test/me-icon/me-icon.component';

type MeBtnSize = 'small' | 'normal' | 'large';

@Directive({
  selector: '[meButton]',
})
export class ButtonDirective implements OnInit {
  @Input() size: MeBtnSize = 'normal';
  @Input() text: string = '';
  @Input() leftIcon: string = '';
  @Input() leftIconColor: string = '#fff';
  @Input() rightIcon: string = '';
  @Input() enableMultipleIcons: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (this.enableMultipleIcons) {
      this.element.nativeElement.innerHTML = `<div style="height: 20px; width: 120px; background: red;"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.875 6.75L7.0625 10.9375L6 12L0 6L6 0L7.0625 1.0625L2.875 5.25H12V6.75H2.875Z" fill="#18181a"/>
      </svg>
      Новый контент</div>${this.getIcon()}`;
    }
    this.renderer.addClass(this.element.nativeElement, `me-btn`);
    this.renderer.addClass(this.element.nativeElement, `me-btn-${this.size}`);
    // this.renderer.addClass(this.element.nativeElement, `me-btn-${this.size}`);
    // this.element.template = 'me-button';
  }

  getIcon() {
    return icons[this.leftIcon].replace('color', this.leftIconColor);
  }
}
