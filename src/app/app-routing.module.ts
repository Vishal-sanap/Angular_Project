import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path : '' , component : LandingComponent},
  { path : 'landing' , component : LandingComponent},
  { path : 'admin' , loadChildren:()=>import ('./admin/admin.module').then(mod=>mod.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
