import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxLoadPanelModule } from 'devextreme-angular';
import { MeLoadPanelModule } from '../../directives/me-load-panel/load-panel.module';

export type StatusType = 'error' | 'success' | 'warning' | 'info';

export interface StatusBarIcon {
  name: string;
  path?: string;
  color?: string;
  size?: 20 | 24;
}

export interface StatusBarItem {
  text: string;
  icon?: StatusBarIcon;
  color?: string;
  backgroundColor?: string;
  loading?: boolean;
  width?: string | number;
}

export interface StatusInfo {
  organizationName: StatusBarItem;
  primaryInfo: StatusBarItem;
  secondaryInfo: StatusBarItem;
  status: {
    type: StatusType;
    message: string;
    icon?: StatusBarIcon;
    loading?: boolean;
  };
}

@Component({
  selector: 'me-status-bar',
  standalone: true,
  imports: [CommonModule, DxLoadPanelModule, MeLoadPanelModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="me-status-bar">
      <div class="me-status-bar__items">
        <!-- Organization Section -->
        <div
          class="me-status-bar__item organization"
          [style.color]="statusInfo.organizationName.color"
          [style.background-color]="statusInfo.organizationName.backgroundColor"
          [style.width]="statusInfo.organizationName.width"
        >
<<<<<<< HEAD
          <ng-container
            *ngIf="!statusInfo.organizationName.loading; else loadingTpl"
          >
            <ng-container
              *ngTemplateOutlet="
                iconTemplate;
                context: {
                  icon: statusInfo.organizationName.icon,
                  size:
                    statusInfo.organizationName.icon?.size || defaultIconSize
                }
              "
            >
            </ng-container>
            <span class="me-status-bar__text">{{
              statusInfo.organizationName.text
            }}</span>
=======
          <ng-container *ngIf="!statusInfo.organizationName.loading; else loadingTpl">
            <ng-container *ngTemplateOutlet="iconTemplate; context: {
              icon: statusInfo.organizationName.icon,
              size: statusInfo.organizationName.icon?.size || defaultIconSize
            }">
            </ng-container>
            <span class="me-status-bar__text">{{statusInfo.organizationName.text}}</span>
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
          </ng-container>
        </div>

        <!-- Primary Info Section -->
        <div
          class="me-status-bar__item primary"
          [style.color]="statusInfo.primaryInfo.color"
          [style.background-color]="statusInfo.primaryInfo.backgroundColor"
          [style.width]="statusInfo.primaryInfo.width"
        >
<<<<<<< HEAD
          <ng-container
            *ngIf="!statusInfo.primaryInfo.loading; else loadingTpl"
          >
            <ng-container
              *ngTemplateOutlet="
                iconTemplate;
                context: {
                  icon: statusInfo.primaryInfo.icon,
                  size: statusInfo.primaryInfo.icon?.size || defaultIconSize
                }
              "
            >
            </ng-container>
            <span class="me-status-bar__text">{{
              statusInfo.primaryInfo.text
            }}</span>
=======
          <ng-container *ngIf="!statusInfo.primaryInfo.loading; else loadingTpl">
            <ng-container *ngTemplateOutlet="iconTemplate; context: {
              icon: statusInfo.primaryInfo.icon,
              size: statusInfo.primaryInfo.icon?.size || defaultIconSize
            }">
            </ng-container>
            <span class="me-status-bar__text">{{statusInfo.primaryInfo.text}}</span>
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
          </ng-container>
        </div>

        <!-- Secondary Info Section -->
        <div
          class="me-status-bar__item secondary"
          [style.color]="statusInfo.secondaryInfo.color"
          [style.background-color]="statusInfo.secondaryInfo.backgroundColor"
          [style.width]="statusInfo.secondaryInfo.width"
        >
<<<<<<< HEAD
          <ng-container
            *ngIf="!statusInfo.secondaryInfo.loading; else loadingTpl"
          >
            <ng-container
              *ngTemplateOutlet="
                iconTemplate;
                context: {
                  icon: statusInfo.secondaryInfo.icon,
                  size: statusInfo.secondaryInfo.icon?.size || defaultIconSize
                }
              "
            >
            </ng-container>
            <span class="me-status-bar__text">{{
              statusInfo.secondaryInfo.text
            }}</span>
=======
          <ng-container *ngIf="!statusInfo.secondaryInfo.loading; else loadingTpl">
            <ng-container *ngTemplateOutlet="iconTemplate; context: {
              icon: statusInfo.secondaryInfo.icon,
              size: statusInfo.secondaryInfo.icon?.size || defaultIconSize
            }">
            </ng-container>
            <span class="me-status-bar__text">{{statusInfo.secondaryInfo.text}}</span>
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
          </ng-container>
        </div>

        <!-- Status Section -->
        <div
          class="me-status-bar__item status"
          [class]="'me-status-bar__status--' + statusInfo.status.type"
        >
          <ng-container *ngIf="!statusInfo.status.loading; else loadingTpl">
<<<<<<< HEAD
            <ng-container
              *ngTemplateOutlet="
                iconTemplate;
                context: {
                  icon:
                    statusInfo.status.icon ||
                    getDefaultStatusIcon(statusInfo.status.type),
                  size: statusInfo.status.icon?.size || defaultIconSize
                }
              "
            >
            </ng-container>
            <span class="me-status-bar__text status-message">{{
              statusInfo.status.message
            }}</span>
=======
            <ng-container *ngTemplateOutlet="iconTemplate; context: {
              icon: statusInfo.status.icon || getDefaultStatusIcon(statusInfo.status.type),
              size: (statusInfo.status.icon?.size || defaultIconSize)
            }">
            </ng-container>
            <span class="me-status-bar__text status-message">{{statusInfo.status.message}}</span>
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
          </ng-container>
        </div>
      </div>
    </div>

    <!-- Loading Template -->
    <ng-template #loadingTpl>
      <dx-load-panel
        #loadPanel
        meLoadPanel
        [visible]="true"
        [showIndicator]="true"
        [showPane]="false"
        [shading]="false"
        [message]="''"
      ></dx-load-panel>
    </ng-template>

    <!-- Icon Template -->
    <ng-template #iconTemplate let-icon="icon" let-size="size">
      <ng-container *ngIf="icon">
        <ng-container *ngIf="icon.path; else defaultIcon">
          <img
            [src]="icon.path"
            [alt]="icon.name"
            class="me-status-bar__icon"
            [style.width.px]="size"
            [style.height.px]="size"
<<<<<<< HEAD
          />
=======
          >
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
        </ng-container>
        <ng-template #defaultIcon>
          <i
            class="dx-icon"
            [class]="'dx-icon-' + icon.name"
            [style.color]="icon.color"
            [style.fontSize.px]="size"
          ></i>
        </ng-template>
      </ng-container>
    </ng-template>
  `,
<<<<<<< HEAD
  styles: [
    `
      .me-status-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: var(--Controls-Size-L);
        border-top: 1px solid var(--Dividers-Borders-Long);
        background: var(--Background-Canvas);
        z-index: 1000;

        &__items {
          display: flex;
          align-items: stretch;
          height: 100%;
          gap: 1px;
          background: var(--Dividers-Borders-Short);
        }

        &__item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 16px;
          font-size: var(--Font-Size-XS);
          line-height: var(--Line-Height-XS);
          white-space: nowrap;
          background: var(--Background-Content);
          transition: all 0.2s ease;

          &.organization {
            min-width: 200px;
            flex-shrink: 0;
          }

          &.primary {
            min-width: 250px;
            flex-shrink: 0;
          }

          &.secondary {
            min-width: 180px;
            flex-shrink: 0;
          }

          &.status {
            flex: 1;
            min-width: 0;
          }

          dx-load-panel {
            margin: auto;
          }
        }

        &__text {
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
          flex: 1;
        }

        &__icon {
          flex-shrink: 0;
          object-fit: contain;
        }
      }

      // Стили для LoadPanel
      :host ::ng-deep {
        .dx-loadpanel-wrapper {
          background: transparent;
        }

        .dx-loadpanel-content {
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
        }

        .dx-loadpanel-message {
          display: none;
        }

        .dx-loadindicator {
          margin: 0;
        }

        .dx-loadindicator-segment {
          background: var(--Controls-Content-In-Controls-Accent-Default);
        }
      }
    `,
  ],
=======
  styles: [`
    .me-status-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: var(--Controls-Size-L);
      border-top: 1px solid var(--Dividers-Borders-Long);
      background: var(--Background-Canvas);
      z-index: 1000;

      &__items {
        display: flex;
        align-items: stretch;
        height: 100%;
        gap: 1px;
        background: var(--Dividers-Borders-Short);
      }

      &__item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 16px;
        font-size: var(--Font-Size-XS);
        line-height: var(--Line-Height-XS);
        white-space: nowrap;
        background: var(--Background-Content);
        transition: all 0.2s ease;

        &.organization {
          min-width: 200px;
          flex-shrink: 0;
        }

        &.primary {
          min-width: 250px;
          flex-shrink: 0;
        }

        &.secondary {
          min-width: 180px;
          flex-shrink: 0;
        }

        &.status {
          flex: 1;
          min-width: 0;
        }

        dx-load-panel {
          margin: auto;
        }
      }

      &__text {
        overflow: hidden;
        text-overflow: ellipsis;
        min-width: 0;
        flex: 1;
      }

      &__icon {
        flex-shrink: 0;
        object-fit: contain;
      }
    }

    // Стили для LoadPanel
    :host ::ng-deep {
      .dx-loadpanel-wrapper {
        background: transparent;
      }

      .dx-loadpanel-content {
        background: transparent;
        border: none;
        box-shadow: none;
        padding: 0;
      }

      .dx-loadpanel-message {
        display: none;
      }

      .dx-loadindicator {
        margin: 0;
      }

      .dx-loadindicator-segment {
        background: var(--Controls-Content-In-Controls-Accent-Default);
      }
    }
  `]
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
})
export class MeStatusBarComponent {
  @Input() statusInfo!: StatusInfo;
  @Input() defaultIconSize: 20 | 24 = 20;

  private readonly defaultStatusIcons: Record<StatusType, StatusBarIcon> = {
    error: { name: 'warning', color: 'var(--Text-Error)' },
    success: { name: 'check', color: 'var(--Text-Success)' },
<<<<<<< HEAD
    warning: {
      name: 'warning',
      color: 'var(--Controls-Content-In-Controls-Attention-Default)',
    },
    info: {
      name: 'info',
      color: 'var(--Controls-Content-In-Controls-Accent-Default)',
    },
=======
    warning: { name: 'warning', color: 'var(--Controls-Content-In-Controls-Attention-Default)' },
    info: { name: 'info', color: 'var(--Controls-Content-In-Controls-Accent-Default)' }
>>>>>>> a3458aab165540c676ecedd049a4d915a2d0aea7
  };

  getDefaultStatusIcon(type: StatusType): StatusBarIcon {
    return this.defaultStatusIcons[type];
  }
}
