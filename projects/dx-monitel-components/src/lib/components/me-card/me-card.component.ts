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
  styles: [
    `
      .me-card {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        border: 1px solid #dfe0ed;
        border-radius: 1px;
        font-family: Roboto, sans-serif;
      }

      .me-card.small {
        width: 420px;
      }
      .me-card.medium {
        width: 600px;
      }
      .me-card.large {
        width: 650px;
      }

      .me-card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        border-radius: 1px;
        background-color: #ffffff;
        border-bottom: 1px solid #dfeded;
      }

      .me-card-header-left {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
      }

      .me-card.small .me-card-header-left {
        font-size: 16px;
        line-height: 20px;
      }

      .me-card.medium .me-card-header-left {
        font-size: 20px;
        line-height: 24px;
      }

      .me-card.large .me-card-header-left {
        font-size: 24px;
        line-height: 28px;
      }

      .me-card-header-right {
        display: flex;
        gap: 10px;
        align-items: center;
      }

      .me-card-content {
        flex: 1;
        padding: 16px;
        overflow-y: auto;
      }

      .me-card-footer {
        display: flex;
        justify-content: flex-end;
        padding: 16px;
        gap: 8px;
      }
    `,
  ],
})
export class MeCardComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showHeader: boolean = true;
  @Input() showFooter: boolean = false;
  @Input() contentHeight: string = 'auto';
}
