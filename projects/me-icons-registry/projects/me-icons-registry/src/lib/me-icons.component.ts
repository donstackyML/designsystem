import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  Optional,
} from '@angular/core';
import { meIcons } from '@monitel/me-icons';

import { MeIconsRegistry } from './me-icons-registry.service';

const DEFAULT_ICON_COLOR = 'var(--Icon-Default)';

@Component({
  selector: 'me-icon',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeIconComponent {
  private svgIcon?: SVGElement;
  private svgData?: string;

  @Input() color: string = DEFAULT_ICON_COLOR;
  @Input() name?: meIcons;

  ngOnInit(): void {
    if (this.svgIcon) {
      this.element.nativeElement.removeChild(this.svgIcon);
    }

    if (this.name) {
      this.svgData = this.meIcon.getIconFromString(this.name, this.color);
    }

    if (this.svgData) {
      this.svgIcon = this.svgElementFromString(this.svgData);
      this.element.nativeElement.appendChild(this.svgIcon);
    }
  }

  constructor(
    private element: ElementRef,
    public meIcon: MeIconsRegistry,
    @Optional() @Inject(DOCUMENT) private document: any
  ) {}

  private svgElementFromString(svgContent: string): SVGElement {
    const div = this.document.createElement('DIV');
    div.innerHTML = svgContent;
    return (
      div.querySelector('svg') ||
      this.document.createElementNS('http://www.w3.org/2000/svg', 'path')
    );
  }
}
