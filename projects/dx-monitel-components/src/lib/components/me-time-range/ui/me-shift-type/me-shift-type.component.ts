import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DxDateBoxModule, DxSelectBoxModule } from 'devextreme-angular';

import { MeDateBoxModule, MeSelectBoxModule } from '../../../../directives';
import { ShiftType } from '../me-shift-settings';
import { ShiftTypeProps } from './me-shift-type.model';
import { defaultShiftTypes } from './me-shift-type.options';

@Component({
  selector: 'me-shift-type',
  standalone: true,
  imports: [
    DxSelectBoxModule,
    MeSelectBoxModule,
    DxDateBoxModule,
    MeDateBoxModule,
  ],
  templateUrl: './me-shift-type.component.html',
  styleUrls: ['./me-shift-type.component.scss'],
})
export class MeShiftTypeComponent {
  @Input() valueExpr = 'id';

  @Input() displayExpr = 'text';

  @Input() shiftTypes: Array<ShiftTypeProps> = defaultShiftTypes;

  @Input() currentShiftType?: ShiftType = this.shiftTypes[0]?.id;

  @Output() valueChange = new EventEmitter<ShiftType>();

  onValueChanged(event: any): void {
    this.currentShiftType = event.value;
    this.valueChange.emit(this.currentShiftType);
  }
}
