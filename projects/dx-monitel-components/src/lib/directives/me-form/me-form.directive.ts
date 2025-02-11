import {
  AfterViewInit,
  ContentChildren,
  Directive,
  ElementRef,
  Host,
  Input,
  OnDestroy,
  Optional,
  QueryList,
  Self,
} from '@angular/core';
import type { FormLabelMode, LabelLocation } from 'devextreme/ui/form';
import { DxFormComponent } from 'devextreme-angular/ui/form';

import { FormDataFieldsService } from '../../service/form-datafields.service';
import { MeFormItemDirective } from '../me-form-item/me-form-item.directive';

type MeFormSize = 'small' | 'medium' | 'large';

export interface FormOptions {
  mode: FormLabelMode;
  location: LabelLocation;
  showColonAfterLabel: boolean;
}

@Directive({
  selector: '[meForm]',
  host: {
    '[class.me-form]': 'true',
    '[class.me-form-small]': 'isSmall',
    '[class.me-form-medium]': 'isMedium',
    '[class.me-form-large]': 'isLarge',
    '[class.me-form-label-mode-floating]': 'isFloating',
    '[class.me-form-label-mode-outside]': 'isOutside',
    '[class.me-form-label-mode-static]': 'isStatic',
    '[class.me-form-label-mode-hidden]': 'isHidden',
    '[class.me-form-label-position-top]': 'isTop',
    '[class.me-form-label-position-left]': 'isLeft',
  },
})
export class MeFormDirective implements AfterViewInit, OnDestroy {
  @Input() size: MeFormSize = 'medium';

  @ContentChildren(MeFormItemDirective, { descendants: true })
  viewChildren!: QueryList<MeFormItemDirective>;

  private _formService: FormDataFieldsService;
  private resizeObserver: ResizeObserver;

  constructor(
    public element: ElementRef,
    @Host() @Self() @Optional() public hostFormComponent: DxFormComponent
  ) {
    this._formService = new FormDataFieldsService();
    this.resizeObserver = new ResizeObserver(() => {
      this.syncLabelMode();
    });
  }

  get formService(): FormDataFieldsService {
    return this._formService;
  }

  set formService(value: FormDataFieldsService) {
    this._formService = value ?? new FormDataFieldsService();
  }

  ngOnDestroy(): void {
    this.resizeObserver.unobserve(this.element.nativeElement);
  }

  ngAfterViewInit(): void {
    this.resizeObserver.observe(this.element.nativeElement);

    this.viewChildren.forEach((item) => {
      item.formService = this._formService;
    });

    this.hostFormComponent.onOptionChanged.subscribe((evt) => {
      switch (evt.name) {
        case 'labelMode':
          {
            if (evt.value !== 'outside') {
              this.hostFormComponent.labelLocation = 'top';
            }
            if (evt.previousValue === 'outside') {
              this.syncLabelMode();
              setTimeout(() => this.syncLabelMode(), 10);
            } else {
              this.syncLabelMode();
            }
          }
          break;
        case 'labelLocation':
        case 'colCount':
        case 'showColonAfterLabel':
        case 'formData':
          {
            this.syncLabelMode();
          }
          break;
      }
    });
    this.syncLabelMode();
  }

  syncLabelMode() {
    let optionLabelMode = this.hostFormComponent.instance.option('labelMode');
    let showColon = this.hostFormComponent.instance.option(
      'showColonAfterLabel'
    );
    let optionLabelLocation =
      this.hostFormComponent.instance.option('labelLocation');
    if (!optionLabelLocation) {
      optionLabelLocation = 'top';
    }
    if (showColon == undefined) {
      showColon = false;
    }
    if (optionLabelMode) {
      this.formService.labelChange(
        optionLabelMode,
        optionLabelLocation,
        showColon
      );
    }
  }

  get isSmall() {
    return this.size === 'small';
  }

  get isMedium() {
    return this.size === 'medium';
  }

  get isLarge() {
    return this.size === 'large';
  }

  get isFloating() {
    let optionLabelMode = this.hostFormComponent.instance.option('labelMode');
    return !optionLabelMode || optionLabelMode == 'floating';
  }
  get isOutside() {
    let optionLabelMode = this.hostFormComponent.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'outside';
  }
  get isStatic() {
    let optionLabelMode = this.hostFormComponent.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'static';
  }
  get isHidden() {
    let optionLabelMode = this.hostFormComponent.instance.option('labelMode');
    return optionLabelMode && optionLabelMode == 'hidden';
  }
  get isTop() {
    let location = this.hostFormComponent.instance.option('labelLocation');
    return !location || location == 'top';
  }
  get isLeft() {
    let location = this.hostFormComponent.instance.option('labelLocation');
    return location != undefined && location == 'left';
  }
}
