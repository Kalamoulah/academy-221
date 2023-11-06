import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'rp', loadChildren: () => import('./modules/rp/rp.module').then(m => m.RpModule) }, { path: 'attache', loadChildren: () => import('./modules/attache/attache.module').then(m => m.AttacheModule) }, { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) }, { path: 'professeur', loadChildren: () => import('./modules/professeur/professeur.module').then(m => m.ProfesseurModule) }, { path: 'shared', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
