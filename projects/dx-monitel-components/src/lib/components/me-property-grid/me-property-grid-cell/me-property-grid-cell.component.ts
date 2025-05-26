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
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { contentCopyX20, panZoomX20 } from '@monitel/me-icons';
import { MeIconsModule, MeIconsRegistry } from '@monitel/me-icons-registry';
import { DxSplitterModule } from 'devextreme-angular';

import { WrapComponentsDirective } from './wrap-components.directive';

@Component({
  selector: 'me-property-grid-cell',
  standalone: true,
  imports: [CommonModule, FormsModule, DxSplitterModule, MeIconsModule, WrapComponentsDirective],
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

  @Output() valueChange = new EventEmitter<any>();

  @Output() openMoreProperties: EventEmitter<void> = new EventEmitter<void>();

  @HostBinding('class.property-grid-cell-host') hostClass = true;

  @ContentChild('leftCell', { static: false }) projectedLeftCell!: ElementRef;

  @ContentChild('rightCell', { static: false }) projectedRightCell!: ElementRef;

  @ContentChild('fullCell', { static: false }) fullCell!: ElementRef;

  @ContentChild('additionalProperties', { static: false }) additionalProperties!: ElementRef;

  hasFullCellContent = false;

  hasProjectedLeftCell = false;

  hasProjectedRightCell = false;

  hasAdditionalProperties = false;

  constructor() {
    this.meIconRegistry.registerIcons([contentCopyX20, panZoomX20]);

    // Закомментировано так как в библиотеке иконок сейчас нет иконки panZoomOut20
    // meIconRegistry.registerIcons([panZoomOut20]);
  }

  ngAfterContentInit(): void {
    this.hasFullCellContent = !!this.fullCell;
    this.hasProjectedLeftCell = !!this.projectedLeftCell;
    this.hasProjectedRightCell = !!this.projectedRightCell;
    this.hasAdditionalProperties = !!this.additionalProperties;
  }

  copyValue(value: string | number | boolean | null) {
    if (value !== null && value !== undefined) {
      navigator.clipboard.writeText(value.toString());
    }
  }

  onClickOpenMoreProperties() {
    this.openMoreProperties?.emit();

    if (this.hasAdditionalProperties) {
      this.additionalPropertiesOpened = !this.additionalPropertiesOpened;
    }
  }
}
