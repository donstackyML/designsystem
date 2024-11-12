import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'me-card',
  standalone: true,
  imports: [CommonModule],
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

      <div class="me-card-content" [style.max-height]="contentHeight">
        <ng-content></ng-content>
      </div>

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
