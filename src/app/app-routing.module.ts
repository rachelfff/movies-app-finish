import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {loginUrl, secureUrl} from './variables/app-urls';
import {LoginPageComponent} from './login-page/login-page.component';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {path: '' , redirectTo: loginUrl , pathMatch: 'full'},
  {path : loginUrl , component: LoginPageComponent },
  {path : secureUrl , component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
