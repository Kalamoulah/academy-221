import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponent } from './shared.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { LargeCardComponent } from './components/large-card/large-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    CalendarComponent,
    SmallCardComponent,
    LargeCardComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    RouterModule
  ],
  exports: [

    NavbarComponent,
    CalendarComponent,
    SmallCardComponent,
    LargeCardComponent
  ]
})
export class SharedModule { }
