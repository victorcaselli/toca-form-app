import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./core/auth/guards/auth-guard.service";

const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule),canActivate:[AuthGuardService] },
  {path: 'login', loadChildren: () => import("./modules/login/login.module").then(m => m.LoginModule)},
  {path: 'disciple-list', loadChildren: () => import('./modules/disciple-list/disciple-list.module').then(m => m.DiscipleListModule),canActivate:[AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
