import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DxScrollViewModule } from 'devextreme-angular';
import { MeScrollViewModule } from '../../directives/me-scroll-view/me-scroll-view.module';

@Component({
  selector: 'me-card',
  standalone: true,
  imports: [CommonModule, DxScrollViewModule, MeScrollViewModule],
  template: `
    <div class="me-card" [ngClass]="size">
      <div *ngIf="showHeader" class="me-card-header">
        <div class="me-card-header-left">
          <ng-content select="[card-header-left]"></ng-content>
        </div>
        <div class="me-card-header-right">
          <ng-content select="[card-header-right]"></ng-content>
        </div>
      </div>

      <dx-scroll-view [height]="contentHeight" meScrollView>
        <div class="me-card-content">
          <ng-content></ng-content>
        </div>
      </dx-scroll-view>

      <div *ngIf="showFooter" class="me-card-footer">
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </div>
  `,
})
export class MeCardComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() contentHeight: string = 'auto';
}
