import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';
import { DxDateRangeBoxComponent } from 'devextreme-angular';
import { ComponentFocusService } from '../../service/component-focus.service';
import { MeFormField } from '../me-form-item/me-form-field';

@Directive({
  selector: '[meDateRangeBox]',
  host: {
    '[class.me-date-range-box]': 'true',
  },
  providers: [{ provide: MeFormField, useExisting: MeDateRangeBoxDirective }],
})
export class MeDateRangeBoxDirective
  extends MeFormField
  implements OnInit {


  private focusService: ComponentFocusService;
  constructor(
    public element: ElementRef,
    private dateRangeBox: DxDateRangeBoxComponent,

    private renderer: Renderer2
  ) {
    super(dateRangeBox)
    this.dateRangeBox.labelMode = 'outside';
    this.focusService = new ComponentFocusService(element, renderer);
    this.focusService.addKeyUpEventHandle('Enter', (evt) =>
      this.enterHandle(evt)
    );
  }
  ngOnInit(): void {
    this.dateRangeBox.instance.option('dropDownOptions', {
      wrapperAttr: {
        class: `me-date-range-box-overlay`,
      },
    });
  }

  @HostListener('onOpened', ['$event']) onOpened(e: any) {
    if (this.dateRangeBox.instance.option('applyValueMode') == 'useButtons') {
      const overlay: HTMLElement | null =
        this.dateRangeBox.instance.content().parentElement;

      // Переменные кнопок
      const submitButton = overlay?.querySelector('.dx-button.dx-popup-done');
      const cancelButton = overlay?.querySelector('.dx-button.dx-popup-cancel');
      const todayButton = overlay?.querySelector('.dx-button.dx-button-today');

      //Стилизуем классами кнопки
      //'Выбрать'
      this.renderer.addClass(submitButton, 'me-button');
      this.renderer.addClass(submitButton, `me-button-medium`);
      this.renderer.addClass(submitButton, 'dx-button-default');

      //'Отмена'
      this.renderer.addClass(cancelButton, 'me-button');
      this.renderer.addClass(cancelButton, `me-button-medium`);
      this.renderer.addClass(cancelButton, 'dx-button-mode-text');
      this.renderer.addClass(cancelButton, 'dx-button-default');

      //'Сегодня'
      this.renderer.addClass(todayButton, 'me-button');
      this.renderer.addClass(todayButton, `me-button-medium`);
      this.renderer.addClass(todayButton, 'dx-button-mode-text');
      this.renderer.addClass(todayButton, 'dx-button-default');
    }
  }

  private enterHandle(evt: KeyboardEvent) {
    this.dateRangeBox.instance.open();
  }
}
