import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {loginUrl, secureUrl} from './variables/app-urls';
import {LoginPageComponent} from './login-page/login-page.component';


const routes: Routes = [
  {path: '' , redirectTo: loginUrl , pathMatch: 'full'},
  {path : loginUrl , loadChildren: () => import('./login-page/login-page.module').then(m => m.LoginPageModule) },
  {path : secureUrl , loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
