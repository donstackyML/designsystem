import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  QueryList,
} from '@angular/core';
import { DxScrollViewModule } from 'devextreme-angular';
import { MeScrollViewModule } from '../../../directives';
import { MePropertyGridComponent } from '../me-property-grid.component';

@Component({
  selector: 'me-property-grid-group',
  standalone: true,
  templateUrl: './me-property-grid-group.component.html',
  styleUrls: ['./me-property-grid-group.component.scss'],
  imports: [CommonModule, DxScrollViewModule, MeScrollViewModule],
  host: {
    '[style.--gap]': 'gap',
  },
})
export class MePropertyGridGroupComponent implements AfterContentInit {
  @Input() gap = '8px';

  @Input() height?: number | string;

  @Input() synchronizeColumnWidths = false;

  @ContentChildren(MePropertyGridComponent)
  private grids!: QueryList<MePropertyGridComponent>;

  private subscriptions: Array<() => void> = [];

  ngAfterContentInit() {
    if (this.synchronizeColumnWidths) {
      this.grids.forEach((grid) => {
        const widthSubscription = grid.rightCellWidthChange.subscribe(
          (width) => {
            this.synchronizeWidths(width);
          }
        );
        const hoverSubscription = grid.isResizeHandlerHoveredChange.subscribe(
          (hovered) => {
            this.synchronizeHoverState(hovered);
          }
        );
        this.subscriptions.push(
          () => widthSubscription.unsubscribe(),
          () => hoverSubscription.unsubscribe()
        );
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((unsubscribe) => unsubscribe());
  }

  private synchronizeWidths(width: string) {
    this.grids.forEach((grid) => {
      grid.rightCellWidth = width;
    });
  }

  private synchronizeHoverState(hovered: boolean) {
    this.grids.forEach((grid) => {
      grid.isResizeHandlerHovered = hovered;
    });
  }
}
