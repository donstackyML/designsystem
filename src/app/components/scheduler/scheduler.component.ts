import { Component } from '@angular/core';
import { SchedulerService, Appointment } from 'src/app/service/scheduler.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent {
  appointments: Appointment[];
  currentDate: Date = new Date(2021, 4, 25);
 
  constructor(service: SchedulerService) {
      this.appointments = service.getAppointments();
  }
}
