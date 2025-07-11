import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { DxDropDownButtonModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxTooltipModule } from 'devextreme-angular/ui/tooltip';
import { MeIconComponent } from '../me-icon/me-icon.component';

@Component({
  selector: 'me-header',
  standalone: true,
  imports: [
    CommonModule,
    DxButtonModule,
    DxTooltipModule,
    MeIconComponent,
    DxDropDownButtonModule,
  ],
  templateUrl: './me-header.component.html',
})
export class MeHeaderComponent {
  @Input() size: 'small' | 'large' = 'small';
  @Input() appInfo?: {
    appVersion?: string;
    uiVersion?: string;
    host?: string;
  };
  @Input() title?: string;
  @Input() description?: string;
  @Input() logoSrc?: string;
  @Input() withAppInfoTooltip?: boolean;
}
