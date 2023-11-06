import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttacheComponent } from './attache.component';

const routes: Routes = [{ path: '', component: AttacheComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttacheRoutingModule { }
