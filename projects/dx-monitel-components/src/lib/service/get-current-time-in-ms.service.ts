import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DateTimeService {
  getCurrentTimeInMs(): number {
    const SECONDS_IN_HOUR = 3600;
    const MILLISECONDS_IN_SECOND = 1000;

    const now = new Date();
    now.setSeconds(0, 0);

    return (
      (now.getHours() * SECONDS_IN_HOUR + now.getMinutes() * 60) *
      MILLISECONDS_IN_SECOND
    );
  }
}
