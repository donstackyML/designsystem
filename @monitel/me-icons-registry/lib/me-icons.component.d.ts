import { ElementRef } from '@angular/core';
import { meIcons } from '@monitel/me-icons';
import { MeIconsRegistry } from './me-icons-registry.service';
import * as i0 from '@angular/core';
export declare class MeIconComponent {
  private element;
  meIcon: MeIconsRegistry;
  private document;
  private svgIcon?;
  private svgData?;
  color: string;
  name?: meIcons;
  ngOnInit(): void;
  constructor(element: ElementRef, meIcon: MeIconsRegistry, document: any);
  private svgElementFromString;
  static ɵfac: i0.ɵɵFactoryDeclaration<MeIconComponent, [null, null, { optional: true }]>;
  static ɵcmp: i0.ɵɵComponentDeclaration<
    MeIconComponent,
    'me-icon',
    never,
    { color: { alias: 'color'; required: false }; name: { alias: 'name'; required: false } },
    {},
    never,
    ['*'],
    false,
    never
  >;
}
