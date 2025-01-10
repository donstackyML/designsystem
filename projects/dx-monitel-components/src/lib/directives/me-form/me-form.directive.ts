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
  ViewChildren,
} from '@angular/core';
import { DxFormComponent } from 'devextreme-angular/ui/form';
import { MeFormItemDirective } from '../me-form-item/me-form-item.directive';
import { FormDataFieldsService } from '../../service/form-datafields.service';
import { FormLabelMode, LabelLocation } from 'devextreme/ui/form';
import { LocationChangeEvent } from '@angular/common';
import { fromEvent } from 'rxjs';

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
  },
})
export class MeFormDirective implements AfterViewInit, OnDestroy {
  @Input() size: MeFormSize = 'medium';

  @ContentChildren(MeFormItemDirective, { descendants: true })
  viewChildren!: QueryList<MeFormItemDirective>;

  private readonly formService!: FormDataFieldsService;
  private resizeObserver: ResizeObserver;
  constructor(
    public element: ElementRef,
    @Host() @Self() @Optional() public hostFormComponent: DxFormComponent
  ) {
    this.formService = new FormDataFieldsService();
    this.resizeObserver = new ResizeObserver((entries) => {
      this.syncLabelMode();
    });
  }

  ngOnDestroy(): void {
    this.resizeObserver.unobserve(this.element.nativeElement);
  }

  ngAfterViewInit(): void {
    this.resizeObserver.observe(this.element.nativeElement);

    this.viewChildren.forEach((item) => {
      item.formService = this.formService;
    });

    this.hostFormComponent.onOptionChanged.subscribe((evt) => {
      switch (evt.name) {
        case 'labelMode':
          {
            if (evt.value != 'outside') {
              this.hostFormComponent.labelLocation = 'top';
            }
            if (evt.previousValue == 'outside') {
              this.syncLabelMode();
              setTimeout(() => {
                this.syncLabelMode();
              }, 10);
            } else {
              this.syncLabelMode();
            }
          }
          break;
        case 'labelLocation':
          {
            this.syncLabelMode();
          }
          break;
        case 'colCount':
          {
            this.syncLabelMode();
          }
          break;
        case 'showColonAfterLabel':
          {
            this.syncLabelMode();
          }
          break;
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
}
