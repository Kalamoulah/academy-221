import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpRoutingModule } from './rp-routing.module';
import { RpComponent } from './rp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SharedModule } from '../shared/shared.module';
import { ModuleComponent } from './pages/module/module.component';
import { AnneeComponent } from './pages/annee/annee.component';
import { CoursComponent } from './pages/cours/cours.component';
import { ProfesseurComponent } from './pages/professeur/professeur.component';
import { CardModuleComponent } from './components/card-module/card-module.component';
import { CardCoursComponent } from './components/card-cours/card-cours.component';
import { CardProfComponent } from './components/card-prof/card-prof.component';
import { CardAnneeComponent } from './components/card-annee/card-annee.component';
import { ClasseComponent } from './pages/classe/classe.component';
import { SalleComponent } from './pages/salle/salle.component';
import { EtudiantComponent } from './pages/etudiant/etudiant.component';
import { SemestreComponent } from './pages/semestre/semestre.component';
import { CardSalleComponent } from './components/card-salle/card-salle.component';
import { CardClasseComponent } from './components/card-classe/card-classe.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';



@NgModule({
  declarations: [
   
    RpComponent,
    DashboardComponent,
    ScheduleComponent,
    ModuleComponent,
    AnneeComponent,
    CoursComponent,
    ProfesseurComponent,
    CardModuleComponent,
    CardCoursComponent,
    CardProfComponent,
    CardAnneeComponent,
    ClasseComponent,
    SalleComponent,
    EtudiantComponent,
    SemestreComponent,
    CardSalleComponent,
    CardClasseComponent,
    InscriptionComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RpRoutingModule
  ],
})
export class RpModule { }
