import { DatePipe, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { createHighlightRanges } from '../../helpers/create-highlight-ranges';
import { DateHighlightInfo } from '../me-time-range';

@Component({
  selector: 'me-time-range-result',
  standalone: true,
  imports: [DatePipe, NgIf],
  templateUrl: './me-time-range-result.component.html',
  styleUrls: ['./me-time-range-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeTimeRangeResultComponent
  implements AfterViewInit, OnChanges, OnDestroy
{
  private static instanceCounter = 0;

  private readonly instanceId: number;

  @Input() timeFormat = 'dd.MM.yyyy HH:mm:ss';

  @Input() startDate?: string | Date;

  @Input() endDate?: string | Date;

  @Input() startText = 'Начало';

  @Input() endText = 'Конец';

  @ViewChild('startTimeResult')
  startTimeElementRef!: ElementRef<HTMLDivElement>;

  @ViewChild('endTimeResult') endTimeElementRef!: ElementRef<HTMLDivElement>;

  @Input() startDateHighlightInfo: DateHighlightInfo = {};

  @Input() endDateHighlightInfo: DateHighlightInfo = {};

  constructor() {
    this.instanceId = MeTimeRangeResultComponent.instanceCounter++;
  }

  ngOnChanges(): void {
    this.updateHighlight();
  }

  ngAfterViewInit(): void {
    this.updateHighlight();
  }

  ngOnDestroy(): void {
    if (typeof CSS !== 'undefined' && 'highlights' in CSS) {
      // @ts-expect-error CSS Highlighting API is not yet in the standard TS DOM library.
      CSS.highlights.delete(this.highlightName);
    }
  }

  updateHighlight(): void {
    setTimeout(() => {
      // @ts-expect-error CSS Highlighting API is not yet in the standard TS DOM library.
      if (typeof CSS !== 'undefined' && CSS.highlights) {
        // @ts-expect-error CSS Highlighting API is not yet in the standard TS DOM library.
        const existingHighlight = CSS.highlights.get(this.highlightName);
        if (existingHighlight) {
          // @ts-expect-error CSS Highlighting API is not yet in the standard TS DOM library.
          CSS.highlights.delete(this.highlightName);
        }

        const startRanges = createHighlightRanges(
          this.startTimeElementRef,
          this.startDateHighlightInfo
        );

        const endRanges = createHighlightRanges(
          this.endTimeElementRef,
          this.endDateHighlightInfo
        );

        if (startRanges.length > 0 || endRanges.length > 0) {
          // @ts-expect-error CSS Highlighting API is not yet in the standard TS DOM library.
          const highlight = new Highlight(...startRanges, ...endRanges);

          // @ts-expect-error CSS Highlighting API is not yet in the standard TS DOM library.
          CSS.highlights.set(this.highlightName, highlight);
        }
      }
    }, 0);
  }

  private get highlightName(): string {
    const usedIndex = this.instanceId;
    return `time-range-highlight-${usedIndex}`;
  }
}
