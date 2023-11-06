import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttacheRoutingModule } from './attache-routing.module';
import { AttacheComponent } from './attache.component';


@NgModule({
  declarations: [
    AttacheComponent
  ],
  imports: [
    CommonModule,
    AttacheRoutingModule
  ]
})
export class AttacheModule { }
