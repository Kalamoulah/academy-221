import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseurRoutingModule } from './professeur-routing.module';
import { ProfesseurComponent } from './professeur.component';


@NgModule({
  declarations: [
    ProfesseurComponent
  ],
  imports: [
    CommonModule,
    ProfesseurRoutingModule
  ]
})
export class ProfesseurModule { }
