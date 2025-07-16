import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  DevExtremeModule,
  DxDataGridModule,
  DxDateBoxModule,
  DxFilterBuilderModule,
  DxNumberBoxModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import {
  MeButtonModule,
  MeDateBoxModule,
  MeNumberBoxModule,
  MeSelectBoxModule,
  MeTextBoxModule,
} from '../../directives';

@Component({
  selector: 'me-filter-builder',
  standalone: true,
  imports: [
    DxFilterBuilderModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxTextBoxModule,
    DxNumberBoxModule,
    MeDateBoxModule,
    MeTextBoxModule,
    MeNumberBoxModule,
    DevExtremeModule,
    MeSelectBoxModule,
    MeButtonModule,
  ],
  templateUrl: './me-filter-builder.component.html',
})
export class MeFilterBuilderComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() filteredValue: (string | string[])[] = [];
  @Input() fields: Record<string, unknown>[] = [];
  @Input() dataSource: unknown[] = [];
  @Input() selectBoxSources?: Record<string, string[]>;
  @Input() acceptFiltersButtonText: string = 'Применить';

  @Output() filteredValueChange = new EventEmitter<(string | string[])[]>();

  filter: (string | string[])[] = [];

  private overlayObserver?: MutationObserver;
  private currentSizeClass = '';

  private startObserving() {
    this.currentSizeClass = `me-filterbuilder-${this.size}`;

    this.overlayObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const element = node as HTMLElement;

            if (element.classList.contains('dx-filterbuilder-overlay')) {
              element.classList.remove(
                'me-filterbuilder-small',
                'me-filterbuilder-medium',
                'me-filterbuilder-large'
              );
              element.classList.add(this.currentSizeClass);
            }
          }
        });
      }
    });

    this.overlayObserver.observe(document.body, {
      childList: true,
      subtree: false,
    });
  }

  ngAfterViewInit(): void {
    this.startObserving();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['size'] && !changes['size'].firstChange) {
      this.currentSizeClass = `me-filterbuilder-${this.size}`;
    }

    if (changes['filteredValue']) {
      this.filter = this.filteredValue;
    }
  }

  ngOnDestroy() {
    this.overlayObserver?.disconnect();
  }

  handleAcceptFiltersClick() {
    this.filteredValueChange.emit(this.filter);
  }
}
