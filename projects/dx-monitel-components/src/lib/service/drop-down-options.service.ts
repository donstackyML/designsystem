import { Injectable, ElementRef, Renderer2 } from '@angular/core';
import { Properties as dxPopupOptions } from 'devextreme/ui/popup';
import { MeCommonType } from '../types/types';

@Injectable({
  providedIn: 'root',
})
export class DropDownOptionsService {
  constructor() {}

  public configureDropDownOptions(
    component: { dropDownOptions?: dxPopupOptions },
    hostElement: ElementRef,
    renderer: Renderer2,
    size: 'small' | 'medium' | 'large' = 'medium',
    dropDownListMaxHeight?: string | number,
    additionalClass?: string,
    wrapperClass?: string,
    wrapperAttr: MeCommonType = {}
  ): void {
    const uuid = self.crypto.randomUUID();

    if (!hostElement.nativeElement.id) {
      const uniqueId = `dropdown-${uuid || Math.floor(Math.random() * 10000)}`;
      renderer.setAttribute(hostElement.nativeElement, 'id', uniqueId);
    }

    console.log(dropDownListMaxHeight);

    const popupWrapperClasses = `me-scroll-view me-dropdownlist me-dropdownlist-${size} ${additionalClass}`;

    component.dropDownOptions = {
      maxHeight: dropDownListMaxHeight,
      position: {
        my: 'left top',
        at: 'left bottom',
        offset: { y: 4 },
        collision: 'fit flip',
        of: hostElement.nativeElement,
      },
      ...component.dropDownOptions,
      wrapperAttr: {
        ...component.dropDownOptions?.wrapperAttr,
        ...wrapperAttr,
        class: wrapperClass || popupWrapperClasses,
      },
    };
  }
}
