import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginPageComponent} from './login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginPageService} from './login-page.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
];


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgbModule,
  ],
  providers: [
    LoginPageService
  ],
  exports: [
    FormsModule
  ],
})
export class LoginPageModule { }
