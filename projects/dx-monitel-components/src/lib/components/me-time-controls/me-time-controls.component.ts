import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DxNumberBoxModule } from 'devextreme-angular';
import { MeNumberBoxModule } from 'projects/dx-monitel-components/src/lib/directives/me-number-box/me-number-box.module';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { FocusInEvent } from 'devextreme/ui/number_box';

@Component({
  selector: 'me-time-controls',
  templateUrl: './me-time-controls.component.html',
  standalone: true,
  styleUrls: ['./me-time-controls.component.css'],
  imports: [DxNumberBoxModule, MeNumberBoxModule],
})
export class MeTimeControlsComponent {
  @Input() time?: number;

  protected $hours = new BehaviorSubject(0);
  protected $minutes = new BehaviorSubject(0);
  protected $seconds = new BehaviorSubject(0);

  @Output() onChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if ('time' in changes && this.time) {
      const totalSeconds = Math.floor(this.time / 1000);
      const h = Math.floor(totalSeconds / 3600);
      const remainingSecondsAfterHours = totalSeconds % 3600;
      const m = Math.floor(remainingSecondsAfterHours / 60);
      const s = remainingSecondsAfterHours % 60;

      this.$hours.next(h);
      this.$minutes.next(m);
      this.$seconds.next(s);
    }
  }

  constructor() {
    combineLatest([this.$hours, this.$minutes, this.$seconds]).subscribe(
      (parts) => {
        const ms = parts.reduce((prev, current, index) => {
          return prev + current * 1000 * Math.pow(60, 2 - index);
        }, 0);
        this.onChange.emit(ms);
      }
    );
  }

  protected onHoursChanges(e: any) {
    this.$hours.next(e.value);
  }
  protected onMinutesChanges(e: any) {
    this.$minutes.next(e.value);
  }
  protected onSecondsChanges(e: any) {
    this.$seconds.next(e.value);
  }

  protected onFocus(e: FocusInEvent) {
    try {
      // @ts-ignore
      (e.event.originalEvent as FocusEvent).target?.select();
    } catch (e) {
      console.error(e);
    }
  }
}
