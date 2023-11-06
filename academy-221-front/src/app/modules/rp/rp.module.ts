import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpRoutingModule } from './rp-routing.module';
import { RpComponent } from './rp.component';


@NgModule({
  declarations: [
    RpComponent
  ],
  imports: [
    CommonModule,
    RpRoutingModule
  ]
})
export class RpModule { }
