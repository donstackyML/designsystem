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

  @Output() filteredValueChange = new EventEmitter<(string | string[])[]>();

  private overlayObserver?: MutationObserver;

  private currentSizeClass = '';

  private startObserving(): void {
    this.currentSizeClass = `me-filterbuilder-${this.size}`;

    this.overlayObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === 1 &&
            node instanceof HTMLElement &&
            node.classList.contains('dx-overlay-wrapper')
          ) {
            node.classList.remove(
              'me-filterbuilder-small',
              'me-filterbuilder-medium',
              'me-filterbuilder-large'
            );
            node.classList.add(this.currentSizeClass);
          }
        });
      }
    });

    this.overlayObserver.observe(document.body, {
      childList: true,
      subtree: true,
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

  filter: (string | string[])[] = [];
}
