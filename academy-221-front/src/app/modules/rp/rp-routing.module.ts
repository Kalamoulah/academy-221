import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpComponent } from './rp.component';

const routes: Routes = [{ path: '', component: RpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpRoutingModule { }
