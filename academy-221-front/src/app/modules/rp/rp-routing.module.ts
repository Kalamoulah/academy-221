import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpComponent } from './rp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ModuleComponent } from './pages/module/module.component';
import { AnneeComponent } from './pages/annee/annee.component';
import { CoursComponent } from './pages/cours/cours.component';
import { ProfesseurComponent } from './pages/professeur/professeur.component';
import { SalleComponent } from './pages/salle/salle.component';
import { ClasseComponent } from './pages/classe/classe.component';
import { SemestreComponent } from './pages/semestre/semestre.component';
import { EtudiantComponent } from './pages/etudiant/etudiant.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { FiliereComponent } from './pages/filiere/filiere.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'annee', component: AnneeComponent },
  { path: 'modules', component: ModuleComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'professeurs', component: ProfesseurComponent },
  { path: 'salles', component: SalleComponent},
  { path: 'classes', component: ClasseComponent },
  { path: 'semestre', component: SemestreComponent },
  { path: 'etudiants', component: EtudiantComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'filiere', component: FiliereComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpRoutingModule { }
