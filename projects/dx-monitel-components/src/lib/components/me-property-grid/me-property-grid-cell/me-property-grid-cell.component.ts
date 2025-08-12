import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contentCopyX20, panZoomOutMeX20, panZoomX20 } from '@monitel/me-icons';
import { MeIconsModule, MeIconsRegistry } from '@monitel/me-icons-registry';
import { DxSplitterModule } from 'devextreme-angular';

import { WrapComponentsDirective } from './wrap-components.directive';

@Component({
  selector: 'me-property-grid-cell',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DxSplitterModule,
    MeIconsModule,
    WrapComponentsDirective,
  ],
  templateUrl: './me-property-grid-cell.component.html',
  styleUrls: ['./me-property-grid-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MePropertyGridCellComponent implements AfterContentInit {
  private meIconRegistry = inject(MeIconsRegistry);

  @Input() name?: string;

  @Input() value: any;

  @Input() showRequiredMark?: boolean;

  @Input() readOnly?: boolean;

  @Input() additionalPropertiesOpened = false;

  @Input() showAdditionalProperties = false;

  @Input() displayMode: 'default' | 'additionalOnly' = 'default';

  @Input() isOpen?: boolean;

  @Input() justifyRightCell: 'left' | 'center' | 'right' = 'left';

  @Input() justifyLeftCell: 'left' | 'center' | 'right' = 'left';

  @Input() alignAdditionalPropertiesCell: 'left' | 'center' | 'right' = 'left';

  @Output() valueChange = new EventEmitter<any>();

  @Output() openMoreProperties: EventEmitter<void> = new EventEmitter<void>();

  @Output() toggleExpanded = new EventEmitter<void>();

  @HostBinding('class.property-grid-cell-host') hostClass = true;

  @ContentChild('leftCell', { static: false }) projectedLeftCell!: ElementRef;

  @ContentChild('rightCell', { static: false }) projectedRightCell!: ElementRef;

  @ContentChild('fullCell', { static: false }) fullCell!: ElementRef;

  hasFullCellContent = false;

  hasProjectedLeftCell = false;

  hasProjectedRightCell = false;

  constructor() {
    this.meIconRegistry.registerIcons([
      contentCopyX20,
      panZoomX20,
      panZoomOutMeX20,
    ]);
  }

  ngAfterContentInit(): void {
    this.hasFullCellContent = !!this.fullCell;
    this.hasProjectedLeftCell = !!this.projectedLeftCell;
    this.hasProjectedRightCell = !!this.projectedRightCell;
  }

  @HostBinding('class.display-additional-only')
  get isAdditionalOnlyMode(): boolean {
    return this.displayMode === 'additionalOnly';
  }

  copyValue(value: string | number | boolean | null) {
    if (value !== null && value !== undefined) {
      navigator.clipboard.writeText(value.toString());
    }
  }

  onClickOpenMoreProperties() {
    this.openMoreProperties?.emit();

    if (this.isOpen !== undefined) {
      this.toggleExpanded.emit();
    } else {
      this.additionalPropertiesOpened = !this.additionalPropertiesOpened;
    }
  }

  get isExpanded(): boolean {
    return this.isOpen !== undefined
      ? this.isOpen
      : this.additionalPropertiesOpened;
  }
}
