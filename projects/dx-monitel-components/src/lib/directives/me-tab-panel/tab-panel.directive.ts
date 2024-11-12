import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { DxTabPanelComponent } from 'devextreme-angular';

type TabsPosition = 'top' | 'bottom' | 'left' | 'right';
type TabsStylingMode = 'primary' | 'secondary';

@Directive({
  selector: '[meTabPanel]',
  host: {
    '[class.me-tabs-panel]': 'true'
  }
})
export class MeTabPanelDirective implements OnInit {
  @Input() stylingMode: TabsStylingMode = 'primary';
  @Input() position: TabsPosition = 'top';

<<<<<<< HEAD
  constructor(elementRef: ElementRef, renderer: Renderer2) {
    super(elementRef, renderer);
=======
  constructor(
    private elementRef: ElementRef,
    private tabPanel: DxTabPanelComponent
  ) {}

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;

    // Применяем базовые классы
    element.classList.add(`dx-tabpanel-tabs-position-${this.position}`);
    element.classList.add(`dx-tabs-styling-mode-${this.stylingMode}`);

    // Устанавливаем опции для DevExtreme TabPanel
    this.tabPanel.instance.option({
      elementAttr: {
        class: [
          'dx-tabpanel',
          'dx-widget',
          `dx-tabpanel-tabs-position-${this.position}`,
          `dx-tabs-styling-mode-${this.stylingMode}`
        ].join(' ')
      }
    });

    // Добавляем обработчик для установки минимальной высоты контейнера
    this.tabPanel.instance.on('contentReady', () => {
      const container = element.querySelector('.dx-tabpanel-container');
      if (container) {
        // Устанавливаем минимальную высоту и убираем паддинги
        container.style.minHeight = '50px';
        container.style.padding = '0';
      }
    });
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
  }
}
