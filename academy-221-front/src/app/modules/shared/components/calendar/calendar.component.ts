import { Component,Input } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  @Input() events!: CalendarEvent[];

  viewdate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  calendarView = CalendarView;

  setView(view: CalendarView) {
    this.view = view;
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    const now = new Date();
    const heureFin = new Date(event.end!);
    let showExpired = false;

    
    

    if (now > heureFin) {
      showExpired = true;
    }

    // this.eventService.sendEvent(event, showExpired);   
  }
}
